
import Resultado from "./Resultado";

function App() {
  const temperatura = 25;
  const unidad = "C";

  const conversiones = ["C-F", "C-K", "F-K"];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Conversor de Temperatura</h1>

      <p>
        Temperatura: {temperatura}° {unidad}
      </p>

      <Resultado
        valor={temperatura}
        tipo={unidad}
        conversiones={conversiones}
      />
    </div>
  );
}

export default App;