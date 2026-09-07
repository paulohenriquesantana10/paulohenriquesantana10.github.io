document.getElementById('year').textContent = new Date().getFullYear();

// Menu "Nossas soluções" no desktop
const dropdown = document.querySelector('.nav-dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');
if (dropdown && dropdownToggle) {
  dropdownToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    dropdownToggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
    dropdownToggle.setAttribute('aria-expanded', 'false');
  });
  dropdown.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    dropdown.classList.remove('open');
    dropdownToggle.setAttribute('aria-expanded', 'false');
  }));
}

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
  });
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }));
}

// Carrossel da entrada
const slides = [...document.querySelectorAll('.hero-slide')];
const dots = [...document.querySelectorAll('.hero-dots button')];
const prev = document.querySelector('.hero-prev');
const next = document.querySelector('.hero-next');
let current = 0;
let timer;
function showSlide(index) {
  if (!slides.length) return;
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
}
function startAuto() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(current + 1), 6500);
}
if (slides.length) {
  prev?.addEventListener('click', () => { showSlide(current - 1); startAuto(); });
  next?.addEventListener('click', () => { showSlide(current + 1); startAuto(); });
  dots.forEach(dot => dot.addEventListener('click', () => { showSlide(Number(dot.dataset.go)); startAuto(); }));
  const hero = document.querySelector('.hero-carousel');
  hero?.addEventListener('mouseenter', () => clearInterval(timer));
  hero?.addEventListener('mouseleave', startAuto);
  startAuto();
}
