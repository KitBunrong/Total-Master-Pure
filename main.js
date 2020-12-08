const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  toggle();
});

function toggle() {
  menuBtn.classList.toggle("open");
}
