import React from "react";
import { colorPieza } from "../lib/colores.js";

const Panel = ({ arrayCasillas }) => {
  return (
    <div className="panel mt-5">
      {arrayCasillas.map((fila, filaIndex) => (
        <div className="fila d-flex" key={filaIndex}> {/* key para la fila */}
          {fila.map((casilla, casillaIndex) => (
            <div
              key={casillaIndex}  // key para la celda
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

export default Panel;
