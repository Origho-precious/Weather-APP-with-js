
class Storage{
    store(){
        let value;
        if(localStorage.getItem('city').length > 0){
            value = JSON.parse(localStorage.getItem('city'));
            weather.getWeather(value)
                .then(data => {
                    ui.showLocation(data);  
                    ui.showDescription(data.weather[0]); 
                    ui.showTemp(data); 
                })
        }else{
            value = '';
        }
    }
}