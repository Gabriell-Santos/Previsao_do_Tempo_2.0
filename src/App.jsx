import { useState, useRef } from "react";
import "./App.css";

function App() {
  // Separando os Hooks do React
  const InputRef = useRef();

  {
    /* Criando a Função de Busca */
  }
  function searchCity() {
    console.log(InputRef.current.value);
  }

  return (
    <div>
      <h2>Previsão do Tempo 2.0</h2>
      <input  ref={InputRef} type="text" placeholder="Digite o nome da Cidade" />
      <button onClick={searchCity}>Buscar</button>
    </div>
  );
}

export default App;
