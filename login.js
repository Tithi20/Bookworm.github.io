function switchForm(className, e) {
  e.preventDefault();
  const allForm = document.querySelectorAll("form");
  const form = document.querySelector(`form.${className}`);

  allForm.forEach((item) => {
    item.classList.remove("active");
  });
  form.classList.add("active");
}

const registerPassword = document.querySelector("#password1");
const registerConfirmPassword = document.querySelector("#confirm-password");

registerPassword.addEventListener("input", function () {
  registerConfirmPassword.pattern = `${this.value}`;
});

const error = document.querySelector("#error");

//Login page
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const tenth = document.querySelector("#tenth");
const form_id = document.querySelector("#form_id");
function validate() {
  if (email.value == "" || password.value == "") {
    alert("Empty");
    return false;
  } else if (password.value != "12345678") {
    error.innerHTML = "Incorrect Password";
    return false;
  } else {
    return true;
  }
}

//Sign up page

const email1 = document.querySelector(".email");
const password1 = document.querySelector(".password");
const confirm_password = document.querySelector("#confirm-password");
const error1 = document.getElementById("error1");

function validate1() {
  const error1 = document.getElementById("error1");
  console.log(registerPassword.value);
  if (email1.value == "" || password1.value == "") {
    alert("Empty password");
    return false;
  } else if (registerPassword.value != registerConfirmPassword.value) {
    error1.innerHTML = "Passwords dont match. Check password";
    return false;
  } else if (registerConfirmPassword.value == "") {
    error1.innerHTML = "Enter confirm passowrd";
    return false;
  } else {
    return true;
  }
}

//validation for the radio buttons to open in different pages in signup page

function validation1() {
  const form_id1 = document.querySelector("#form_id1");
  const eight_form1 = document.querySelector("#eight1");
  const ten_form1 = document.querySelector("#ten1");
  // action = "documents.html";
  // console.log(yes_form.checked)

  if (eight_form1.checked) {
    form_id1.setAttribute("action", "eight.html");
  } else if (ten_form1.checked) {
    form_id1.setAttribute("action", "ten.html");
  } else {
    form_id1.setAttribute("action", "twelve.html");
  }
}
