import modeloPieza from "./modeloPieza.js"; // Asegúrate de importar la clase correctamente
import { modelos } from "./modelos.js"; // Importamos el objeto modelos para acceder a las piezas

export function nuevaPieza() {
  // Generar un número aleatorio entre 0 y la longitud del array de piezas
  const numeroAleatorio = Math.floor(Math.random() * modelos.piezas.length);

  // Obtener el nombre y la matriz de la pieza aleatoria seleccionada
  const nombre = modelos.piezas[numeroAleatorio].nombre;
  const matriz = modelos.piezas[numeroAleatorio].matriz[0]; // Seleccionamos la primera rotación

  // Crear una nueva instancia de modeloPieza con el número aleatorio y un ángulo inicial de 0
  return new modeloPieza(numeroAleatorio, nombre, 0, 0, 0, matriz);
}
