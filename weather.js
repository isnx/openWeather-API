class Weather {
  constructor(city, country) {
    this.apiKey = "607df8cdc649c1e936560ca935afec27";
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&APPID=${this.apiKey}`
    );
    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
