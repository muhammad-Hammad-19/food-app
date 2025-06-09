const signup = (event) => {
  const userName = document.getElementById("name").value;
  const signupEmail = document.getElementById("signup-email").value;
  const signupPass = document.getElementById("signup-pass").value;
  event.preventDefault(); //page relod na ho jabi ye use kiya hai methode //
  if (signupEmail === "" || signupPass === "") {
    return alert("Please complete all fields");
  } else {
    alert("Successful Signup");
    window.location.href = "login.html";
    localStorage.setItem("User", userName);
    localStorage.setItem("Email", signupEmail);
    localStorage.setItem("Pass", signupPass);
  }
};
// login password ki site hai
const login = (event) => {
  event.preventDefault(); //page relod na ho jabi ye use kiya hai methode //
  const login_Email = document.getElementById("login-email").value;
  const login_Pass = document.getElementById("login-pass").value;
  const local_email_user = localStorage.getItem("Email");
  const local_Pass_user = localStorage.getItem("Pass");
  if (local_email_user === login_Email && local_Pass_user === login_Pass) {
    alert("Welocome");
    window.location.href = "admin.html";
  } else {
    return alert("Please  go to Signup:");
  }
};
