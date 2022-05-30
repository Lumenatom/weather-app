city = document.querySelector(".city"),
    icon = document.querySelector(".icon-weather"),
    temperature = document.querySelector(".temperature"),
    tempMinMax = document.querySelector(".temp-min-max"),
    description = document.querySelector(".description"),
    input = document.querySelector(".input"),
    button = document.querySelector(".button")

function outData(location = "kiev") {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=bae9424fb8ffb0e7dd89e8edfa31730f`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            city.innerHTML = data.name;
            temperature.innerHTML = Math.floor(data.main.temp - 273) + "°C";
            // description.innerHTML = data.weather[0].main;
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
            tempMinMax.innerHTML = `min:${Math.floor(data.main.temp_min - 273)}°C - max:${Math.floor(data.main.temp_max - 273)}°C`;
        })
}

button.addEventListener("click", search);
input.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        search()
    }
});

function search() {
    outData(input.value);
    input.value = " ";

}

window.onload = outData()