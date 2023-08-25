const getWeather = async function (city) {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b8e76f631dmshd86eb23e0e37c23p176bffjsn08704870d692",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const report = await response.text();
    const result = JSON.parse(report)
    cityName.innerHTML= city.charAt(0).toUpperCase()+city.slice(1)
    cloud_pct.innerHTML=result.cloud_pct
    temp.innerHTML=result.temp
    temp2.innerHTML=result.temp
    feels_like.innerHTML=result.feels_like
    humidity.innerHTML=result.humidity
    humidity2.innerHTML=result.humidity
    min_temp.innerHTML=result.min_temp
    max_temp.innerHTML=result.max_temp
    wind_speed.innerHTML=result.wind_speed
    wind_speed2.innerHTML=result.wind_speed
    sunrise.innerHTML=result.sunrise
    sunset.innerHTML=result.sunset
  } catch (error) {
    console.error(error);
  }
};


const getWeatherOther = async function (city, i) {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b8e76f631dmshd86eb23e0e37c23p176bffjsn08704870d692",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const report = await response.text();
    const result = JSON.parse(report)
    cloud_pct1=document.getElementsByClassName('Cloud_pct')
    temp1=document.getElementsByClassName("Temp")
    feel1=document.getElementsByClassName("Feels_like")
    humidity1=document.getElementsByClassName("Humidity")
    min_temp1=document.getElementsByClassName("Min_temp")
    max_temp1=document.getElementsByClassName("Max_temp")
    wind_speed1=document.getElementsByClassName("Wind_speed")
    wind_degrees1=document.getElementsByClassName("Wind_degrees")
    sunrise1=document.getElementsByClassName("Sunrise")
    sunset1=document.getElementsByClassName("Sunset")

    cloud_pct1[i].innerHTML=result.cloud_pct
    temp1[i].innerHTML=result.temp
    feel1[i].innerHTML=result.feels_like
    humidity1[i].innerHTML=result.humidity
    min_temp1[i].innerHTML=result.min_temp
    max_temp1[i].innerHTML=result.max_temp
    wind_speed1[i].innerHTML=result.wind_speed
    wind_degrees1[i].innerHTML=result.wind_degrees
    sunrise1[i].innerHTML=result.sunrise
    sunset1[i].innerHTML=result.sunset
  } catch (error) {
    console.error(error);
  }
};

window.onload = getWeather('Mumbai');
ele=document.getElementsByClassName('text-start')
for(let i=0;i<6;i++){
    getWeatherOther(ele[i].innerHTML, i)
}

submit.addEventListener("click",(e)=>{
  e.preventDefault()
  getWeather(cityIp.value)
  cityIp.value=""
})
// getWeather("Mumbai")