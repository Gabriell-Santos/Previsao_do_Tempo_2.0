import React from "react";
import "./WeatherInfo5Days.css";

const Weather5Days = ({ info5Days }) => {
  console.log(info5Days);

  // Pegando uma Previsão por Dia 
  let Dayforecast = {};

  // Convertendo as Datas da Api 
  for(let forecast of info5Days){
      const date = new Date(forecast.dt * 1000).toLocaleDateString();

  // Pegando uma Data por dia  Previsão
  if(!Dayforecast[date]){
    Dayforecast[date] = forecast
  }
  }

  console.log(Dayforecast)

  return (
    <div className="weather-container">
      <h3>Previsão daqui 5 Dias </h3>
    </div>
  );
};

export default Weather5Days;
