//vegas slideshow
$("#index-slideshow").vegas({
  transition: 'fade',
  transitionDuration: 4000,
  delay: 10000,
  animation: 'random',
  animationDuration: 20000,

    slides: [
        { src: "../assets/img/house-1/gs_house-1-51-d.jpg" },
        { src: "../assets/img/house-2/gs_house-2-6-display.jpg" },
        { src: "../assets/img/house-3/gs_house-3-3-display.jpg" },
        { src: "../assets/img/house-4/gs_house-4-6-display.jpg" }
    ],

    overlay: '../assets/img/util/slideshow-overlay-1.png'
});
