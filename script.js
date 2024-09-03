let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}vw)`;
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 6000); 
}

window.onload = function() {
    autoSlide();
};

let currentReviewIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.review-carousel-item');
    const totalSlides = slides.length;
    const visibleSlides = 3;
    const slideWidth = slides[0].offsetWidth;
    
    currentReviewIndex = (currentReviewIndex + step + totalSlides) % totalSlides;
    
    const offset = -currentReviewIndex * slideWidth;
    document.querySelector('.review-carousel-inner').style.transform = `translateX(${offset}px)`;
}

document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('.footer-text .year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});