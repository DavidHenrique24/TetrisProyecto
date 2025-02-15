import React from "react";
import { colorPieza } from "../lib/colores.js";

const Pieza = ({ matrizPieza }) => {
  return (
    <div className="pieza mt-3">
      {matrizPieza.map((fila, filaIndex) => (
        <div className="fila d-flex" key={filaIndex}>
          {fila.map((casilla, casillaIndex) => (
            <div
              className={`celda ${colorPieza(casilla)} border border-dark`} 
              style={{ width: "30px", height: "30px" }}
              key={casillaIndex}
            >
              {casilla}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Pieza;