const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const url = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
};

async function getWeatherByLocation(location) {
    const resp = await fetch(url(location), { origin: "cors" });
    const respData = await resp.json();

    console.log(KtoC(respData.main.temp));

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);
}

// getWeatherByLocation(`Madrid`);

function KtoC(K) {
    return (K - 273.15).toFixed(2);
}
