class Weather {
    constructor(city, country) {
        this.apiKey = '666dabcb7d08b565b82ac765b9a4ae23';
        this.city = city;
        this.country = country;
    }

    //Fetch API:
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }

    //Change location:
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}