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


   // Convertendo e pegando os dias da semana 
   function DateConverter(date){
      const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: "long"});
      return newDate;
   }

  return (
    <div className="weather-container">
      <h3>Previsão daqui 5 Dias </h3>
      <div className="Weather-List">
      {NextfiveDays.map(forecast => (
        <div key={forecast.dt} className="Weather-Item">
          <p className="Forecast-Day"> {DateConverter(forecast)} </p>
          <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}/>
          <p className="Forecast-Description" > {forecast.weather[0].description} </p>
          <p> {Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C máx </p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Weather5Days;
