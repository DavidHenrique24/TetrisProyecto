import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VistaPartidas from "./vistas/VistaPartidas.jsx";
import VistaRanking from "./vistas/VistaRanking.jsx";
import Menu from "./vistas/Menu.jsx";
import VistaJuego from "./vistas/VistaJuego.jsx";
import VistaInicio from "./vistas/VistaInicio.jsx";


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<VistaInicio/>} />
        <Route path="/juego" element={<VistaJuego />} />
        <Route path="/partidas" element={<VistaPartidas />} />
        <Route path="/ranking" element={<VistaRanking />} />
      </Routes>
    </Router>
  );
}

export default App;
