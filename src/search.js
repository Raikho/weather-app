import DOM from './dom.js'

import UrlGen from './urlGen.js';
const weatherKey = 'bba6f56f2dcd34db5581285bb884ee36';
const weatherDataBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherGeoBaseUrl = 'https://api.openweathermap.org/geo/1.0/direct';
const weatherForecastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

let weatherDataUrl = new UrlGen(weatherDataBaseUrl);
weatherDataUrl.addKey('appid', weatherKey);
weatherDataUrl.addKey('units', 'imperial');

let weatherGeoUrl = new UrlGen(weatherGeoBaseUrl);
weatherGeoUrl.addKey('appid', weatherKey);

let weatherForecastUrl = new UrlGen(weatherForecastBaseUrl);
weatherForecastUrl.addKey('appid', weatherKey);
weatherForecastUrl.addKey('units', 'imperial');


import WeatherState from './weatherState.js';

export default class SearchManager {
    constructor(node, weatherState) {
        this.node = node;
        this.state = 'state'; // found, search, retry, loading
        this.weatherState = new WeatherState();
        this.weatherState.write();

        DOM.clearNode(this.node);
        this.updateFoundState();
    }

    updateSearchState() {
        this.state = 'search';
        DOM.clearNode(this.node);

        const containerNode = DOM.createDiv(this.node, ['city-container']);

        const errorNode = DOM.createDiv(containerNode, ['error']);

        const inputNode = DOM.createTextInput(containerNode, ['city-input'], 'Enter city:');
        inputNode.setAttribute('pattern', "[a-zA-Z ']+$");
        const iconNode = DOM.createDiv(containerNode, ['icon', 'search']);
        const cancelNode = DOM.createDiv(containerNode, ['icon', 'cancel']);
        cancelNode.addEventListener('click', this.updateFoundState.bind(this), {once: true});

        iconNode.addEventListener('click', async () => {
            let cityName = inputNode.value;
            if (!cityName) return;
            iconNode.classList.replace('search', 'loading');

            let queryPromise = queryCity(cityName, iconNode);
            let timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject('timeout'), 1200);
            });
            let cancelPromise = new Promise((_, reject) => {
                cancelNode.addEventListener('click', () => reject('cancel'), {once: true});
            });

            try {
                const data = await Promise.race([queryPromise, timeoutPromise, cancelPromise]);
                console.log('race resolved, data result: ', data); // DEBUG

                if (this.state !='search') return;

                this.weatherState.update(data.weather, data.geo);
                console.log('new weather state: ', this.weatherState); // DEBUG
                this.updateFoundState();
            } catch(err) {
                console.log('race error: ', err);

                if (err === 'timeout')
                    errorNode.textContent = 'No response, try again later';
                else if (err === 'Not Found')
                    errorNode.textContent = 'City not found';

                iconNode.classList.replace('loading', 'search');
            }
        });


    }

    updateFoundState() {
        this.state = 'found';
        DOM.clearNode(this.node);

        const containerNode = DOM.createDiv(this.node, ['city-container']);
        const cityNode = DOM.createDiv(containerNode, ['city'], this.weatherState.city);
        const editNode = DOM.createDiv(containerNode, ['icon', 'edit']); // DEBUG, change back to edit

        this.weatherState.write();

        editNode.addEventListener('click', () => {
            this.updateSearchState();
        });
    }
}

async function queryCity(cityName) {
    return new Promise(async (resolve, reject) => {
        weatherGeoUrl.addKey('q', cityName);
        let geoResponse = await fetch(weatherGeoUrl.url, {mode: 'cors'});
        if (!geoResponse.ok)
            return reject('geocoding error 1: ' + geoResponse.statusText);

        let geoData = await geoResponse.json();
        if (!geoData[0])
            return reject('Not Found');
        console.log(`Geo data received, lat: ${geoData[0].lat}, lon: ${geoData[0].lon}, array: `, geoData); // DEBUG

        weatherDataUrl.addKey('lat', geoData[0].lat);
        weatherDataUrl.addKey('lon', geoData[0].lon);
        let response = await fetch(weatherDataUrl.url, {mode: 'cors'});
        if (!response.ok)
            return reject(response.statusText);

        let weatherData = await response.json();
        if (weatherData.cod != '200')
            return reject(weatherData.cod);

        weatherForecastUrl.addKey('lat', geoData[0].lat);
        weatherForecastUrl.addKey('lon', geoData[0].lon);
        let forecastResponse = await fetch (weatherForecastUrl.url, {mode: 'cors'});
        if (!forecastResponse.ok)
            return reject(forecastResponse.cod);

        let forecastData = await forecastResponse.json();
        console.log('forecast data: ', forecastData);
        if (forecastData.cod != '200')
            return reject(forecastData.cod);

        resolve({geo: geoData[0], weather: weatherData, forecast: forecastData});
    });
}