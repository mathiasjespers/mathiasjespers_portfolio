import {preloadImages} from "./utils";

let glider = new Glider(document.querySelector('.glider'), {
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
});

Promise.all([preloadImages('img')]).then(() => {
  glider.refresh(true);

  setTimeout(function() {
    document.body.classList.remove('loading');
  }, 500);

});
