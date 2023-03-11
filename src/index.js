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

function setCity(name) {
    state.city = name;
    const cityNode = document.querySelector('.city');
    cityNode.textContent = state.city;
}

async function getData() {
    let response = await fetch(weatherUrl.getUrl(), {mode: 'cors'});
    let json = await response.json();
    console.log('json: ', json);
    setData(json);
}

function setData(data) {
    state.temp = Math.round((Number(data.main.temp) - 273) * 1.8 + 32);
    state.city = data.name;
    writeData(data);
}

function writeData(data) {
    const tempNode = document.querySelector('.temp');
    const cityNode = document.querySelector('.city');

    tempNode.textContent = state.temp.toString() + '°F';
    cityNode.textContent = state.city;
}

// =========================== INIT ===================================
setCity('New York City');
weatherUrl.addKey('q', state.city);
const weatherData = getData();




// ========================== DEBUG ===================================
console.log(weatherUrl.getUrl(), weatherUrl);


