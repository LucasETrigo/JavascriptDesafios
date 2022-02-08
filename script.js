// Calcula el valor de las cuotas segun el precio del producto y la cantidad de cuotas en que lo quiere pagar.

const unaCuota = (num1) => num1;
const tresCuotas = (num1, num2) => (num1 * 1.15) / num2;
const seisCuotas = (num1, num2) => (num1 * 1.3) / num2;
const nueveCuotas = (num1, num2) => (num1 * 1.4) / num2;
const doceCuotas = (num1, num2) => (num1 * 1.5) / num2;


function cuotasPagar(precio, cuota) {
    if(cuota == 1) {
        console.log(unaCuota(precio, cuota));
    } else if(cuota == 3) {
        console.log(tresCuotas(precio, cuota));
    } else if(cuota == 6) {
        console.log(seisCuotas(precio, cuota));
    } else if(cuota == 9) {
        console.log(nueveCuotas(precio, cuota));
    } else if(cuota == 12) {
        console.log(doceCuotas(precio, cuota));
    } else {
        console.log("Ingrese una cuota valida para saber el precio a pagar.");
    }
}


let precio = parseFloat(prompt("Cual es el valor del producto?"));
let cuota = parseInt(prompt("En cuantas cuotas quiere pagarlo? (1, 3, 6, 9 o 12)"));


cuotasPagar(precio, cuota);