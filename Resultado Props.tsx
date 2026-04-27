type Props = {
  valor: number;
  tipo: string;
  conversiones: string[];
};

function Resultado({ valor, tipo, conversiones }: Props) {
  const r: string[] = [];

  if (tipo === "C") {
    if (conversiones.includes("C-F"))
      r.push(`C → F: ${(valor * 9 / 5 + 32).toFixed(2)}`);
    if (conversiones.includes("C-K"))
      r.push(`C → K: ${(valor + 273.15).toFixed(2)}`);
  }

  if (tipo === "F") {
    if (conversiones.includes("F-C"))
      r.push(`F → C: ${((valor - 32) * 5 / 9).toFixed(2)}`);
    if (conversiones.includes("F-K"))
      r.push(`F → K: ${((valor - 32) * 5 / 9 + 273.15).toFixed(2)}`);
  }

  if (tipo === "K") {
    if (conversiones.includes("K-C"))
      r.push(`K → C: ${(valor - 273.15).toFixed(2)}`);
    if (conversiones.includes("K-F"))
      r.push(`K → F: ${((valor - 273.15) * 9 / 5 + 32).toFixed(2)}`);
  }

  return (
    <ul>
      {r.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}

export default Resultado;
