import React from "react";
import { colorPieza } from "../lib/colores.js"; 

const Panel = ({ arrayCasillas }) => {
  return (
    <div className="panel mt-5">
      {arrayCasillas.map((fila) => (
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

export default Panel;
