import React from "react";

export function VistaRanking() {
  return (
    <>
      <div>
        <header className="d-flex align-items-center justify-content-center">
          <h1 className="mt-5 text-center text-light">Ranking</h1>
        </header>
      </div>
      <div id="partidas" className="container mt-5 bg-opacity-50 bg-dark p-2">
        <table className="table table-dark align-middle mt-5">
          <thead>
            <tr className="bg-dark">
              <th>#</th>
              <th>Avatar</th>
              <th>Nombre</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fs-2">1</td>
              <td>
                <img
                  src="/img/avatar1.png"
                  alt="Avatar 1"
                  className="img-fluid"
                />
              </td>
              <td>ANDER</td>
              <td>1255</td>
            </tr>
            <tr>
              <td className="fs-2">2</td>
              <td>
                <img
                  src="/img/avatar2.png"
                  alt="Avatar 2"
                  className="img-fluid"
                />
              </td>
              <td>ANDER</td>
              <td>1200</td>
            </tr>
            <tr>
              <td className="fs-2">3</td>
              <td>
                <img
                  src="/img/avatar3.png"
                  alt="Avatar 3"
                  className="img-fluid"
                />
              </td>
              <td>ANDER</td>
              <td>1150</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default VistaRanking;
