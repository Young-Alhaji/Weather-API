async function forecast(){
let cityName = cityname.value
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=09756d60b2011a99fb389f6e43e766cc&units=metric`
let response = await fetch(url)
let convertedResponse= await response.json()
console.log(convertedResponse)
  locatio.innerHTML= `  ${convertedResponse.sys.country} <br> ${convertedResponse.name} `
  locatio2.innerHTML=` ${convertedResponse.weather[0].description}`
  maintemp.innerHTML=` ${convertedResponse.main.temp}°C`
 	
		 	ta.innerHTML=`<tr> <td>${convertedResponse.main.feels_like}°C
		 	</td> <td>${convertedResponse.main.humidity}%
		 	</td><td>${convertedResponse.main.pressure}hPa </td> </tr>`
				
				
				
				
				
			
			
	}