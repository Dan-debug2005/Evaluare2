
   let slideIndex = 0;
let slideshowInterval = null;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => (slide.style.display = 'none'));
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
}

function startSlideshow() {
    if (slideshowInterval) return; // Previne duplicarea intervalelor
    showSlides(); // Afișează prima imagine
    slideshowInterval = setInterval(showSlides, 3000); // Setează intervalul de 3 secunde
}

document.addEventListener('DOMContentLoaded', () => {
    // Afișează prima imagine din slideshow
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) slides[0].style.display = 'block';
});