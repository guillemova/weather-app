import './App.css'
import axios from "axios"
import { useState, useEffect } from 'react'
import WeatherCard from './components/WeatherCard'


function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  
  const success = pos => {
    setCoords({
      lat: pos.coords.latitude,
      long: pos.coords.longitude
    })
  }
 
  useEffect(() => { 
    navigator.geolocation.getCurrentPosition(success)
    // getCurrentPosition recibe como valor un callback, en este caso es success, el cual en su parametro (pos) se guardara la ubicacion del servidor de mi internet recibida.
  },[] )
   
//
  useEffect(()=>{
    if(coords){
      const apiKey = "3fa73e9a7acd562976a7d8b53f6c2606"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${apiKey}`
      //Axios.get es una promesa. la cual es asincronica. 
      axios.get(URL)
      .then(res => {setWeather(res.data)
      const celsius = (res.data.main.temp - 273.15).toFixed(1)
      const fahrenheit = (celsius * 9/5 + 32).toFixed(1)
      setTemp({celsius,fahrenheit})})
      .catch(err => console.log(err))
    }
  },[coords])

 
  return (
    <div className="App">
      <WeatherCard
       weather={weather}
       temp ={temp} />
    </div>
  )
}

export default App
