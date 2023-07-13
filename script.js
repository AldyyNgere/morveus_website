// Navbar Mobile Button Function
function navbarbtn() {
  // get Element
  const navbar_menu = document.querySelector(".navbar-menu");
  const menu_btn = document.getElementById("menu-btn");
  const close_btn = document.getElementById("close-btn");

  //   when menu button clicked
  menu_btn.onclick = () => {
    menu_btn.classList.add("nav-active");
    close_btn.classList.add("nav-active");
    navbar_menu.classList.add("nav-active");
  };

  //   when close button clicked
  close_btn.onclick = () => {
    menu_btn.classList.remove("nav-active");
    close_btn.classList.remove("nav-active");
    navbar_menu.classList.remove("nav-active");
  };
}

// Dark Mode Button Function
function darkmode() {
  // get all Element
  const toggle_body = document.querySelector(".toggle-body");
  const toggle = document.querySelector(".toggle");
  const navbar = document.querySelector(".navbar");
  const navbar_menu = document.querySelector(".navbar-menu");
  const navbar_menu_list = document.querySelectorAll(".navbar-menu a");
  const logo = document.querySelector(".logo");
  const heading = document.querySelector(".heading");
  const hero_btn = document.querySelector(".hero-btns-box button:last-child");
  const hero_desc = document.querySelector(".hero-text-box p");
  const body = document.body;

  // when toggle click
  toggle.addEventListener("click", function () {
    toggle_body.classList.toggle("dark-mode");
    toggle.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    navbar_menu.classList.toggle("dark-mode");
    navbar.classList.toggle("dark-mode");
    logo.classList.toggle("dark-mode");
    heading.classList.toggle("dark-mode");
    hero_btn.classList.toggle("dark-mode");
    hero_desc.classList.toggle("dark-mode");
    navbar_menu_list.forEach((list) => {
      list.classList.toggle("dark-mode");
    });
  });
}

// Call apps
navbarbtn();
darkmode();
