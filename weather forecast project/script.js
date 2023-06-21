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


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston', options)
.then(response => response.json())
.then(response => {console.log(response) 
    boston_feelslike.innerHTML= response.feels_like
    boston_humidity.innerHTML=response.humidity
    boston_maxtemp.innerHTML=response.max_temp
    boston_mintemp.innerHTML=response.min_temp
    boston_sunrise.innerHTML=response.sunrise
    boston_sunset.innerHTML=response.sunset
    boston_temp.innerHTML=response.temp
    boston_winddegree.innerHTML=response.wind_degrees
    boston_windspeed.innerHTML=response.wind_speed
})

//Lucknow
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
.then(response => response.json())
.then(response => {console.log(response) 
    lucknow_feelslike.innerHTML= response.feels_like
    lucknow_humidity.innerHTML=response.humidity
    lucknow_maxtemp.innerHTML=response.max_temp
    lucknow_mintemp.innerHTML=response.min_temp
    lucknow_sunrise.innerHTML=response.sunrise
    lucknow_sunset.innerHTML=response.sunset
    lucknow_temp.innerHTML=response.temp
    lucknow_winddegree.innerHTML=response.wind_degrees
    lucknow_windspeed.innerHTML=response.wind_speed
})
//Ludhiana
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ludhiana', options)
.then(response => response.json())
.then(response => {console.log(response) 
    ludhiana_feelslike.innerHTML= response.feels_like
    ludhiana_humidity.innerHTML=response.humidity
    ludhiana_maxtemp.innerHTML=response.max_temp
    ludhiana_mintemp.innerHTML=response.min_temp
    ludhiana_sunrise.innerHTML=response.sunrise
    ludhiana_sunset.innerHTML=response.sunset
    ludhiana_temp.innerHTML=response.temp
    ludhiana_winddegree.innerHTML=response.wind_degrees
    ludhiana_windspeed.innerHTML=response.wind_speed
})
//Bathinda
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bathinda', options)
.then(response => response.json())
.then(response => {console.log(response) 
    bathinda_feelslike.innerHTML= response.feels_like
    bathinda_humidity.innerHTML=response.humidity
    bathinda_maxtemp.innerHTML=response.max_temp
    bathinda_mintemp.innerHTML=response.min_temp
    bathinda_sunrise.innerHTML=response.sunrise
    bathinda_sunset.innerHTML=response.sunset
    bathinda_temp.innerHTML=response.temp
    bathinda_winddegree.innerHTML=response.wind_degrees
    bathinda_windspeed.innerHTML=response.wind_speed
})