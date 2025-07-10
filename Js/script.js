window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}
