// toggle class active
const navbarnav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik di luar side bar untuk menghilangkan navbar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarnav.contains(e.target))
    navbarnav.classList.remove("active");
});

// // Ambil elemen menu dan tombol
// const menu = document.getElementById('menu');
// const menuBtn = document.getElementById('menu-btn');
// const menuLinks = document.querySelectorAll('.navbar-nav a');

// Fungsi untuk menampilkan atau menyembunyikan menu
menuBtn.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Menutup menu ketika salah satu link diklik
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});
