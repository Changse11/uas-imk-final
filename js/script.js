// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#Menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//menghilangkan active dengan klik diluar menu
const menuhilang = document.querySelector("#Menu");

document.addEventListener("click", function (e) {
  if (!menuhilang.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
