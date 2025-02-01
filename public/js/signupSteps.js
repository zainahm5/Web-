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

        if (!email || !firstName || !lastName || !password || !confirmPassword) {
            showError("Please fill out all fields.", "step1");
            return;
        }

        if (password !== confirmPassword) {
            showError("Passwords do not match!", "step1");
            return;
        }

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

    if (!phone || !nationalID || !birthDate || !gender || !education || !volunteeringExp) {
        showError("Please fill out all fields before submitting.", "step2");
        return false;
    }

    try {
        const phoneRes = await fetch(`/check-phone?phone=${phone}`);
        const phoneData = await phoneRes.json();
        if (phoneData.exists) {
            showError("The phone number is already registered.", "step2");
            return false;
        }

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
