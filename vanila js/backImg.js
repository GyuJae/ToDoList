const body = document.querySelector("body");

const IMGNUMBER = 3;

function printBackImg(ImgNum) {
  const image = new Image();
  image.src = `images/${ImgNum}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function getRandom() {
  return Math.floor(Math.random() * IMGNUMBER) + 1;
}

function init() {
  const num = getRandom();
  printBackImg(num);
}

init();
