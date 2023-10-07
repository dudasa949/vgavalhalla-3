let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function nextSlide() {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
}

function prevSlide() {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
}

$('#carouselExample').carousel();

$('.carousel').carousel({
    interval: 3000
});

$('.carousel').carousel({
    wrap: true
});
