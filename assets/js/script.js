//  cette function qui Permettez-nous de tourner la phrase de learn more 
const circleTypeTop = new CircleType(
  document.getElementById("learn-more-top")
);
const circleTypeBottom = new CircleType(
  document.getElementById("learn-more-bottom")
);
circleTypeTop.radius(50).dir(-1);
circleTypeBottom.radius(50).dir(-1);


// je suis utiluse Slick Slider cette une 


    $('.slider').slick({
      centerMode: true,
      dots: true,
      autoplay: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          Infinity: true,
          slidesToShow: 1
        },
      }]
    });

 
