const apiKey="0bd8f96606c5a1baba1db59a97c2a5a8";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".wicon");

async function checkWeather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data=await response.json();

    console.log(data);

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=data.main.temp+"ºc";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

if(data.weather[0].main=="Haze")
{
    wicon.src="images/haze.png";
}
else if(data.weather[0].main=="Clouds")
{
    wicon.src="images/cloudy.png";
}
else if(data.weather[0].main=="Rain")
{
    wicon.src="images/rain.png";
}
else if(data.weather[0].main=="Drizzle")
{
    wicon.src="images/drizzle.png";
}
else{
    wicon.src="images/sun.png";
}
}

searchBtn.addEventListener("click",()=>
{
    checkWeather(searchBox.value);
})

//checkWewather()
