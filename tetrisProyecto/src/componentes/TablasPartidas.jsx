import React, { useState } from "react";

// Array inicial de las partidas
const arrayPartidasInicial = [
  { 
    nick: "Jugador1", 
    puntos: 1200, 
    fecha: "2024-12-01", 
    imagen: "https://www.example.com/imagen1.jpg" 
  },
  { 
    nick: "Jugador2", 
    puntos: 1500, 
    fecha: "2024-12-02", 
    imagen: "https://www.example.com/imagen2.jpg" 
  },
  { 
    nick: "Jugador3", 
    puntos: 980, 
    fecha: "2024-12-03", 
    imagen: "https://www.example.com/imagen3.jpg" 
  },
  { 
    nick: "Jugador4", 
    puntos: 1100, 
    fecha: "2024-12-04", 
    imagen: "https://www.example.com/imagen4.jpg" 
  },
  { 
    nick: "Jugador5", 
    puntos: 1350, 
    fecha: "2024-12-05", 
    imagen: "https://www.example.com/imagen5.jpg" 
  },
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

  const agregarPartida = () => {
    const nuevaPartida = {
      nick: `Jugador${partidas.length + 1}`,
      puntos: Math.floor(Math.random() * 2000), // Puntos aleatorios
      fecha: new Date().toISOString().split("T")[0], // Fecha actual
      imagen: "https://www.example.com/imagen.jpg", // Imagen por defecto
    };
    setPartidas([...partidas, nuevaPartida]);
  };

  return (
    <div className="container mt-5 bg-dark p-2">
      <button onClick={agregarPartida} className="btn btn-primary mb-4">
        Agregar Partida
      </button>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nick</th>
            <th>
              Puntuación
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
              <td>
                <img 
                  src={partida.imagen} 
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
                />
              </td>
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
