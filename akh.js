//32fda56f4da28afb99ae1bf0baca7868

const weatherApi={
    key:"32fda56f4da28afb99ae1bf0baca7868",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
const searchInputBox =document.getElementById('input-box');
searchInputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode==13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value)
    }

});
//get weather report
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then(showWeatherReport)
}
//show weather report
function showWeatherReport(weather){
    console.log(weather);
    let city = document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;
    let temperature = document.getElementById('temp');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;
    let min=document.getElementById('min');
    min.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (Min) / ${Math.ceil(weather.main.temp_max)}&deg;C (Max)`;
    let weatherType=document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;

}





//manage date
