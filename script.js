const options = {
method: 'GET',
headers: {
'content-type' : 'application/octet-stream',
'X-RapidAPI-Key': '38b46ee9a6msh3b1d406f9708554p13e321jsnd68ad74eab21',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};
const getWeather = (city)=>{
    cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
.then(response => response.json())
.then(response => {console.log(response) 
temp2.innerHTML = response.temp
temp.innerHTML = response.temp
feels_like.innerHTML = response.feels_like
humidity.innerHTML = response.humidity
humidity2.innerHTML = response.humidity
max_temp.innerHTML = response.max_temp
min_temp.innerHTML = response.min_temp
wind_speed.innerHTML = response.wind_speed
wind_speed2.innerHTML = response.wind_speed
wind_degrees.innerHTML = response.wind_degrees
sunrise.innerHTML = response.sunrise
sunset.innerHTML = response.sunset
})
.catch(err => console.error(err));}



submit.addEventListener("click", (e)=>{
e.preventDefault();  
getWeather(city.value)

})
getWeather("Delhi");
