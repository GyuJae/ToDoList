const nameBox = document.querySelector(".js-name");
const input = nameBox.querySelector("input");
const userName = document.querySelector(".js-saveName");

const USER_LS = "currentUser";
const SHOWING = "showing";

function saveValue(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  printing(currentValue);
  saveValue(currentValue);
}

function askName() {
  // nameBox.classList.add(SHOWING);
  nameBox.addEventListener("submit", handleSubmit);
}

function printing(text) {
  nameBox.remove();
  //   userName.classList.add(SHOWING);
  userName.innerText = `Hello ${text}`;
}

function getname() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askName();
  } else {
    printing(currentUser);
  }
}

function init() {
  getname();
}

init();
