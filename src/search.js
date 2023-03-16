import DOM from './dom.js'

import UrlGen from './urlGen.js';
const weatherKey = 'bba6f56f2dcd34db5581285bb884ee36';
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
let weatherUrl = new UrlGen(weatherBaseUrl);
weatherUrl.addKey('appid', weatherKey);
weatherUrl.addKey('units', 'imperial');

import WeatherState from './weatherState.js';

export default class SearchManager {
    constructor(node, weatherState) {
        this.node = node;
        this.state = 'state'; // found, search, retry, loading
        this.weatherState = new WeatherState();
        this.weatherState.write();

        DOM.clearNode(this.node);
        this.updateSearchState();
        // this.updateFoundState();
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

        iconNode.addEventListener('click', async () => {
            let cityName = inputNode.value;
            if (!cityName) return;

            let tempJson = null;

            Promise.race([queryCity(cityName, iconNode)])
                .then(res => {
                    if (this.state != 'search') return;

                    tempJson = res;
                    console.log('promise furfilled');

                    this.weatherState.update(res);
                    console.log('new weatherState: ', this.weatherState);

                    this.updateFoundState();
                })
                .catch(err => {
                    if (err === 'Not Found')
                        errorNode.textContent = 'City not found';
                    else
                        errorNode.textContent = err;

                    console.log('promise rejected: ', err);
                })
                .finally(() => {
                    if (this.state !='search') return;
                    iconNode.classList.replace('loading', 'search');
                });
        });

        cancelNode.addEventListener('click', this.updateFoundState.bind(this), {once: true});

    }

    updateFoundState() {
        this.state = 'found';
        DOM.clearNode(this.node);

        const containerNode = DOM.createDiv(this.node, ['city-container']);
        const cityNode = DOM.createDiv(containerNode, ['city'], this.weatherState.city);
        const iconNode = DOM.createDiv(containerNode, ['icon', 'edit']);

        this.weatherState.write();

        iconNode.addEventListener('click', () => {
            this.updateSearchState();
        });
    }
}

async function queryCity(cityName, iconNode) {
    return new Promise(async (resolve, reject) => {
        iconNode.classList.replace('search', 'loading');

        await new Promise(resolve => setTimeout(resolve, 300)); // DEBUG
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