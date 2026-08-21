let currentSlide = 0;
const slides = document.querySelectorAll('.slides li');
if (slides.length) {
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    if (!slides.length) return;
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
    setTimeout(nextSlide, 3000);
}

if (slides.length > 1) {
    setTimeout(nextSlide, 3000);
}
