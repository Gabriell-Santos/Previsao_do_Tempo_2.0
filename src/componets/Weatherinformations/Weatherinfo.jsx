import "./Weatherinfo.css"
import React from 'react'

const Weatherinfo = ({info}) => {
    
    console.log(info);

  return (
    <div>
        <h4>Previsões do Dia!</h4>
        <h2> {info.name} </h2>
        <div>
        <img src={`http://openweathermap.org/img/wn/${info.weather[0].icon}.png`} alt="Icone do Clima" />
        <p> {Math.round(info.main.temp)}° C </p>
        </div>
        <p> {info.weather[0].description} </p>
        <div>
            <p>Sensação térmica: {Math.round(info.main.feels_like)} ° </p>
            <p>Umidade: {info.main.humidity} </p>
            <p>Pressão:  </p>
        </div>
    </div>
  )
}

export default Weatherinfo