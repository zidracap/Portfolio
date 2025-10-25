// script.js

// Menu navigation
document.querySelector('.men').addEventListener('change', function() {
  const sectionId = this.value;
  if (sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setTimeout(() => {
      this.selectedIndex = 0;
    }, 500);
  }
});

// Slider navigation
let currentSlide = 0;
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
const cardWidth = 320 + 32;

document.querySelector('.next').addEventListener('click', () => {
  if (currentSlide < totalCards - 1) {
    currentSlide++;
    slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  }
});

document.querySelector('.prev').addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  }
});