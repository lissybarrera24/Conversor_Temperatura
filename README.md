Main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

App.tsx
import TemperatureConverter from "./components/TemperatureConverter";

function App() {
  const temperatureValue = 25; // valor inicial
  const temperatureUnit: "C" | "F" | "K" = "C";

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🌡️ Conversor de Temperatura</h1>

      <TemperatureConverter
        value={temperatureValue}
        unit={temperatureUnit}
      />
    </div>
  );
}

export default App;

Resultado Props.tsx
import React from "react";

type Props = {
  value: number;
  unit: "C" | "F" | "K";
};

const TemperatureConverter: React.FC<Props> = ({ value, unit }) => {
  let celsius = 0;

  // Convertir a Celsius base
  if (unit === "C") {
    celsius = value;
  } else if (unit === "F") {
    celsius = (value - 32) * 5 / 9;
  } else if (unit === "K") {
    celsius = value - 273.15;
  }

  // Las Conversiones
  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  return (
    <div>
      <h2>Resultados</h2>

      <ul>
        <li>Celsius: {celsius.toFixed(2)} °C</li>
        <li>Fahrenheit: {fahrenheit.toFixed(2)} °F</li>
        <li>Kelvin: {kelvin.toFixed(2)} K</li>
      </ul>
    </div>
  );
};

export default TemperatureConverter;

index.html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Conversor de Temperatura</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

Package.json
{
  "name": "conversor-temperatura",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
