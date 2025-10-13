const toggles = document.querySelectorAll(".toggle");
const forms = document.querySelectorAll(".form");

// console.log(toggles)
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    forms.forEach((form) => {
      form.classList.remove("active");
    });
    document
      .getElementById(`${toggle.dataset.form}Form`)
      .classList.add("active");
  });
});

// Registration Forrm Logic
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  const registerData = { name, email, password };

  localStorage.setItem("userDetails", JSON.stringify(registerData));

  const temp = document.querySelector('[data-form="login"]').click();

  //   console.log(registerData);
});

// Login Form
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");

  //   const loginData = { email, password };
  const user = JSON.parse(localStorage.getItem("userDetails"));

  if (user && user.email === email.value && user.password === password.value) {
    alert(`Welcome back, ${user.name}!`);
    email.value = ""
    password.value = ""
  } else {
    alert("Invalid email or password");
  }

  //   console.log(loginData);
});
