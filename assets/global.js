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
    // If already initialized, skip creating a new instance
    if (AnnouncementSlider.instances[selector]) {
      return;
    }

    this.sliderContainer = document.querySelector(selector);
    if (!this.sliderContainer) {
      throw new Error(`No element found for selector: ${selector}`);
    }

    this.slides = this.sliderContainer.querySelectorAll('.announcement__item');
    this.currentSlide = 0;
    this.duration = this.getDuration();

    // Save the instance to prevent re-initialization
    AnnouncementSlider.instances[selector] = this;

    if (this.slides.length > 1) {
      this.initSlider();
    }
  }

  static instances = {};

  getDuration() {
    // Simplified duration retrieval with a fallback
    const duration = parseInt(this.sliderContainer.dataset.duration, 10);
    return isNaN(duration) ? 4000 : duration * 1000;
  }

  initSlider() {
    // Using arrow function for 'this' context preservation
    this.intervalId = setInterval(() => this.goToNextSlide(), this.duration);
  }

  goToNextSlide() {
    const nextSlide = (this.currentSlide + 1) % this.slides.length;
    this.animateSlideInOut(this.currentSlide, nextSlide);
  }

  animateSlideInOut(currentSlide, nextSlide) {
    this.slides[nextSlide].classList.add('slide-in');
    this.slides[currentSlide].classList.add('slide-out-left');

    setTimeout(() => {
      this.slides[currentSlide].classList.remove('slide-in', 'slide-out-left');
      this.currentSlide = nextSlide; // Update currentSlide
    }, 1000); // Assuming the animation duration is 1000ms
  }
}

// Initialization on DOM ready
document.addEventListener('DOMContentLoaded', function () {
    new AnnouncementSlider('.announcement__wrapper');
});

// Shopify design mode
if (Shopify.designMode) {
  document.addEventListener('shopify:section:load', (event) => {
    console.log(event.detail);
    const sectionId = event.detail.sectionId;
    const selector = `#shopify-section-${sectionId} .announcement__wrapper`;
    new AnnouncementSlider(selector);
  });
}