window.addEventListener("scroll", function () {
  var map = document.querySelector(".map");
  var scrolled = window.scrollY;

  if (scrolled >= 2481) {
    map.style.display = "block";
  } else {
    map.style.display = "none";
  }
});

// slider

window.addEventListener("load", function () {
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const next = document.querySelector(".slider-next");
  const prev = document.querySelector(".slider-prev");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  let postionX = 0;
  let index = 0;
  next.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  prev.addEventListener("click", function () {
    handleChangeSlide(-1);
  });

  function handleChangeSlide(direction) {
    index = Math.max(Math.min(index + direction, sliderLength - 1), 0);
    postionX = -index * sliderItemWidth;
    sliderMain.style.transform = `translateX(${postionX}px)`;
  }
});

const imgElements = document.querySelectorAll(".about-left, .box1, .box2,.box");

function handleMouseOver() {
  this.style.cursor = "pointer";
  this.style.border = "1px solid #ccc";
  this.style.transition = ".25s ease";
}

function handleMouseOut() {
  this.style.cursor = "none";
  this.style.border = "none";
}

imgElements.forEach((img) => {
  img.addEventListener("mouseover", handleMouseOver);
  img.addEventListener("mouseout", handleMouseOut);
});
