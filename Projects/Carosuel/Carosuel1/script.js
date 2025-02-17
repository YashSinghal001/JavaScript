/* script.js */
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentIndex].classList.add('active');
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}
