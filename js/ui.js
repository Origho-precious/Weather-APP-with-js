
// Variables 
const w_desc = document.getElementById('w-desc');
const w_loc = document.getElementById('w-location');
const w_temp = document.getElementById('w-temp');
const icon = document.getElementById('icon');
const alert = document.querySelector('.msg');

alert.style.display = 'none'; 

class UI{
    showLocation(data){
        let name = data.name;
        let country = data.sys.country;
        w_loc.textContent = `${name}, ${country}`;
    }

    showDescription(data){
        let mainDesc = data.main;
        let desc = data.description;
        let iconId = data.icon;
        w_desc.textContent = `${mainDesc}, ${desc}`;
        icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconId}@2x.png`);
    }

    showTemp(data){
        let temp = (data.main.temp - 273.15).toFixed(0);
        w_temp.innerHTML = `${temp}<span>&#8451;</span>`;
    }
}
