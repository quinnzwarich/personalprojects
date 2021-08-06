"use strict";

let key = true;

let configs = [
  {
    id: `#dywtkg`,
    gif: `assets/images/pencil.gif`,
    png: `assets/images/apple.png`
  }, {
    id: `#tmm`,
    gif: `assets/images/tmm.gif`,
    png: `assets/images/tmm.png`
  }, {
    id: `#lp`,
    gif: `assets/images/planet.gif`,
    png: `assets/images/planetemblem.png`
  }, {
    id: `#hiis`,
    gif: `assets/images/crazydoor.gif`,
    png: `assets/images/regulardoor.png`
  }
]

function displayGIF(config) {
  $(config.id).on(`mouseenter`, function (event) {
    $(this).attr(`src`, config.gif)
  });

  $(config.id).on(`mouseleave`, function (event) {
    $(this).attr(`src`, config.png);
  });
}

for (let i = 0; i < configs.length; i++) {
  let config = configs[i];
  displayGIF(config);
}
