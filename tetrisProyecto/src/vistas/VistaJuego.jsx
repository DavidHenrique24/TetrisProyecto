import React, { useState } from "react";
import { modelos } from "../lib/modelos";
import Panel from "../componentes/Panel";
import Pieza from "../componentes/Pieza";
import { nuevaPieza } from "../lib/nuevaPieza";



const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
  const matrizPieza = modelos.piezas[1].matriz[3];  
  const pieza = nuevaPieza();

  console.log("Pieza 1:", pieza); 

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
