import React from 'react'
import { useState } from 'react'

const WeatherCard = ({ weather, temp }) => {


    const handlerClick = ( ) => {
         setIsCelsius(!isCelsius)   
    }

const [isCelsius, setIsCelsius] = useState(true)
    return (
        <article className='card'>
            <header>
                <h1 className='card__title'>Weather App</h1>
                <h2 className='card__subtitle'>{weather?.name}, {weather?.sys.country}</h2>
            </header>

            <section className='card__icon-container'>
                <img className="card__icon" src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                <h3 className='card__temperature'>{
                isCelsius ? `${temp?.celsius} °C `
                : `${temp?.fahrenheit} °F` }
                </h3>
            </section>

            <section className='card__info'>
                <h3 className='card__info-title'>"{weather?.weather[0].description}"</h3>
                <ul>
                    <li className='card__item'><span className='card__span'><i className="fa-solid fa-wind"></i> Wind Speed:</span> {weather?.wind.speed}</li>
                    <li className='card__item'><span className='card__span'><i className="fa-solid fa-cloud"></i> Clouds:</span> {weather?.clouds.all}%</li>
                    <li className='card__item'><span className='card__span'><i className="fa-thin fa-temperature-full"></i> Pressure: </span>{weather?.main.pressure} hPa</li>
                </ul>
            </section>

                <footer className="card__footer">
                    <button onClick={handlerClick}>Change to {isCelsius?"°F": "°C"}</button>
                </footer>
        </article>
    )
}

export default WeatherCard
