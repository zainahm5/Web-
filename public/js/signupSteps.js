function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

async function nextStep(step) {
    if (step === 2) {
        const email = document.getElementById("email").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        document.querySelectorAll(".error-box").forEach(el => el.remove());

        // (specific error ordering)
        // 1st: Check if any field is empty.
        if (!email || !firstName || !lastName || !password || !confirmPassword) {
            showError("Please fill out all fields.", "step1");
            return;
        }

        // 2nd: Check if email format is valid (only if all fields are filled)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            showError("Please enter a valid email address.", "step1");
            return;
        }

        // 3rd: Check if password is at least 8 characters long
        if (password.length < 8) {
            showError("Password must be at least 8 characters long.", "step1");
            return;
        }

        // 4th: Check if passwords match
        if (password !== confirmPassword) {
            showError("Passwords do not match!", "step1");
            return;
        }

        // 5th: check if email is already registered.
        try {
            const response = await fetch(`/check-email?email=${email}`);
            const data = await response.json();

            if (data.exists) {
                showError("The email you entered is already registered.", "step1");
                return;
            }
        } catch (error) {
            showError("An error occurred. Please try again.", "step1");
            return;
        }

        document.getElementById("hiddenEmail").value = email;
        document.getElementById("hiddenFirstName").value = firstName;
        document.getElementById("hiddenLastName").value = lastName;
        document.getElementById("hiddenPassword").value = password;

        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
    }
}

async function validateStep2() {
    const phone = document.getElementById("phone").value.trim();
    const nationalID = document.getElementById("nationalID").value.trim();
    const birthDate = document.getElementById("birthDate").value;
    const gender = document.getElementById("gender").value;
    const education = document.getElementById("education").value;
    const volunteeringExp = document.getElementById("volunteeringExp").value;

    // (specific error ordering)
    // 1st: Check if any field is empty.
    if (!phone || !nationalID || !birthDate || !gender || !education || !volunteeringExp) {
        showError("Please fill out all fields.", "step2");
        return false;
    }

    // 2nd: check if phone number is already registered.
    try {
        const phoneRes = await fetch(`/check-phone?phone=${phone}`);
        const phoneData = await phoneRes.json();
        if (phoneData.exists) {
            showError("The phone number is already registered.", "step2");
            return false;
        }

        // 3rd: check if id is already registered.
        const idRes = await fetch(`/check-nationalid?nationalID=${nationalID}`);
        const idData = await idRes.json();
        if (idData.exists) {
            showError("The National ID is already registered.", "step2");
            return false;
        }
    } catch (error) {
        console.error("Error checking duplicates:", error);
        showError("An error occurred. Please try again.", "step2");
        return false;
    }

    return true;
}

function showError(message, step) {
    let errorBox = document.querySelector(".error-box");
    if (!errorBox) {
        errorBox = document.createElement("div");
        errorBox.className = "error-box";
    }
    errorBox.innerText = message;

    if (step === "step1") {
        document.getElementById("signupForm").insertBefore(errorBox, document.getElementById("signupForm").firstChild);
        document.getElementById("step1").style.display = "block";
        document.getElementById("step2").style.display = "none";
    } else {
        document.getElementById("signupForm").insertBefore(errorBox, document.getElementById("signupForm").firstChild);
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
    }
}
