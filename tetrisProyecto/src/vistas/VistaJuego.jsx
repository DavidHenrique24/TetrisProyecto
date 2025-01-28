import React, { useState } from "react";
import { modelos } from "../lib/modelos";
import Panel from "../componentes/Panel";
import Pieza from "../componentes/Pieza";

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Panel arrayCasillas={arrayCasillas} />
      <Pieza pieza = {pieza} />

      <Pieza pieza={nuevaPieza(0, 4).matriz} />
      <Pieza pieza={nuevaPieza(4, 4).matriz} />
    </div>
  );
};

export default Juego;
