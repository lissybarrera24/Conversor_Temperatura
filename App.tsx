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
