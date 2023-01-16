const API_KEY = "c8066bf9271818b773cd0e7f9d156722";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in" , lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => 
        {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
             
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
             
        });
}

function onGeoError(){
    alert("can't find u no weather for u")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



