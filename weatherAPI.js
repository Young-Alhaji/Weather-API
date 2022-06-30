async function getLocation() {
    navigator.geolocation.getCurrentPosition((position)=>{
let url = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&
lon=${position.coords.longitude}&appid=09756d60b2011a99fb389f6e43e766cc&units=metric`
fetch(url).then((response)=>response.json()).then((convertedResponse)=>{
  locatio.innerHTML= `  ${convertedResponse.sys.country} <br> ${convertedResponse.name} `
  locatio2.innerHTML=` ${convertedResponse.weather[0].description}`
  maintemp.innerHTML=` ${convertedResponse.main.temp}°C`
  
      

      ta.innerHTML=`<tr> <td>${convertedResponse.main.feels_like}°C
      </td> <td>${convertedResponse.main.humidity}%
      </td><td>${convertedResponse.main.pressure}hPa </td> </tr>`
        

})
    }
  )
}

async function forecast(){
let cityName = cityname.value
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=09756d60b2011a99fb389f6e43e766cc&units=metric`
let response = await fetch(url)
let convertedResponse= await response.json()
  locatio.innerHTML= `  ${convertedResponse.sys.country} <br> ${convertedResponse.name} `
  locatio2.innerHTML=` ${convertedResponse.weather[0].description}`
  maintemp.innerHTML=` ${convertedResponse.main.temp}°C`
 	
		 	

		 	ta.innerHTML=`<tr> <td>${convertedResponse.main.feels_like}°C
		 	</td> <td>${convertedResponse.main.humidity}%
		 	</td><td>${convertedResponse.main.pressure}hPa </td> </tr>`
				
				
				
				
				
			
			
	}