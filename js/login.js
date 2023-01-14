const login_signup_form = document.querySelector(".login_signup_form");
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const signupBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");
const bg = document.querySelector(".bg");

const loginFormFlip = () => {
  signupBtn.addEventListener("click", () => {
    setTimeout(() => {
      login.classList.add("hidden");
      signup.classList.remove("hidden");
    }, 300);
    bg.style.transform = "rotateY(180deg)";
    login_signup_form.style.transform = "rotateY(180deg)";
  });

  loginBtn.addEventListener("click", () => {
    setTimeout(() => {
      signup.classList.add("hidden");
      login.classList.remove("hidden");
    }, 300);
    bg.style.transform = "rotateY(0deg)";
    login_signup_form.style.transform = "rotateY(0deg)";
  });
};

loginFormFlip();
