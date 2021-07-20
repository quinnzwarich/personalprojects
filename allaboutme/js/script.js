"use strict";

// do you want to keep going

$(`#dywtkg`).on(`mouseenter`, function (event) {
  $(this).attr(`src`, `assets/images/pencil.gif`)
});

$(`#dywtkg`).on(`mouseleave`, function (event) {
  $(this).attr(`src`, `assets/images/apple.png`)
});

// the murder mystery

$(`#tmm`).on(`mouseenter`, function (event) {
  $(this).attr(`src`, `assets/images/tmm.gif`)
});

$(`#tmm`).on(`mouseleave`, function (event) {
  $(this).attr(`src`, `assets/images/tmm.png`)
});

// lonely planet

$(`#lp`).on(`mouseenter`, function (event) {
  $(this).attr(`src`, `assets/images/planet.gif`)
});

$(`#lp`).on(`mouseleave`, function (event) {
  $(this).attr(`src`, `assets/images/planetemblem.png`)
});

// how it isn't so

$(`#hiis`).on(`mouseenter`, function (event) {
  $(this).attr(`src`, `assets/images/crazydoor.gif`)
});

$(`#hiis`).on(`mouseleave`, function (event) {
  $(this).attr(`src`, `assets/images/regulardoor.png`)
});
