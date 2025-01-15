// src/components/TablaPartidas.jsx

import React, { useState } from "react";

// Array inicial de las partidas
const arrayPartidasInicial = [
  { nick: "Jugador1", puntos: 1200, fecha: "2024-12-01" },
  { nick: "Jugador2", puntos: 1500, fecha: "2024-12-02" },
  { nick: "Jugador3", puntos: 980, fecha: "2024-12-03" },
  { nick: "Jugador4", puntos: 1100, fecha: "2024-12-04" },
  { nick: "Jugador5", puntos: 1350, fecha: "2024-12-05" },
];

export function TablaPartidas() {
  const [partidas, setPartidas] = useState(arrayPartidasInicial);

  return (
    <div className="container-fluid">
      <h2 className="mt-4 mb-5">Tabla de Partidas</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nick</th>
            <th>Puntos</th>
            <th>Fecha</th>
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
