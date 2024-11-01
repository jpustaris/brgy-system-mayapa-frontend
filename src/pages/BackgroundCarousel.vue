<template>
    <div class="carousel-container">
      <div
        class="carousel-slide"
        :style="{ backgroundImage: `url(${images[currentImageIndex]})` }"
      >
        <div class="carousel-overlay"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          "carousel1.png",
          "carousel2.png",
          "carousel3.png",
          "carousel4.png",
        ],
        currentImageIndex: 0,
        slideInterval: null,
      };
    },
    mounted() {
      this.startCarousel();
    },
    methods: {
      startCarousel() {
        this.slideInterval = setInterval(this.nextSlide, 5000);
      },
      nextSlide() {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.images.length;
      },
      pauseCarousel() {
        clearInterval(this.slideInterval);
      },
      resumeCarousel() {
        this.startCarousel();
      }
    },
    beforeUnmoint() {
      clearInterval(this.slideInterval);
    }
  };
  </script>
  
  <style scoped>
  .carousel-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1; /* Ensure the carousel is in the background */
  }
  
  .carousel-slide {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: background-image 1s ease-in-out;
  }
  
  .carousel-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for better text contrast */
  }
  </style>