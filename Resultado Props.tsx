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
