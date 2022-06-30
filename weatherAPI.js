async function getLocation() {
    navigator.geolocation.getCurrentPosition((position)=>{
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&
lon=${position.coords.longitude}&appid=09756d60b2011a99fb389f6e43e766cc&units=metric`
fetch(url).then((response)=>response.json()).then((convertedResponse)=>{
  locatio.innerHTML= `  ${convertedResponse.sys.country} <br> ${convertedResponse.name} `
  locatio2.innerHTML=` ${convertedResponse.weather[0].description}`
  maintemp.innerHTML=` ${convertedResponse.main.temp}°C`  
      ta.innerHTML=`${convertedResponse.main.feels_like}°C`
      ta2.innerHTML=`${convertedResponse.main.humidity}%`
      ta3.innerHTML=`${convertedResponse.main.pressure}hPa`
        

})
    }
  )
}

async function forecast(){
let cityName = cityname.value
const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=09756d60b2011a99fb389f6e43e766cc&units=metric`
let response = await fetch(url1)
let convertedResponse= await response.json()
  locatio.innerHTML= `  ${convertedResponse.sys.country} <br> ${convertedResponse.name} `
  locatio2.innerHTML=` ${convertedResponse.weather[0].description}`
  maintemp.innerHTML=` ${convertedResponse.main.temp}°C`
 	 ta.innerHTML=`${convertedResponse.main.feels_like}°C`
      ta2.innerHTML=`${convertedResponse.main.humidity}%`
      ta3.innerHTML=`${convertedResponse.main.pressure}hPa`		
	}