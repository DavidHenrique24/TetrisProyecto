import React, { useState, useEffect } from "react";
import { nuevaPieza } from "../lib/nuevaPieza";
import Panel from "../componentes/Panel";
import { modelos } from "../lib/modelos";

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
  const [piezaActual, setPiezaActual] = useState({ ...nuevaPieza(), fila: 0, columna: 1 }); // Cambié fila: 1 por fila: 0
  const [jugando, setJugando] = useState(false);

  // Función para borrar la pieza
  const limpiarPieza = (panel, pieza) => {
    if (!pieza) return panel.map((fila) => [...fila]);
    return panel.map((fila, i) =>
      fila.map((casilla, j) =>
        i >= pieza.fila &&
        i < pieza.fila + pieza.matriz.length &&
        j >= pieza.columna &&
        j < pieza.columna + pieza.matriz[0].length &&
        pieza.matriz[i - pieza.fila][j - pieza.columna] !== 0
          ? 0
          : casilla
      )
    );
  };

  // Función para pintar la nueva pieza
  const pintarPieza = (pieza) => {
    if (!pieza) return;
    
    // Primero, borramos la pieza anterior
    let nuevoPanel = limpiarPieza(arrayCasillas, pieza);

    // Luego, pintamos la nueva pieza en la nueva posición
    nuevoPanel = nuevoPanel.map((fila, i) =>
      fila.map((casilla, j) =>
        i >= pieza.fila &&
        i < pieza.fila + pieza.matriz.length &&
        j >= pieza.columna &&
        j < pieza.columna + pieza.matriz[0].length &&
        pieza.matriz[i - pieza.fila][j - pieza.columna] !== 0
          ? pieza.matriz[i - pieza.fila][j - pieza.columna]
          : casilla
      )
    );

    // Actualizamos el estado con el nuevo panel
    setArrayCasillas(nuevoPanel);
  };

  // Función para mover la pieza hacia abajo
  const bajar = () => {
    if (!piezaActual) return;
    const nuevaFila = piezaActual.fila + 1;
    if (nuevaFila + piezaActual.matriz.length <= arrayCasillas.length - 1) {
      const nuevaPieza = { ...piezaActual, fila: nuevaFila };
      setPiezaActual(nuevaPieza);
      pintarPieza(nuevaPieza);
    } else {
      setJugando(false); // Detener el juego cuando toca el fondo
    }
  };

  // Función para mover la pieza hacia la izquierda
  const moverIzquierda = () => {
    if (!piezaActual) return;
    const nuevaColumna = piezaActual.columna - 1;
    if (nuevaColumna >= 1) {
      const nuevaPieza = { ...piezaActual, columna: nuevaColumna };
      setPiezaActual(nuevaPieza);
      pintarPieza(nuevaPieza);
    }
  };

  // Función para mover la pieza hacia la derecha
  const moverDerecha = () => {
    if (!piezaActual) return;
    const nuevaColumna = piezaActual.columna + 1;
    if (nuevaColumna + piezaActual.matriz[0].length <= arrayCasillas[0].length - 1) {
      const nuevaPieza = { ...piezaActual, columna: nuevaColumna };
      setPiezaActual(nuevaPieza);
      pintarPieza(nuevaPieza);
    }
  };

  // Función para rotar la pieza
  const rotar = () => {
    if (!piezaActual) return;
    const nuevaMatriz = piezaActual.matriz[0].map((_, i) =>
      piezaActual.matriz.map((fila) => fila[i]).reverse()
    );

    if (
      piezaActual.fila + nuevaMatriz.length <= arrayCasillas.length - 1 &&
      piezaActual.columna + nuevaMatriz[0].length <= arrayCasillas[0].length - 1
    ) {
      const nuevaPieza = { ...piezaActual, matriz: nuevaMatriz };
      setPiezaActual(nuevaPieza);
      pintarPieza(nuevaPieza);
    }
  };

  useEffect(() => {
    if (jugando) {
      const intervalo = setInterval(() => {
        bajar();
      }, 500);
      return () => clearInterval(intervalo);
    }
  }, [jugando, piezaActual]);

  const iniciarMovimiento = () => {
    setJugando(true);
  };

  useEffect(() => {
    const controlTeclas = (event) => {
      if (!jugando) return;
      switch (event.key) {
        case "ArrowDown":
          bajar();
          break;
        case "ArrowLeft":
          moverIzquierda();
          break;
        case "ArrowRight":
          moverDerecha();
          break;
        case "ArrowUp":
          rotar();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", controlTeclas);
    return () => window.removeEventListener("keydown", controlTeclas);
  }, [piezaActual, jugando]);

  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <Panel arrayCasillas={arrayCasillas} />
      <button onClick={iniciarMovimiento} disabled={jugando}>
        JUGAR
      </button>
    </div>
  );
};

export default Juego;
