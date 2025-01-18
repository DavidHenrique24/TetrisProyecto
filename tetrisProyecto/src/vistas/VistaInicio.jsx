import React from "react";
import { Link } from "react-router-dom";

export function VistaInicio() {
  return (
    <div className="text-light">
      <header className="d-flex align-items-center justify-content-center">
        <img src="/img/logo.png" alt="logo" width="200" className="mt-5" />
      </header>
      <main className="container mt-5 bg-opacity-50 bg-dark p-2">
        <div id="intro" className="text-center p-5">
          <p>
            Tetris es un videojuego de tipo rompecabezas. Fue inventado por el
            ingeniero informático ruso Aleksei Pázhitnov en 1984, mientras
            trabajaba en la Academia de Ciencias de Moscú.
          </p>
          <h2>Instrucciones:</h2>
          <p>Puedes mover las piezas usando las flechas izquierda y derecha</p>
          <p>Con la flecha hacia abajo puedes girar la pieza</p>
          <p>
            <strong>Ñ</strong> para cambiar la pieza actual por la pieza que
            está a punto de salir (que puedes ver en la columna de la derecha)
          </p>
          <p>
            Al final de la partida podrás guardar tu puntuación, y ver el
            ranking de jugadores
          </p>
          <Link to="/juego">
            <button className="btn btn-success fs-1 mt-5">JUGAR</button>
          </Link>
          <hr />
        </div>
      </main>
    </div>
  );
}

export default VistaInicio;
