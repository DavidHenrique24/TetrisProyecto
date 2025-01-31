import React from "react";

const Panel = ({ arrayCasillas }) => {
  return (
    <div className="panel mt-5">
      {arrayCasillas.map((fila) => (
        <div className="fila d-flex">
          {fila.map((casilla) => (
            <div className={`celda bg-white border border-dark`} style={{ width: "30px", height: "30px" }}>
              {casilla}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Panel;
