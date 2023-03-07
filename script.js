const emailInput = document.querySelector("#email");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("#login");
const signupBtn = document.querySelector("#signup");
const emailRegexCheck = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
const usernameRegexCheck = /^[a-zA-Z]+$/
const passwordRegexCheck = /^[a-zA-Z0-9]{6,12}$/

function handleLoginSignup() {
	if (!usernameRegexCheck.test(usernameInput.value) ||
		!passwordRegexCheck.test(passwordInput.value) ||
		!emailRegexCheck.test(emailInput.value)) {
		alert("Invalid input");
	} else {
		alert(this.textContent + " successful");
	}
}

loginBtn.addEventListener("click", handleLoginSignup);
signupBtn.addEventListener("click", handleLoginSignup);
