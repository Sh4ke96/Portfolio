AOS.init();
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".nav__ul");
const scroll_block = document.querySelector("body");
const mobile_link = document.querySelectorAll(".nav__link");
const scroll_up_button = document.querySelector(".scroll__button");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");

  if (mobile_menu.classList.contains("is-active")) {
    scroll_block.classList.add("blocked");
  } else {
    scroll_block.classList.remove("blocked");
  }
});

mobile_menu.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.remove("is-active");
  scroll_block.classList.remove("blocked");
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    scroll_up_button.style.display = "block";
  } else {
    scroll_up_button.style.display = "none";
  }
}

scroll_up_button.addEventListener("click", function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
