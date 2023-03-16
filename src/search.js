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
        // this.updateFoundState();
    }

    updateSearchState() {
        this.state = 'search';
        DOM.clearNode(this.node);

        const containerNode = DOM.createDiv(this.node, ['city-container']);
        const inputContainerNode = DOM.createDiv(containerNode, ['input-container']);
        // const errorNode = DOM.createDiv(inputContainerNode, ['error'], 'error');
        const inputNode = DOM.createTextInput(inputContainerNode, ['city-input'], 'Enter city:');
        const searchNode = DOM.createDiv(containerNode, ['icon', 'search']);
        const cancelNode = DOM.createDiv(containerNode, ['icon', 'cancel']);

        searchNode.addEventListener('click', async () => {
            let cityName = inputNode.value;
            if (!cityName) return;

            let tempJson = null;

            queryCity(cityName)
                .then(res => {
                    if (this.state != 'search') return;

                    tempJson = res;
                    console.log('promise furfilled');
                    this.weatherState.update(res);

                    this.updateFoundState();
                })
                .catch(err => {
                    console.log('promise rejected: ', err);
                    console.log('weatherState: ', this.weatherState);
                    console.log('json: ', tempJson);
                });
        });

        cancelNode.addEventListener('click', this.updateFoundState.bind(this));

    }

    updateFoundState() {
        this.state = 'found';
        DOM.clearNode(this.node);

        const containerNode = DOM.createDiv(this.node, ['city-container']);
        const cityNode = DOM.createDiv(containerNode, ['city'], this.weatherState.city);
        const iconNode = DOM.createDiv(containerNode, ['icon', 'edit']);

        iconNode.addEventListener('click', () => {
            this.updateSearchState();
        });
    }
}

async function queryCity(cityName) {
    return new Promise(async (resolve, reject) => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // DEBUG

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