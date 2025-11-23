import { useState } from "react";

export default function RoomPricing() {
  const precio1Persona = 2500;
  const precio2Personas = 4600;
  const precio3OPMas = 5200;
  const IVA = 0.16;

  const [personas, setPersonas] = useState(1);
  const [dias, setDias] = useState(1);
  const [resultado, setResultado] = useState(""); //Resultado a mostrar al final 

  function calcular() {
    let precioPorDia = 0;
    let descuento = 0;
    if (personas === 1) {
      precioPorDia = precio1Persona;  
      descuento = 0.05;               
    } else if (personas === 2) {
      precioPorDia = precio2Personas; 
      descuento = 0.09;               
    } else {
      precioPorDia = precio3OPMas;    
      descuento = 0.15;               
    }

    const subtotal = precioPorDia * dias;
    const conIVA = subtotal * (1 + IVA);
    const totalFinal = conIVA * (1 - descuento);

    setResultado(`
      Subtotal: $${subtotal}
      IVA: $${(subtotal * IVA).toFixed(2)}
      Descuento: ${descuento * 100}%
      TOTAL A PAGAR: $${totalFinal.toFixed(2)}
    `);
  }

  return (
    <div>
      <label>
        Número de personas:
        <input
          type="number"
          min={1}
          value={personas}
          onChange={(e) => setPersonas(Number(e.target.value))} //Trae el valor
        />
      </label>

      <br />

      <label>
        Días de estancia:
        <input
          type="number"
          min={1}
          value={dias}
          onChange={(e) => setDias(Number(e.target.value))}
        />
      </label>

      <br />

      <button onClick={calcular}>Calcular precio</button>

      <pre>{resultado}</pre>
    </div>
  );
}
