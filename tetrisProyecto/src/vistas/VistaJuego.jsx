import React, { useState } from "react";
import { modelos } from "../lib/modelos";
import Panel from "../componentes/Panel";

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Panel arrayCasillas={arrayCasillas} />
    </div>
  );
};

export default Juego;
