import './style.css'
import UrlGen from './urlGen.js'

// ======================= WEBSITE DATA ===============================
const weatherKey = 'bba6f56f2dcd34db5581285bb884ee36';
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

let weatherUrl = new UrlGen(weatherBaseUrl);
weatherUrl.addKey('appid', weatherKey);
weatherUrl.addKey('units', 'imperial');
// ========================== SETUP ===================================

let state = {
    city: 'New York City',
    temp: null, // kelvin
    feelsLike: null,
    windSpeed: null, // meter/sec
    clouds: null, // % coverage
    desc: 'empty',

    printTemp() {return this.temp.toString() + '°F';},
    printFeelsLike() {return 'feels like ' + this.feelsLike.toString() + '°F';},
    printClouds() {return 'cloud coverage: ' + this.clouds + '%'},
    printWind() {return this.windSpeed + ' mph';},
};

document.getElementById('search-button').addEventListener('click', async () => {
    let cityName = document.getElementById('city-input').value;
    console.log(`searching for "${cityName}"...`); // DEBUG
    if (cityName) {
        await queryCity(cityName);
    }
});

async function queryCity(cityName) {
    weatherUrl.addKey('q', cityName);
    try {
        let response = await fetch(weatherUrl.url, {mode: 'cors'});
        if (!response.ok)
            throw new Error(response.statusText);
        let json = await response.json();
        if (json.cod != '200')
            throw new Error(json.cod);
        updateWeatherState(json);
        console.log('weather json: ', json); // DEBUG
    } catch(err) {
        console.log('An error occured while fetching: ', err);
    }
}

function updateWeatherState(data) {
    state.temp = Math.round(Number(data.main.temp));
    state.feelsLike = Math.round(Number(data.main.feels_like));
    state.windSpeed = Math.round(data.wind.speed);
    state.clouds = data.clouds.all;
    state.desc = data.weather[0].description;
    state.city = data.name;
    writeWeatherState();
}

function writeWeatherState() {
    const tempNode = document.querySelector('.temp');
    const feelsLikeNode = document.querySelector('.feels-like');
    const windNode = document.querySelector('.wind');
    const cloudsNode = document.querySelector('.clouds');
    const descNode = document.querySelector('.desc');
    const cityNode = document.querySelector('.city');

    tempNode.textContent = state.printTemp();
    feelsLikeNode.textContent = state.printFeelsLike();
    cloudsNode.textContent = state.printClouds();
    windNode.textContent = state.printWind();
    descNode.textContent = state.desc;
    cityNode.textContent = state.city;
}

// =========================== INIT ===================================
queryCity('Frederica');




// ========================== DEBUG ===================================
console.log(weatherUrl.url, weatherUrl);


