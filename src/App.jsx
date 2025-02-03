import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // Separando os Hooks do React
  const InputRef = useRef();

  {
    /* Criando a Função de Busca */
  }
  async function searchCity() {
    const city = InputRef.current.value;
    const Api = "62b7a6d0102fcb62feeda09e8b75a278";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}&units=metric&lang=pt_br`;
    const data = await axios.get(url);
    console.log(data)
  }

  return (
    <div>
      <h2>Previsão do Tempo 2.0</h2>
      <input ref={InputRef} type="text" placeholder="Digite o nome da Cidade" />
      <button onClick={searchCity}>Buscar</button>
    </div>
  );
}

export default App;
