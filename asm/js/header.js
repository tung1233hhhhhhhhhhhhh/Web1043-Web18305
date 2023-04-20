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

const btnHovers = document.querySelectorAll(".btn-hover");

btnHovers.forEach((btnHover) => {
  btnHover.addEventListener("mouseover", () => {
    btnHover.style.boxShadow = "0 0 10px #ccc";
    btnHover.style.backgroundColor = "#f9f9f9";
  });
  btnHover.addEventListener("mouseout", () => {
    btnHover.style.boxShadow = "none";
    btnHover.style.backgroundColor = "none";
  });
});

//

const iplogin1 = document.querySelector(".login-input-1");
const lblogin1 = document.querySelector(".login-label-1");
const iplogin2 = document.querySelector(".login-input-2");
const lblogin2 = document.querySelector(".login-label-2");

iplogin1.addEventListener("input", function () {
  const email = iplogin1.value.trim();
  if (email === "") {
    iplogin1.style.border = "1px solid blue";
    lblogin1.style.border = "1px solid blue";
  } else if (!isValidEmail(email)) {
    iplogin1.style.border = "1px solid red";
    lblogin1.style.border = "1px solid red";
  } else {
    iplogin1.style.border = "1px solid green";
    lblogin1.style.border = "1px solid green";
  }
});

iplogin1.addEventListener("focus", function () {
  iplogin1.style.border = "1px solid blue";
  lblogin1.style.border = "1px solid blue";
});

iplogin1.addEventListener("blur", function () {
  const email = iplogin1.value.trim();

  if (email === "") {
    iplogin1.style.border = "1px solid #ccc";
    lblogin1.style.border = "none";
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//

iplogin2.addEventListener("input", function () {
  const password = iplogin2.value.trim();
  if (password.length === 0) {
    iplogin2.style.border = "1px solid blue";
    lblogin2.style.border = "1px solid blue";
  } else if (password.length < 6) {
    iplogin2.style.border = "1px solid red";
    lblogin2.style.border = "1px solid red";
  } else {
    iplogin2.style.border = "1px solid green";
    lblogin2.style.border = "1px solid green";
  }
});

iplogin2.addEventListener("focus", function () {
  iplogin2.style.border = "1px solid blue";
  lblogin2.style.border = "1px solid blue";
});

iplogin2.addEventListener("blur", function () {
  const password = iplogin2.value.trim();

  if (password === "") {
    iplogin2.style.border = "1px solid #ccc";
    lblogin2.style.border = "none";
  }
});

//

const ipsigup1 = document.querySelector(".sigup-input-1");
const lbsigup1 = document.querySelector(".sigup-label-1");
const ipsigup2 = document.querySelector(".sigup-input-2");
const lbsigup2 = document.querySelector(".sigup-label-2");
const ipsigup3 = document.querySelector(".sigup-input-3");
const lbsigup3 = document.querySelector(".sigup-label-3");
const ipsigup4 = document.querySelector(".sigup-input-4");
const lbsigup4 = document.querySelector(".sigup-label-4");

ipsigup1.addEventListener("input", function () {
  const username = ipsigup1.value.trim();
  if (username.length === 0) {
    ipsigup1.style.border = "1px solid blue";
    lbsigup1.style.border = "1px solid blue";
  } else if (username.length < 10) {
    ipsigup1.style.border = "1px solid red";
    lbsigup1.style.border = "1px solid red";
  } else {
    ipsigup1.style.border = "1px solid green";
    lbsigup1.style.border = "1px solid green";
  }
});

ipsigup1.addEventListener("focus", function () {
  ipsigup1.style.border = "1px solid blue";
  lbsigup1.style.border = "1px solid blue";
});

ipsigup1.addEventListener("blur", function () {
  const username = ipsigup1.value.trim();

  if (username === "") {
    ipsigup1.style.border = "1px solid #ccc";
    lbsigup1.style.border = "none";
  }
});

//

ipsigup2.addEventListener("input", function () {
  const email = ipsigup2.value.trim();
  if (email === "") {
    ipsigup2.style.border = "1px solid blue";
    lbsigup2.style.border = "1px solid blue";
  } else if (!isValidEmail(email)) {
    ipsigup2.style.border = "1px solid red";
    lbsigup2.style.border = "1px solid red";
  } else {
    ipsigup2.style.border = "1px solid green";
    lbsigup2.style.border = "1px solid green";
  }
});

ipsigup2.addEventListener("focus", function () {
  ipsigup2.style.border = "1px solid blue";
  lbsigup2.style.border = "1px solid blue";
});

ipsigup2.addEventListener("blur", function () {
  const email = ipsigup2.value.trim();

  if (email === "") {
    ipsigup2.style.border = "1px solid #ccc";
    lbsigup2.style.border = "none";
  }
});

//

ipsigup3.addEventListener("input", function () {
  const password = ipsigup3.value.trim();
  if (password.length === 0) {
    ipsigup3.style.border = "1px solid blue";
    lbsigup3.style.border = "1px solid blue";
  } else if (password.length < 6) {
    ipsigup3.style.border = "1px solid red";
    lbsigup3.style.border = "1px solid red";
  } else {
    ipsigup3.style.border = "1px solid green";
    lbsigup3.style.border = "1px solid green";
  }
});

ipsigup3.addEventListener("focus", function () {
  ipsigup3.style.border = "1px solid blue";
  lbsigup3.style.border = "1px solid blue";
});

ipsigup3.addEventListener("blur", function () {
  const password = ipsigup3.value.trim();

  if (password === "") {
    ipsigup3.style.border = "1px solid #ccc";
    lbsigup3.style.border = "none";
  }
});

//

ipsigup4.addEventListener("input", function () {
  const password = ipsigup3.value.trim();
  const passwordconfirm = ipsigup4.value.trim();
  if (passwordconfirm.length === 0) {
    ipsigup4.style.border = "1px solid blue";
    lbsigup4.style.border = "1px solid blue";
  } else if (passwordconfirm != password || passwordconfirm.length < 6) {
    ipsigup4.style.border = "1px solid red";
    lbsigup4.style.border = "1px solid red";
  } else {
    ipsigup4.style.border = "1px solid green";
    lbsigup4.style.border = "1px solid green";
  }
});

ipsigup4.addEventListener("focus", function () {
  ipsigup4.style.border = "1px solid blue";
  lbsigup4.style.border = "1px solid blue";
});

ipsigup4.addEventListener("blur", function () {
  const passwordconfirm = ipsigup4.value.trim();

  if (passwordconfirm === "") {
    ipsigup4.style.border = "1px solid #ccc";
    lbsigup4.style.border = "none";
  }
});
