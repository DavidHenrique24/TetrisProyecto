import React from "react";

export function VistaJuego() {
  return (
    <div className="text-light">
      <header className="d-flex align-items-center justify-content-center">
        <h1>Juego en progreso</h1>
      </header>
      <main className="container mt-5 bg-opacity-50 bg-dark p-2">
        <p>Piezas en movimiento...</p>
      </main>
    </div>
  );
}

export default VistaJuego;
