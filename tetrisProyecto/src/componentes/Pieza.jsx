import React from "react";

export const Pieza = ({ pieza }) => {
  return (
    <div>
      {pieza.map((fila, idFila) => (
        <div key={idFila} className="d-flex">
          {fila.map((casilla, idCasilla) => (
            <div key={idCasilla}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Pieza;