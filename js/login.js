const ADMIN_USER = "admin";
const ADMIN_PASS = "Lib@123";

function login() {
  const role = document.getElementById("role").value;
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (role === "admin") {
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      localStorage.setItem("role", "admin");
      window.location.href = "admin.html";
    } else {
      error.innerText = "Invalid admin credentials";
    }
  } else {
    if (!user) {
      error.innerText = "Enter username";
      return;
    }
    localStorage.setItem("role", "member");
    localStorage.setItem("username", user);
    window.location.href = "member.html";
  }
}
