import React from "react";
import "./WeatherInfo5Days.css";

const Weather5Days = ({ info5Days }) => {

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

  // Transformando dados em um Array 
   const NextfiveDays = Object.values(Dayforecast).slice(1,6);
   console.log(NextfiveDays);

  return (
    <div className="weather-container">
      <h3>Previsão daqui 5 Dias </h3>
      {NextfiveDays.map(forecast => (
        <div key={forecast.dt}>
          <p>Quinta</p>
          <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}/>
        </div>
      ))}
    </div>
  );
};

export default Weather5Days;
