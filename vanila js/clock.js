const clockBox = document.querySelector(".js-clock");
const clockName = clockBox.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  clockName.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
