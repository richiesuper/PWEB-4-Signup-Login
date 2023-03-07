function loginSubmit() {
	alert("Login Successful!");
}

function createAccount() {
	var n = document.getElementById("username").value;
	var e = document.getElementById("email").value;
	var p = document.getElementById("password").value;
	var cp = document.getElementById("confirm-password").value;

	var letters = /^[A-Za-z]+$/;
	var email_val = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (!letters.test(n)) {
		return alert('Name is incorrect must contain alphabets only');
	} else if (!email_val.test(e)) {
		return alert('Invalid email format please enter valid email id');
	} else if (p != cp) {
		return alert("Passwords not matching");
	} else if (p.length > 12) {
		return alert("Password maximum length is 12");
	} else if (p.length < 6) {
		return alert("Password minimum length is 6");
	} else {
		alert("Your account has been created successfully! Redirecting to Login Page...");
		window.location = "./index.html";
		return;
	}
}
