import modeloPieza from "./modeloPieza.js";
import { modelos } from "./modelos.js";

export function nuevaPieza() {
  // Generar un número aleatorio entre 0 y la longitud del array de piezas
  const numeroAleatorio = Math.floor(Math.random() * modelos.piezas.length);

  // Obtener el nombre y la matriz de la pieza aleatoria seleccionada
  const piezaAleatoria = modelos.piezas[numeroAleatorio];
  const nombre = piezaAleatoria.nombre;
  const matriz = piezaAleatoria.matriz[0]; // Seleccionamos la primera rotación

  // Generamos una columna aleatoria pero controlando que la pieza no se desborde
  const columnaAleatoria = Math.floor(Math.random() * (10 - matriz[0].length)); 

  // Creamos una nueva pieza
  return new modeloPieza(numeroAleatorio, nombre, 0, 0, columnaAleatoria, matriz);
}
