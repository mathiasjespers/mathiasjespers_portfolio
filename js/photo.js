import {preloadImages} from "./utils";

let glider = new Glider(document.querySelector('.glider'), {
  responsive: [{
      breakpoint: 820,
      settings: {
        slidesToShow: 3,
        rewind: true,
        draggable: true,
        dragVelocity: 2
    }
  },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        rewind: true,
        draggable: true,
        dragVelocity: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        rewind: true,
        draggable: true,
        dragVelocity: 2
      }
    }]
});

let glider2 = new Glider(document.querySelector('.glider2'), {
  responsive: [{
    breakpoint: 820,
    settings: {
      slidesToShow: 3,
      rewind: true,
      draggable: true,
      dragVelocity: 2
    }
  },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        rewind: true,
        draggable: true,
        dragVelocity: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        rewind: true,
        draggable: true,
        dragVelocity: 2
      }
    }]
});

Promise.all([preloadImages('img')]).then(() => {
  glider.refresh(true);
  glider2.refresh(true);
});
