import {preloadImages} from "./utils";

Promise.all([preloadImages('img')]).then(() => {

  setTimeout(function() {
    document.body.classList.remove('loading');
  }, 500);

});
