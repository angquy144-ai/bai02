// LOADING
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// DARK MODE
function toggleDark() {
  document.body.classList.toggle("dark");
}

// MENU MOBILE
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}