import React, { useState, useEffect } from "react";
import { nuevaPieza } from "../lib/nuevaPieza";
import Panel from "../componentes/Panel";
import { modelos } from "../lib/modelos";

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
  const [piezaActual, setPiezaActual] = useState({ ...nuevaPieza(), fila: 0 });

  // Limpia la pieza antes de actualizarla en el panel
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

  // Pinta la pieza en el panel
  const pintarPieza = (pieza) => {
    if (!pieza) return;

    let nuevoPanel = limpiarPieza(arrayCasillas, pieza);
    setArrayCasillas(
      nuevoPanel.map((fila, i) =>
        fila.map((casilla, j) =>
          i >= pieza.fila &&
          i < pieza.fila + pieza.matriz.length &&
          j >= pieza.columna &&
          j < pieza.columna + pieza.matriz[0].length &&
          pieza.matriz[i - pieza.fila][j - pieza.columna] !== 0
            ? pieza.matriz[i - pieza.fila][j - pieza.columna]
            : casilla
        )
      )
    );
  };

  // Baja la pieza si es posible
  const bajar = () => {
    if (!piezaActual) return;

    const nuevaFila = piezaActual.fila + 1;

    if (nuevaFila + piezaActual.matriz.length <= arrayCasillas.length) {
      const nuevaPieza = { ...piezaActual, fila: nuevaFila };
      setPiezaActual(nuevaPieza);
      pintarPieza(nuevaPieza);
    }
  };

  // Mover la pieza a la izquierda
  const moverIzquierda = () => {
    if (!piezaActual) return;

    const nuevaColumna = piezaActual.columna - 1;

    if (nuevaColumna >= 0) {
      const nuevaPieza = { ...piezaActual, columna: nuevaColumna };
      setPiezaActual(nuevaPieza);
      pintarPieza(nuevaPieza);
    }
  };

  // Mover la pieza a la derecha
  const moverDerecha = () => {
    if (!piezaActual) return;

    const nuevaColumna = piezaActual.columna + 1;

    if (nuevaColumna + piezaActual.matriz[0].length <= arrayCasillas[0].length) {
      const nuevaPieza = { ...piezaActual, columna: nuevaColumna };
      setPiezaActual(nuevaPieza);
      pintarPieza(nuevaPieza);
    }
  };

  // Rotar la pieza si es posible
  const rotar = () => {
    if (!piezaActual) return;

    const nuevaMatriz = piezaActual.matriz[0].map((_, i) =>
      piezaActual.matriz.map((fila) => fila[i]).reverse()
    );

    if (
      piezaActual.fila + nuevaMatriz.length <= arrayCasillas.length &&
      piezaActual.columna + nuevaMatriz[0].length <= arrayCasillas[0].length
    ) {
      const nuevaPieza = { ...piezaActual, matriz: nuevaMatriz };
      setPiezaActual(nuevaPieza);
      pintarPieza(nuevaPieza);
    }
  };

  // Maneja las teclas
  useEffect(() => {
    const controlTeclas = (event) => {
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
    return () => {
      window.removeEventListener("keydown", controlTeclas);
    };
  }, [piezaActual]);

  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <Panel arrayCasillas={arrayCasillas} />
    </div>
  );
};

export default Juego;
