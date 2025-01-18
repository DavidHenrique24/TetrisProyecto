import React from "react";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/img/logo.png"
            alt="Logo Tetris"
            width="40"
            height="40"
            className="me-2"
          />
          Tetris
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/partidas">Partidas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ranking">Ranking</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
