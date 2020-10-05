const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.country);

//weather.changeLocation('London', 'GB');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

//Change location event:
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);
    storage.setLocationData(city, country);

    getWeather();

    //Close the modal once getWeather done, using JQuery:
    $('#locationModal').modal('hide');

})

function getWeather() {
    weather.getWeather()
        .then(res => ui.paint(res))
        //.then(res => console.log(res))
        .catch(err => console.log(err));
}