const input = document.querySelectorAll(".input-control");
const form = document.querySelector(".form-control");

const defaultAccount = {
  name: "Tran Hieu",
  username: "hieu",
  password: "hieuaz123",
  gender: "Nam",
};

const userReg = JSON.parse(localStorage.getItem("user"));

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = input[0].value;
  const password = input[1].value;
  if (
    (userReg && username == userReg.username && password == userReg.password) ||
    (username == defaultAccount.username && password == defaultAccount.password)
  ) {
    localStorage.setItem("isLogin", true);
    window.location.href = "./home";
  } else if (
    (username == defaultAccount.username &&
      password !== defaultAccount.password) ||
    (userReg && username == userReg.username && password !== userReg.password)
  ) {
    input[0].style.border = "1px solid #ccc";
    document.querySelector(".error-msg.username").style.display = "none";
    document.querySelector(".error-msg.password").style.display = "block";
  } else {
    input[0].style.border = "1px solid red";
    document.querySelector(".error-msg.username").style.display = "block";
    document.querySelector(".error-msg.password").style.display = "none";
  }
});
