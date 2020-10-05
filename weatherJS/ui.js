class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.feels = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
        this.visibility = document.getElementById('w-visibility');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ` + `${weather.sys.country}`;
        this.desc.textContent = `${weather.weather[0].main}: ` + `${weather.weather[0].description}`;
        this.string.textContent = weather.main.temp + '°C';
        this.icon.setAttribute(
            'src',
            `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        );
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.dewpoint.textContent = `Wind Direction: ${weather.wind.deg} degrees`;
        this.feels.textContent = `Feels Like: ${weather.main.feels_like} °C`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} meters/sec`;
        this.visibility.textContent = `Visibility: ${weather.visibility}`;
    }

}