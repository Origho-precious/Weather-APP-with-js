// Weather Class
class Weather {
    constructor(){
        this.apiKey = 'db0138da2adbb2e01b88489d36f91072';
    }

    err(){
        alert.style.display = 'block';
        setTimeout(() => {
            alert.style.display = 'none';
        }, 3000)
    }

    async getWeather(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
        const resData = await response.json();
        return resData;
    }
}
