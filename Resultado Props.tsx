
type Props = {
  valor: number;
  tipo: string;
  conversiones: string[];
};

function Resultado({ valor, tipo, conversiones }: Props) {
  const resultados: string[] = [];

  if (tipo === "C") {
    if (conversiones.includes("C-F")) {
      resultados.push(`C a F: ${(valor * 9 / 5 + 32).toFixed(2)} °F`);
    }

    if (conversiones.includes("C-K")) {
      resultados.push(`C a K: ${(valor + 273.15).toFixed(2)} K`);
    }
  }

  if (tipo === "F") {
    if (conversiones.includes("F-C")) {
      resultados.push(`F a C: ${((valor - 32) * 5 / 9).toFixed(2)} °C`);
    }

    if (conversiones.includes("F-K")) {
      resultados.push(`F a K: ${((valor - 32) * 5 / 9 + 273.15).toFixed(2)} K`);
    }
  }

  if (tipo === "K") {
    if (conversiones.includes("K-C")) {
      resultados.push(`K a C: ${(valor - 273.15).toFixed(2)} °C`);
    }

    if (conversiones.includes("K-F")) {
      resultados.push(`K a F: ${((valor - 273.15) * 9 / 5 + 32).toFixed(2)} °F`);
    }
  }

  return (
    <ul>
      {resultados.map((r, i) => (
        <li key={i}>{r}</li>
      ))}
    </ul>
  );
}

export default Resultado;