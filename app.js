const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

document.querySelector("#w-change-btn").addEventListener("click", e => {
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;
  weather.changeLocation(city, country);
  storage.setLocationData(city, country);

  $("#locModal").modal("hide");

  getWeather();
});

function getWeather() {
  weather
    .getWeather()
    .then(results => ui.paint(results))
    .catch(err => console.log(err));
}
