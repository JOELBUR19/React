import { useState } from "react";
import "./App.css";

export default function App() {
  const [pantalla, setPantalla] = useState("");

  const agregar = (valor: string) => {
    setPantalla(pantalla + valor);
  };

  const borrarTodo = () => {
    setPantalla("");
  };

  const calcular = () => {
    try {
      const resultado = eval(pantalla);
      setPantalla(String(resultado));
    } catch {
      setPantalla("Error");
    }
  };

  return (
    <div className="calculadora">
      <div className="pantalla">{pantalla}</div>

      <div className="botones">
        <button onClick={() => agregar("7")}>7</button>
        <button onClick={() => agregar("8")}>8</button>
        <button onClick={() => agregar("9")}>9</button>
        <button className="operador" onClick={() => agregar("/")}>÷</button>

        <button onClick={() => agregar("4")}>4</button>
        <button onClick={() => agregar("5")}>5</button>
        <button onClick={() => agregar("6")}>6</button>
        <button className="operador" onClick={() => agregar("*")}>×</button>

        <button onClick={() => agregar("1")}>1</button>
        <button onClick={() => agregar("2")}>2</button>
        <button onClick={() => agregar("3")}>3</button>
        <button className="operador" onClick={() => agregar("-")}>−</button>

        <button onClick={() => agregar("0")}>0</button>
        <button onClick={() => agregar(".")}>.</button>
        <button className="borrar" onClick={borrarTodo}>C</button>
        <button className="operador" onClick={() => agregar("+")}>+</button>

        <button className="igual" onClick={calcular}>=</button>

      </div>
    </div>
  );
}
