const abc = Vue.createApp({  
  delimiters: ['${', '}'],
  data() {
    return {
      message: 'Hello Vue df.js!'
    }
  }
}).mount('body')

class AnnouncementSlider {
  constructor(selector) {
    this.sliderContainer = document.querySelector(selector);
    this.slides = this.sliderContainer.querySelectorAll('.announcement__item');
    this.currentSlide = 0;
    this.duration = this.getDuration();
    this.initSlider();
  }

  getDuration() {
    // Get the duration from the data object
    // Convert the duration from seconds to milliseconds
    // Default to 4000ms (4 seconds) if the duration is not set or invalid
    const duration = this.sliderContainer.dataset.duration;
    return duration ? parseInt(duration, 10) * 1000 : 4000;
  }

  initSlider() {
    if (this.slides.length > 1) {
      setInterval(() => this.goToNextSlide(), this.duration);
    }
  }

  goToNextSlide() {
    const nextSlide = (this.currentSlide + 1) % this.slides.length;
    this.animateSlideInOut(this.currentSlide,nextSlide);
  }

  animateSlideInOut(currentSlide, nextSlide) {
    this.slides[nextSlide].classList.add('slide-in');
    this.slides[currentSlide].classList.add('slide-out-left');
    
    setTimeout(() => {
      this.slides[currentSlide].classList.remove('slide-out-left', 'slide-in');
      this.currentSlide = nextSlide; // Update currentSlide after animation is complete
    }, 1000); // Match with CSS animation duration
  }
}

// Initialization
document.addEventListener('DOMContentLoaded', function () {
  new AnnouncementSlider('.announcement__wrapper');
});