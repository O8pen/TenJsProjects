const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const form = document.getElementById(`form`);
const search = document.getElementById(`search`);
const main = document.getElementById(`main`);

const url = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
};

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

    console.log(KtoC(respData.main.temp));

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    console.log(temp);

    const weather = document.createElement(`div`);
    weather.classList.add(`weather`);

    weather.innerHTML = `
        <h2>${temp}°C</h2>
        <small>in ${search.value}</small>
    `;

    main.innerHTML = ``;

    main.appendChild(weather);
}

function KtoC(K) {
    return (K - 273.15).toFixed(2);
}

form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});
