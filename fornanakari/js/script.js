"use strict";

let words;
let grotesk;
let first;
let second;
let third;
let fourth;
let fifth;
let sixth;
let seventh;
let xCoordinates = [];
let yCoordinates = [];

let dimenI = 1008;
let dimenJ = 1344;

function preload() {
  grotesk = loadFont("assets/images/grotesk.otf");
}

function setup() {
  createCanvas(672, 672, WEBGL);

  words = createGraphics(width, height, WEBGL);

//   seventh.loadPixels();
//   for (let j = 0; j < dimenJ; j+= 2) {
//     for (let i = 0; i < dimenI; i+= 2) {
//       let index = (j * dimenJ + i) * 4;
//       let r = seventh.pixels[index + 0];
//       let g = seventh.pixels[index + 1];
//       let b = seventh.pixels[index + 2];
//       let bright = (r + g + b) / 3;
//       if (bright < 100) {
//         xCoordinates.push(i);
//         yCoordinates.push(j);
//       }
//     }
//   }
}

function draw() {
  background(255, 165, 0);
  ambientLight(250);

  push();
  words.fill(255);
  words.textFont(grotesk);
  words.textSize(10);
  words.text(`Rosary pearls corner me

Pinups peach up my jeans

Each opal I net?

Crime to us
`, 0, 0);
  noStroke();
  normalMaterial();
  rotateY(PI - 0.5);
  translate(0, -height/16);
  texture(words);
  sphere(width/2);
  pop();

  // for (let i = 0; i < yCoordinates.length/2; i++) {
  //   stroke(map(i, 0, yCoordinates.length/2, 255, 0), 0, 0);
  //   point(xCoordinates[i], yCoordinates[i]);
  //   stroke(0, map(i, 0, yCoordinates.length/2, 255, 0), 0);
  //   point(xCoordinates[yCoordinates.length - i],
  //         yCoordinates[yCoordinates.length - i]);
  // }
}
