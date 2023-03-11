import './style.css'
import UrlGen from './urlGen.js'

// ======================= WEBSITE DATA ===============================
const weatherKey = 'bba6f56f2dcd34db5581285bb884ee36';
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// ========================== SETUP ===================================
let weatherUrl = new UrlGen(weatherBaseUrl);
weatherUrl.addKey('appid', weatherKey);
let city = '';

function setCity(name) {
    city = name;
    const cityNode = document.querySelector('.city');
    cityNode.textContent = city;
}

async function getData() {
    let response = await fetch(weatherUrl.getUrl(), {mode: 'cors'});
    let json = await response.json();
    console.log('json: ', json);
    setData(json);
}

function setData(data) {
    let temp = Math.round(Number(data.main.temp));
    console.log('main temp: ', temp);
    const tempNode = document.querySelector('.temp');
    tempNode.textContent = temp.toString() + '°F';
}
// =========================== INIT ===================================
setCity('New York City');
weatherUrl.addKey('q', city);
const weatherData = getData();




// ========================== DEBUG ===================================
console.log(weatherUrl.getUrl(), weatherUrl);


