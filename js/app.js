
const saveBtn = document.getElementById('w-change-btn');

const weather = new Weather();
const ui = new UI();
const store = new Storage();

// Instantiate Weather Object
saveBtn.addEventListener('click', () => {
    localStorage.setItem('city', JSON.stringify(city.value));
    store.store(city.value)
    weather.getWeather(city.value)
        .then(data => {
            ui.showLocation(data);  
            ui.showDescription(data.weather[0]); 
            ui.showTemp(data); 

            city.value = '';

            alert.textContent = 'Success! Close Modal';
            alert.className = 'text-success text-center mt-2';
            alert.style.display = 'block';
            setTimeout(() => {
                alert.style.display = 'none';
            }, 3000)
        })
        .catch(err => {
            alert.textContent = 'Please check city name and re-enter';
            alert.className = 'text-danger text-center mt-2';
            alert.style.display = 'block';
            setTimeout(() => {
                alert.style.display = 'none';
            }, 3000)
        })
})

document.addEventListener('DOMContentLoaded', () => {
    store.store();
})
