import { useState } from "react";
import Resultado from "./Resultado";

function App() {
  const [temp, setTemp] = useState(25);
  const [unidad, setUnidad] = useState("C");

  const conversiones = ["C-F", "C-K", "F-C", "F-K", "K-C", "K-F"];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🌡️ Conversor de Temperatura</h1>

      <input
        type="number"
        value={temp}
        onChange={(e) => setTemp(Number(e.target.value))}
      />

      <select
        value={unidad}
        onChange={(e) => setUnidad(e.target.value)}
      >
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
        <option value="K">Kelvin</option>
      </select>

      <Resultado valor={temp} tipo={unidad} conversiones={conversiones} />
    </div>
  );
}

export default App;
