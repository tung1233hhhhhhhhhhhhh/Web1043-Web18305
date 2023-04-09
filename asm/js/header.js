// scroll nav
window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// login

const btnLogin = document.querySelector(".login-button");
const modalLogin = document.querySelector(".modal-login");
const closelogin = document.querySelector(".modal_login-close");
const modalContainerLogin = document.querySelector(".modal_login-container ");

function showLogin() {
  modalLogin.classList.add("open");
}

function closeLogin() {
  modalLogin.classList.remove("open");
}

btnLogin.addEventListener("click", showLogin);
closelogin.addEventListener("click", closeLogin);
modalLogin.addEventListener("click", closeLogin);
modalContainerLogin.addEventListener("click", function (event) {
  event.stopPropagation();
});

//sigup

const btnSigup = document.querySelector(".sigup-button");
const modalSigup = document.querySelector(".modal-sigup");
const closesigup = document.querySelector(".modal_sigup-close");
const modalContainerSigup = document.querySelector(".modal_sigup-container");

function showSigup() {
  modalSigup.classList.add("open");
}

function closeSigup() {
  modalSigup.classList.remove("open");
}

btnSigup.addEventListener("click", showSigup);
closesigup.addEventListener("click", closeSigup);
modalSigup.addEventListener("click", closeSigup);
modalContainerSigup.addEventListener("click", function (event) {
  event.stopPropagation();
});

const creatacc = document.querySelector(".creatacc");

creatacc.addEventListener("click", closeLogin);
creatacc.addEventListener("click", showSigup);

// scroll smooth

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});
