import "./Weatherinfo.css"
import React from 'react'

const Weatherinfo = ({info}) => {
    
    console.log(info);

  return (
    <div className="Weather-container">
        <h3>Previsões do Dia!</h3>
        <h2> {info.name} </h2>
        <div className="weather-info">
        <img src={`http://openweathermap.org/img/wn/${info.weather[0].icon}.png`} alt="Icone do Clima" />
        <p className="temperature"> {Math.round(info.main.temp)}° C </p>
        </div>
        <p className="description"> {info.weather[0].description} </p>
        <div className="details">
            <p>Sensação térmica: {Math.round(info.main.feels_like)} °C </p>
            <p>Umidade: {info.main.humidity} </p>
            <p>Pressão: {info.main.pressure} </p>
        </div>
    </div>
  )
}

export default Weatherinfo