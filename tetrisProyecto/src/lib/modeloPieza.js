class modeloPieza {
    constructor(numero, nombre, angulo, fila, columna, matriz) {
        this.numero = numero;
        this.nombre = nombre;
        this.angulo = angulo;
        this.fila = fila;
        this.columna = columna;
        this.matriz = matriz;
    }
    
    girar() {
        this.angulo = 0       

            if (this.angulo == 3){
                this.angulo = 0                
            }else{
                this.angulo = this.angulo + 1
                
            }
    }
}

export default modeloPieza