import React from "react";

const Pieza = ({ matrizPieza }) => {
  return (
    <div className="pieza mt-3">
      {matrizPieza.map((fila) => (
        <div className="fila d-flex">
          {fila.map((casilla) => (
            <div className={`celda bg-white border border-dark"}`}style={{ width: "30px", height: "30px" }}>
              {casilla}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Pieza;
