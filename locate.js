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

const getLocation = async function () {
  const url ="https://ipinfo.io/json?token=5afc7db2ee9103";


  try {
    const response = await fetch(url);
    const report = await response.json();
    getWeather(report.city)
  } catch (error) {
    console.error(error);
  }
};

getLocation()


submit.addEventListener("click",(e)=>{
  e.preventDefault()
  getWeather(cityIp.value)
  cityIp.value=""
})
