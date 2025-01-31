import React, { useState } from "react";
import { modelos } from "../lib/modelos";
import Panel from "../componentes/Panel";
import Pieza from "../componentes/Pieza";

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
  const matrizPieza = modelos.piezas[0].matriz[0];  //para ubicar la pieza que queremos mostrar

  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <Panel arrayCasillas={arrayCasillas} />
      <div>
        <Pieza matrizPieza={matrizPieza} />
      </div>
    </div>
  );
};

export default Juego;
