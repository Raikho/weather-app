import './style.css'
import UrlGen from './urlGen.js'

// ======================= WEBSITE DATA ===============================
const weatherKey = 'bba6f56f2dcd34db5581285bb884ee36';
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// ========================== SETUP ===================================

let weatherUrl = new UrlGen(weatherBaseUrl);
weatherUrl.addKey('appid', weatherKey);
let state = {
    city: 'New York City',
    temp: null,
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
        let response = await fetch(weatherUrl.getUrl(), {mode: 'cors'});
        if (!response.ok)
            throw new Error(response.statusText);
        let json = await response.json();
        if (json.cod != '200')
            throw new Error(json.cod);
        updateWeatherState(json);
    } catch(err) {
        console.log('An error occured while fetching: ', err);
    }
}

function updateWeatherState(data) {
    state.temp = Math.round((Number(data.main.temp) - 273) * 1.8 + 32);
    state.city = data.name;
    writeWeatherState();
}

function writeWeatherState() {
    const tempNode = document.querySelector('.temp');
    const cityNode = document.querySelector('.city');

    tempNode.textContent = state.temp.toString() + '°F';
    cityNode.textContent = state.city;
}

// =========================== INIT ===================================
queryCity('Austin');




// ========================== DEBUG ===================================
console.log(weatherUrl.getUrl(), weatherUrl);


