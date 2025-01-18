import React from "react";

export function VistaRanking() {
  return (
    <div id="partidas" className="m-5 p-5 bg-dark">
      <h2 className="text-center text-light">Ranking</h2>
      <table className="table table-dark align-middle">
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
              <img src="/img/avatar1.png" alt="Avatar 1" className="img-fluid" />
            </td>
            <td>ANDER</td>
            <td>1255</td>
          </tr>
          <tr>
            <td className="fs-2">2</td>
            <td>
              <img src="/img/avatar2.png" alt="Avatar 2" className="img-fluid" />
            </td>
            <td>ANDER</td>
            <td>1200</td>
          </tr>
          <tr>
            <td className="fs-2">3</td>
            <td>
              <img src="/img/avatar3.png" alt="Avatar 3" className="img-fluid" />
            </td>
            <td>ANDER</td>
            <td>1150</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default VistaRanking;
