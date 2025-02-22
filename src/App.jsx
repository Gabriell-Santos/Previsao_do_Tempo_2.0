import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import Weatherinfo from "./componets/Weatherinformations/Weatherinfo";
import WeatherInfo5Days from "./componets/WeatherInfomations5Days/WeatherInfo5Days";


function App() {
  // Hooks UseRef
  const InputRef = useRef();

  // Hooks Usestate
  const [weather, setweather] = useState();
  const [Weather5Days, setweather5Days] = useState();

  {
    /* Criando a Função de Busca */
  }
  async function searchCity() {
    const city = InputRef.current.value;
    const Api = "62b7a6d0102fcb62feeda09e8b75a278";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}&units=metric&lang=pt_br`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Api}&units=metric&lang=pt_br`;
    try{
    const info = await axios.get(url);
    const InfoApi5Days = await axios.get(url5Days);
    setweather5Days(InfoApi5Days.data.list);
    setweather(info.data);
    }catch{
      alert("Cidade não encontrada, por favor verifique se digitou corretamante!");
    }
  }

  return (
    <div className="container">
      <h2>Previsão do Tempo 2.0</h2>
      <input ref={InputRef} type="text" placeholder="Digite o Nome da Cidade" 
      onKeyDown={(e) => e.key === "Enter" && searchCity()}
      />
     <button onClick={searchCity}>Buscar</button>
      {weather && <Weatherinfo info={weather} />}
      {Weather5Days && <WeatherInfo5Days info5Days={Weather5Days}/>}
    </div>
  );
}

export default App;
