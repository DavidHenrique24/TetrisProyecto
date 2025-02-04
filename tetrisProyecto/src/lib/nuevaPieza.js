import modeloPieza from "./modeloPieza.js";
import { modelos } from "./modelos.js"; 

export function nuevaPieza() {
  const numeroAleatorio = Math.floor(Math.random() * modelos.piezas.length); 
  return new modeloPieza(numeroAleatorio);
}
