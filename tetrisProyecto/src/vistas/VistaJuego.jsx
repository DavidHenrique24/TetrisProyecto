import React, { useState, useEffect } from "react";
import { nuevaPieza } from "../lib/nuevaPieza";  // Importar nuevaPieza
import Panel from "../componentes/Panel";
import { modelos } from "../lib/modelos";  

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);  // Estado para el panel
  const [piezaActual, setPiezaActual] = useState(nuevaPieza());  // Estado para la pieza actual

  // Función para generar una columna aleatoria dentro del rango permitido
  const generarColumnaAleatoria = () => {
    const columnaAleatoria = Math.floor(Math.random() * 8) + 1; 
    return columnaAleatoria;
  };

  // Función para insertar la pieza en el panel
  const pintarPieza = () => {
    if (!piezaActual) return; // Si no hay pieza actual, no hacer nada

    const nuevoPanel = [...arrayCasillas]; // Copiar el panel actual
    const { matriz } = piezaActual; // Obtener la matriz de la pieza actual

    // Insertar la pieza en el panel en la fila 0 y la columna aleatoria
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] !== 0) { // Solo insertamos si la casilla no es 0
          nuevoPanel[i][piezaActual.columna + j] = matriz[i][j];
        }
      }
    }
    setArrayCasillas(nuevoPanel); // Actualizamos el panel con la nueva pieza
  };

  // Función para insertar una nueva pieza
  const insertaNuevaPieza = () => {
    // Crear una nueva pieza con fila 0 y columna aleatoria
    const nueva = nuevaPieza();
    nueva.columna = generarColumnaAleatoria();  // Asignamos la columna aleatoria
    setPiezaActual(nueva);  // Actualizamos el estado con la nueva pieza
    pintarPieza();  // Insertar la pieza en el panel
  };

  // Funciones de movimiento que solo muestran un mensaje por consola
  const moverDra = () => {
    console.log("Mover pieza a la derecha");
  };

  const moverIzq = () => {
    console.log("Mover pieza a la izquierda");
  };

  const bajar = () => {
    console.log("Bajar pieza");
  };

  const girar = () => {
    console.log("Girar pieza");
  };

  // Función para controlar las teclas
  const controlTeclas = (event) => {
    switch (event.key) {
      case "ArrowRight":
        moverDra();
        break;
      case "ArrowLeft":
        moverIzq();
        break;
      case "ArrowDown":
        bajar();
        break;
      case "ArrowUp":
        girar();
        break;
      default:
        break;
    }
  };

  // Añadir el event listener para las teclas
  useEffect(() => {
    window.addEventListener("keydown", controlTeclas);
    return () => {
      window.removeEventListener("keydown", controlTeclas);
    };
  }, []);

  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <Panel arrayCasillas={arrayCasillas} />
      <button onClick={insertaNuevaPieza}>Insertar Nueva Pieza</button>
    </div>
  );
};

export default Juego;
