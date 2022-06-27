async function forecast(){
let cityName = cityname.value
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=09756d60b2011a99fb389f6e43e766cc&units=metric`
let response = await fetch(url)
let convertedResponse= await response.json()
console.log(convertedResponse)
  locatio.innerHTML= `  ${convertedResponse.sys.country} <br> ${convertedResponse.name} `
  maintemp.innerHTML=` ${convertedResponse.main.temp}°C`
 	disp.innerHTML= `  Feels like <br>   ${convertedResponse.main.feels_like}°C <br>  Humidity <br> 
 	 ${convertedResponse.main.humidity}% <br>   Pressure <br> 
 	  ${convertedResponse.main.pressure}hPa <br>  Temp max <br>   
 	   ${convertedResponse.main.temp_max}°C <br>   Temp min<br> 
 	     ${convertedResponse.main.temp_min}°C`
		 	
	}