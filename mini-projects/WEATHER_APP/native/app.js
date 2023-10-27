
const key = "08fa1b19f2541e554b840b180814ad08";
const input = document.getElementById("weather-city");

async function handleRequest() {
    const city = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    const result = await fetch(url);
    const jsonData = await result.json();

    return jsonData;
}

function renderDescription(data) {
    const date = new Date(parseInt(data.dt) * 1000);
    const dateCont = document.querySelector(".weather-description-date");
    dateCont.textContent = date.toDateString();

    const city = document.querySelector(".weather-description-city");
    city.textContent = data.name;

    const details = document.querySelector(".weather-description-details");
    details.textContent = data.weather[0].description;

    const icon = document.querySelector(".weather-description-icon");
    icon.style.backgroundImage = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`;

    const descr = document.querySelector(".weather-description-temp");
    descr.textContent = data.main.temp;
}

async function process(event) {
    if (event.key === "Enter") {
        const jsonData = await handleRequest();
        renderDescription(jsonData);
    }
}

input.addEventListener("keydown", process)