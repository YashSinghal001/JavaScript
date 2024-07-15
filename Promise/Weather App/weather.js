const URL="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

async function checkWeather(){
    const response=await fetch(URL);
    let data=await response.json();
    console.log(data);
}
checkWeather();