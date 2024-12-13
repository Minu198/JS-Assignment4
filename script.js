$(document).ready(function () {
    $("#accountForm").on("submit", function (event) {
        let isValid = true;

        // Clear previous errors
        $(".error").text("");

        // Name validation
        const name = $("#name").val().trim();
        if (name.length < 3 || name.length > 50) {
            isValid = false;
            $("#nameError").text("Name must be between 3 and 50 characters.");
        }

        // Email validation
        const email = $("#email").val().trim();
        if (email === "") {
            isValid = false;
            $("#emailError").text("Email is required.");
        }

        // Phone validation
        const phone = $("#phone").val().trim();
        if (phone.length < 10 || phone.length > 14) {
            isValid = false;
            $("#phoneError").text("Phone must be between 10 and 14 characters.");
        }

        // Age validation
        const age = parseInt($("#age").val(), 10);
        if (isNaN(age) || age < 18 || age > 120) {
            isValid = false;
            $("#ageError").text("Age must be between 18 and 120.");
        }

        // Gender validation
        const gender = $("#gender").val().trim();
        if (gender.length < 4 || gender.length > 15) {
            isValid = false;
            $("#genderError").text("Gender must be between 4 and 15 characters.");
        }

        // Address validation (optional but max length)
        const address = $("#address").val().trim();
        if (address.length > 50) {
            isValid = false;
            $("#addressError").text("Address cannot exceed 50 characters.");
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});