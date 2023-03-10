import './style.css'
import UrlGen from './urlGen.js'

// ======================= WEBSITE DATA ===============================
const weatherKey = 'bba6f56f2dcd34db5581285bb884ee36';
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// ========================== SETUP ===================================
let weatherUrl = new UrlGen(weatherBaseUrl);
weatherUrl.addKey('q', 'Los Angeles');
weatherUrl.addKey('appid', weatherKey);

// ========================== DEBUG ===================================
console.log(weatherUrl.getUrl(), weatherUrl);


