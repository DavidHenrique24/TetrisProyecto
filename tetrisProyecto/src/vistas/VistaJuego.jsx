import React, { useState, useEffect } from "react";
import { nuevaPieza } from "../lib/nuevaPieza";  // Importar nuevaPieza
import Panel from "../componentes/Panel";
import Pieza from "../componentes/Pieza";
import { modelos } from "../lib/modelos";  

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);  

  const [piezasAleatorias, setPiezasAleatorias] = useState([]);

  useEffect(() => {
    const nuevasPiezas = Array.from({ length: 5 }, () => nuevaPieza());
    setPiezasAleatorias(nuevasPiezas);
  }, []);

  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <Panel arrayCasillas={arrayCasillas} />

      {/* Mostrar las piezas con espacio entre ellas */}
      <div className="d-flex flex-column align-items-center mt-3">
        {piezasAleatorias.map((pieza, index) => (
          <div key={index} className="mb-3">  {/* Agrega margen inferior para separación */}
            <Pieza matrizPieza={pieza.matriz} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Juego;
