
export default class WeatherState {
    constructor() {
        this.temp = {
            value: null,
            node: document.querySelector('.temp'),
            update: function(data) {this.value = data.main.temp},
            write: function() {
                if (!this.value) return;
                this.node.textContent = this.value.toString() + '°F';
            },
        };
        this.feelsLike = {
            value: null,
            node: document.querySelector('.feels-like'),
            update: function(data) {this.value = data.main.feels_like},
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
                    this.node.textContent = 'loading weather2...';
                    return;
                }
                this.node.textContent = this.value;
            },
        };
        // this.city = {
        //     value: null,
        //     node: document.querySelector('.city'),
        //     update: function(data) {this.value = data.name},
        //     write: function() {this.node.textContent = this.value.toString() + '°F';},
        // };
        // this.icon = {
        //     value: null,
        //     node: document.querySelector('.img'),
        //     update: function(data) {this.value = data.weather[0].icon},
        //     write: function() {this.node.textContent = this.value.toString() + '°F';},
        // };
    }

    update(data) {
        for (let prop in this)
            this[prop].update(data);
    }
    write() {
        for (let prop in this)
            this[prop].write();
    }
}
