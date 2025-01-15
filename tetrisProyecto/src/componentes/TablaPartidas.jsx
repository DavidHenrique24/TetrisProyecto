import React, { useState } from "react";

// Array inicial de las partidas
const arrayPartidasInicial = [
  { nick: "Jugador1", puntos: 1200, fecha: "2024-12-01" },
  { nick: "Jugador2", puntos: 1500, fecha: "2024-12-02" },
  { nick: "Jugador3", puntos: 980, fecha: "2024-12-03" },
  { nick: "Jugador4", puntos: 1100, fecha: "2024-12-04" },
  { nick: "Jugador5", puntos: 1350, fecha: "2024-12-05" },
];

// Función para ordenar partidas 
export function ordenarPartidas(array, columna, orden = "asc") {
  return [...array].sort((a, b) => {
    if (columna === "puntos" || columna === "fecha") {
      return orden === "asc"
        ? a[columna] > b[columna]
          ? 1
          : -1
        : a[columna] < b[columna]
        ? 1
        : -1;
    }
    return 0;
  });
}

// Componente principal
export function TablaPartidas() {
  const [partidas, setPartidas] = useState(arrayPartidasInicial);

  const manejarOrden = (columna, orden) => {
    const partidasOrdenadas = ordenarPartidas(partidas, columna, orden);
    setPartidas(partidasOrdenadas);
  };

  //Aca ya esta para agregar partias
  const agregarPartida = () => {
    const nuevaPartida = {
      nick: `Jugador${partidas.length + 1}`,
      puntos: Math.floor(Math.random() * 2000), // Puntos aleatorios
      fecha: new Date().toISOString().split("T")[0], // Fecha actual
    };
    setPartidas([...partidas, nuevaPartida]);
  };

  return (
    <div className="container-fluid">
      <h2 className="mt-4 mb-5">Tabla de Partidas</h2>
      <button onClick={agregarPartida}>Agregar Partida</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nick</th>
            <th>
              Puntos
              <button
                className="btn btn-link"
                onClick={() => manejarOrden("puntos", "asc")}
              >
                ↑
              </button>
              <button
                className="btn btn-link"
                onClick={() => manejarOrden("puntos", "desc")}
              >
                ↓
              </button>
            </th>
            <th>
              Fecha
              <button
                className="btn btn-link"
                onClick={() => manejarOrden("fecha", "asc")}
              >
                ↑
              </button>
              <button
                className="btn btn-link"
                onClick={() => manejarOrden("fecha", "desc")}
              >
                ↓
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {partidas.map((partida, index) => (
            <tr key={index}>
              <td>{partida.nick}</td>
              <td>{partida.puntos}</td>
              <td>{partida.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaPartidas;