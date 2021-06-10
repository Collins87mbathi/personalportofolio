const navbar = document.querySelector("#nav");
const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

const modal = document.querySelector('.modal-overlay');

const closebtn = document.querySelector('.close-btn');

const openmodal = document.querySelector('.modal-btn');

openmodal.addEventListener('click' , function(){
  modal.classList.add('open-modal');
});

closebtn.addEventListener('click', function(){
    modal.classList.remove('open-modal');
});

