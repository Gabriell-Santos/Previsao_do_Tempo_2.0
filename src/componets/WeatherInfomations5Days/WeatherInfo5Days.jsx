import React from 'react'
import "./WeatherInfo5Days.css"

const Weather5Days = ({info5Days}) => {

  console.log(info5Days);

  return (
    <div className='weather-container' >
        <h3>Previsão daqui 5 Dias </h3>
    </div>
  )
}

export default Weather5Days