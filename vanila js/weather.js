const API_KEY = "dd0ae37726d29559984de96940e25e55";
const COORDS = "coods";

const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitube = position.coords.longitube;
  const coordsObj = {
    latitude: latitude,
    longitube: 127.72727272893789
  };

  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("cannot access geo location");
}

function askForCoods() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoods() {
  const loadedCoods = localStorage.getItem(COORDS);
  if (loadedCoods === null) {
    askForCoods();
  } else {
    const parsedCoords = JSON.parse(loadedCoods);
    getWeather(parsedCoords.latitude, parsedCoords.longitube);
  }
}

function init() {
  loadCoods();
}

init();
