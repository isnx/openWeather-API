class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.desc = document.querySelector("#w-desc");
    this.string = document.querySelector("#w-string");
    this.details = document.querySelector("#w-details");
    this.icon = document.querySelector("#w-icon");
    this.humidity = document.querySelector("#w-humidity");
    this.pressure = document.querySelector("#w-pressure");
    this.sunrise = document.querySelector("#w-sunrise");
    this.sunset = document.querySelector("#w-sunset");
    this.bg = document.querySelector("body");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    if (weather.weather[0].description === "few clouds") {
      this.desc.textContent = "Lekkie zachmurzenie";
    } else if (weather.weather[0].description === "light snow") {
      this.desc.textContent = "Lekki opad śniegu";
    } else if (weather.weather[0].description === "broken clouds") {
      this.desc.textContent = "Lekkie zachmurzenie";
    } else if (weather.weather[0].description === "clear sky") {
      this.desc.textContent = "Bezchmurne niebo";
      this.bg.style.backgroundImage = "url(img/clear-sky.png)";
      this.bg.style.backgroundSize = "cover";
    } else {
      this.desc.textContent = weather.weather[0].description;
    }
    this.string.textContent = `${(weather.main.temp - 273.15).toFixed(1)} ℃`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Wilgotność: ${weather.main.humidity}%`;
    this.pressure.textContent = `Ciśnienie: ${weather.main.pressure} hPa`;
    this.sunrise.textContent = `Wschód słońca: ${new Date(
      weather.sys.sunrise * 1000
    ).toLocaleTimeString(weather.sys.country)}`;
    this.sunset.textContent = `Zachód słońca: ${new Date(
      weather.sys.sunset * 1000
    ).toLocaleTimeString()}`;
  }
}
