import React from "react";
import { colorPieza } from "../lib/colores.js";

const Pieza = ({ matrizPieza }) => {
  return (
    <div className="pieza mt-3">
      {matrizPieza.map((fila) => (
        <div className="fila d-flex">
          {fila.map((casilla) => (
            <div
              className={`celda ${colorPieza(casilla)} border border-dark`} 
              style={{ width: "30px", height: "30px" }}
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
