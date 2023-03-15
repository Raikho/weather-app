import './style.css'
import UrlGen from './urlGen.js'
import SearchManager from './search.js'
import DOM from './dom.js'

import cloudyIcon from './assets/cloudy.png'
import rainIcon from './assets/rain.png'
import showerIcon from './assets/shower.png'
import snowIcon from './assets/snow.png'
import sunnyIcon from './assets/sunny.png'
import thunderstormIcon from './assets/thunderstorm.png'
import nightIcon from './assets/night.png'
import partyCloudyIcon from './assets/partyCloudy.png'


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
    icon: null, // weather icon (01-04,09-11,13,50), (d|n)
    // 1: clear sky, 2: few cloud, 3: scattered clouds, 4: broken clouds,
    // 9: shower rain, 10: rain, 11: thunderstorm, 13: snow, 50: mist;

    printTemp() {return this.temp.toString() + '°F';},
    printFeelsLike() {return 'feels like ' + this.feelsLike.toString() + '°F';},
    printClouds() {return 'cloud coverage: ' + this.clouds + '%'},
    printWind() {return 'wind: ' + this.windSpeed + ' mph';},
};

let searchManager = new SearchManager(document.getElementById('header'), state);


// ======================== functions =================================
// document.getElementById('search-button').addEventListener('click', async () => {
//     let cityName = document.getElementById('city-input').value;
//     console.log(`searching for "${cityName}"...`); // DEBUG
//     if (cityName) {
//         await queryCity(cityName);
//     }
// });

async function queryCity(cityName) {
    weatherUrl.addKey('q', cityName);
    try {
        await new Promise(resolve => setTimeout(resolve, 300)); // DEBUG
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
    state.desc = data.weather[0].description;
    state.city = data.name;
    state.icon = data.weather[0].icon;
    writeWeatherState();
}

function writeWeatherState() {
    const tempNode = document.querySelector('.temp');
    const feelsLikeNode = document.querySelector('.feels-like');
    const windNode = document.querySelector('.wind');
    const descNode = document.querySelector('.desc');
    const cityNode = document.querySelector('.city');
    const imgNode = document.querySelector('img');

    tempNode.textContent = state.printTemp();
    feelsLikeNode.textContent = state.printFeelsLike();
    windNode.textContent = state.printWind();
    descNode.textContent = state.desc;
    cityNode.textContent = state.city;

    imgNode.src = getWeatherIcon(state.icon);
}

function getWeatherIcon(iconCode) {
    switch (iconCode) {
        case '01d': return sunnyIcon; break;
        case '01n': return nightIcon; break;
        case '02d':
        case '03d':
        case '02n':
        case '03n': return partyCloudyIcon; break;
        case '04d':
        case '04n':
        case '50d':
        case '50n': return cloudyIcon; break;
        case '09d':
        case '09n': return showerIcon; break;
        case '10d':
        case '10n': return rainIcon; break;
        case '11d':
        case '11n': return thunderstormIcon; break;
        case '13d':
        case '13n': return snowIcon; break;
    }
}

// =========================== INIT ===================================
// queryCity('New York City');




// ========================== DEBUG ===================================
console.log(weatherUrl.url, weatherUrl);

// ========================== CREDITS ==================================
// Sunny
// <a href="https://www.flaticon.com/free-icons/sunny" title="sunny icons">Sunny icons created by justicon - Flaticon</a>
// Thudnerstorm
// <a href="https://www.flaticon.com/free-icons/thunderstorm" title="thunderstorm icons">Thunderstorm icons created by justicon - Flaticon</a>
// Shower
// <a href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by justicon - Flaticon</a>
// Rain
// <a href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by justicon - Flaticon</a>
// Cloudy
// <a href="https://www.flaticon.com/free-icons/cloud" title="cloud icons">Cloud icons created by justicon - Flaticon</a>
// Snow
// <a href="https://www.flaticon.com/free-icons/snowfall" title="snowfall icons">Snowfall icons created by justicon - Flaticon</a>
// Night
// <a href="https://www.flaticon.com/free-icons/clear" title="clear icons">Clear icons created by justicon - Flaticon</a>
// Party Cloudy
// <a href="https://www.flaticon.com/free-icons/cloudy" title="cloudy icons">Cloudy icons created by justicon - Flaticon</a>