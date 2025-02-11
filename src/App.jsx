import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import Weatherinfo from "./componets/Weatherinformations/Weatherinfo";


function App() {
  // Hooks UseRef
  const InputRef = useRef();

  // Hooks Usestate
  const [weather, setweather] = useState();

  {
    /* Criando a Função de Busca */
  }
  async function searchCity() {
    const city = InputRef.current.value;
    const Api = "62b7a6d0102fcb62feeda09e8b75a278";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}&units=metric&lang=pt_br`;
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Api}&units=metric&lang=pt_br`
    const info = await axios.get(url);
    setweather(info.data);
  }

  return (
    <div className="container">
      <h2>Previsão do Tempo 2.0</h2>
      <input ref={InputRef} type="text" placeholder="Digite o Nome da Cidade" />
      <button onClick={searchCity}>Buscar</button>
      {weather && <Weatherinfo info={weather} />}
    </div>
  );
}

export default App;
