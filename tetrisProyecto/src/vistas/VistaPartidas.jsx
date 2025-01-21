import React from "react";
import TablaPartidas from "../componentes/TablasPartidas";


export function VistaPartidas() {
  return (
    <div className="text-light">
      <header className="d-flex align-items-center justify-content-center">
        <h1 className="mt-5">Partidas</h1>
      </header>
      <main className="container mt-5 bg-opacity-50 bg-dark p-2">
        <TablaPartidas />
      </main>
    </div>
  );
}

export default VistaPartidas;
