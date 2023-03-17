import cloudyIcon from './assets/cloudy.png'
import rainIcon from './assets/rain.png'
import showerIcon from './assets/shower.png'
import snowIcon from './assets/snow.png'
import sunnyIcon from './assets/sunny.png'
import thunderstormIcon from './assets/thunderstorm.png'
import nightIcon from './assets/night.png'
import partyCloudyIcon from './assets/partyCloudy.png'
import loadingIcon from './assets/loading.svg'

export default class WeatherState {
    constructor() {
        this.temp = {
            value: null,
            node: document.querySelector('.temp'),
            update: function(data) {this.value = Math.round(Number(data.main.temp))},
            write: function() {
                if (!this.value) return;
                this.node.textContent = this.value.toString() + '°F';
            },
        };
        this.feelsLike = {
            value: null,
            node: document.querySelector('.feels-like'),
            update: function(data) {this.value = Math.round(Number(data.main.feels_like))},
            write: function() {
                if (!this.value) return;
                this.node.textContent = 'feels like ' + this.value.toString() + '°F';
            },
        };
        // this.windSpeed = {
        //     value: 'hey',
        //     node: document.querySelector('.wind'),
        //     update: function(data) {this.value = data.wind.speed},
        //     write: function() {
        //         if (!this.value) return;
        //         this.node.textContent = 'wind: ' + this.value + ' mph';
        //     },
        // };
        this.desc = {
            value: null,
            node: document.querySelector('.desc'),
            update: function(data) {this.value = data.weather[0].description},
            write: function() {
                if (!this.value){
                    this.node.textContent = 'No location set...';
                    return;
                }
                this.node.textContent = this.value;
            },
        };
        this.city = {
            value: 'Enter a city:',
            node: document.querySelector('.city'),
            update: function(_, geoData) {
                console.log('geodata: ', geoData); // DEBUG
                let state = geoData.state;
                let country = geoData.country;
                let city = geoData.name;

                if (country === 'US' && state)
                    this.value = `${city}, ${state}`;
                else if (country != 'US')
                    this.value = `${city}, ${country}`;
            },
            write: function() {
                this.node = document.querySelector('.city');
                this.node.textContent = this.value;
            },
        };
        this.icon = {
            value: '',
            node: document.querySelector('img'),
            update: function(data) {this.value = data.weather[0].icon},
            write: function() {
                if (this.value) {
                    this.node.classList.remove('empty');
                    this.node.src = getWeatherIcon(this.value)
                } else {
                    this.node.classList.add('empty');
                }
            },
        };
    }
    update(weatherData, geoData) {
        for (let prop in this)
            this[prop].update(weatherData, geoData);
    }
    write() {
        for (let prop in this)
            this[prop].write();
    }
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
        // default: return loadingIcon; break;
    }
}