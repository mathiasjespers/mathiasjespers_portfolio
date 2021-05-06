import {preloadImages} from "./utils";

let glider = new Glider(document.querySelector('.glider'), {
  responsive: [{
    breakpoint: 1400,
    settings: {
      slidesToShow: 2,
      rewind: false,
      draggable: true,
      dragVelocity: 2,
      dots: ".dots",
      slidesToScroll: 2,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    }
  },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        rewind: false,
        draggable: true,
        dragVelocity: 2,
        dots: ".dots",
        slidesToScroll: 1,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        rewind: false,
        draggable: true,
        dragVelocity: 2,
        dots: ".dots",
        slidesToScroll: 1,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      },
    }]
});

Promise.all([preloadImages('img')]).then(() => {
  glider.refresh(true);

  setTimeout(function() {
    document.body.classList.remove('loading');
  }, 500);

});
