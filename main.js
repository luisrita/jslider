window.onload = function(){
  var slides = document.querySelectorAll('#slides .slide');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 2000);

  function nextSlide() {

    // Previous slide
    slides[currentSlide].className = 'slide prev';

    // Change slide
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';

    // Next slide
    slides[currentSlide+1].className = 'slide next';
  }

}