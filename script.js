document
    .getElementById("submit-form")
    .addEventListener("submit", function (event) {
        // Prevent the form from submitting automatically
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate the form fields
        if (name === "" || email === "" || message === "") {
            alert("All fields are required!");
            return;
        }

        // Simple email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Create an XMLHttpRequest object
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "submit_form.php", true);
        xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );

        // Handle the response from the server
        xhr.onload = function () {
            if (xhr.status === 200) {
                alert("Form submitted successfully!");
            } else {
                alert(
                    "There was an error submitting the form. Please try again."
                );
            }
        };

        // Send the form data
        const formData = `name=${encodeURIComponent(
            name
        )}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(
            message
        )}`;
        xhr.send(formData);
    });
