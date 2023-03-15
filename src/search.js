import DOM from './dom.js'

import UrlGen from './urlGen.js';
const weatherKey = 'bba6f56f2dcd34db5581285bb884ee36';
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
let weatherUrl = new UrlGen(weatherBaseUrl);
weatherUrl.addKey('appid', weatherKey);
weatherUrl.addKey('units', 'imperial');

export default class SearchManager {
    constructor(node, weatherState) {
        this.node = node;
        this.state = 'state'; // found, search, retry, loading
        this.weatherState = weatherState;

        DOM.clearNode(this.node);
        this.updateSearchState();
    }

    updateState(state) {
        this.state = state;
    }

    updateSearchState() {
        this.state = 'search';
        const containerNode = DOM.createDiv(this.node, ['city-container']);
        const cityNode = DOM.createTextInput(containerNode, 'city-input', 'Enter city:');
        const searchNode = DOM.createDiv(containerNode, ['edit'], 'search');
        searchNode.id = 'search-button';

        searchNode.addEventListener('click', async () => {
            let cityName = cityNode.value;
            if (!cityName) return;

            queryCity(cityName)
                .then(res => {
                    console.log('promise furfilled');
                })
                .catch(err => {
                    console.log('promise rejected: ', err);
                });
        });
    }

    updateFoundState() {
        this.state = 'found';
        const containerNode = DOM.createDiv(this.node, ['city']);
        const cityNode = DOM.createDiv(containerNode, ['city']);
        const editNode = DOM.createDiv(containerNode, ['edit']);
    }
}

async function queryCity(cityName) {
    return new Promise(async (resolve, reject) => {
        weatherUrl.addKey('q', cityName);
        let response = await fetch(weatherUrl.url, {mode: 'cors'});
        if (!response.ok)
            reject(response.statusText);
        let json = await response.json();
        if (json.cod != '200')
            reject(json.cod);
        resolve(json);
    });
}