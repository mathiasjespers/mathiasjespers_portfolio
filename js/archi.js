import {preloadImages} from "./utils";

let glider = new Glider(document.querySelector('.glider'), {
  responsive: [{
    breakpoint: 1400,
    settings: {
      slidesToShow: 2,
      rewind: false,
      draggable: true,
      dragVelocity: 2,
      dots: ".dots"
    }
  },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        rewind: false,
        draggable: true,
        dragVelocity: 2,
        dots: ".dots"
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        rewind: false,
        draggable: true,
        dragVelocity: 2,
        dots: ".dots"
      }
    }]
});

Promise.all([preloadImages('img')]).then(() => {
  glider.refresh(true);
});
