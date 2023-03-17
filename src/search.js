import DOM from './dom.js'

import UrlGen from './urlGen.js';
const weatherKey = 'bba6f56f2dcd34db5581285bb884ee36';
const weatherDataBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherGeoBaseUrl = 'http://api.openweathermap.org/geo/1.0/direct';

let weatherDataUrl = new UrlGen(weatherDataBaseUrl);
weatherDataUrl.addKey('appid', weatherKey);
weatherDataUrl.addKey('units', 'imperial');

let weatherGeoUrl = new UrlGen(weatherGeoBaseUrl);
weatherGeoUrl.addKey('appid', weatherKey);


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
                const result = await Promise.race([queryPromise, timeoutPromise, cancelPromise]);
                console.log('race resolved, result: ', result); // DEBUG

                if (this.state !='search') return;

                this.weatherState.update(result);
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
        if (!geoResponse.ok) {
            reject('geocoding error 1: ' + geoResponse.statusText);
            return;
        }

        let geoData = await geoResponse.json();
        if (!geoData[0]) {
            reject('Not Found');
            return;
        }

        let lat = geoData[0].lat;
        let lon = geoData[0].lon;
        console.log(`Geo data received, lat: ${lat}, lon: ${lon}, array: `, geoData); // DEBUG

        weatherDataUrl.addKey('lat', lat);
        weatherDataUrl.addKey('lon', lon);
        let response = await fetch(weatherDataUrl.url, {mode: 'cors'});
        if (!response.ok)
            reject(response.statusText);

        let weatherData = await response.json();
        if (weatherData.cod != '200')
            reject(weatherData.cod);
        resolve(weatherData);
    });
}