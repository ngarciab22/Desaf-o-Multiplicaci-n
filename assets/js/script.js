// Se crea variable para que el usuario ingrese un número del 1 al 20
let ingresarNum = parseInt(prompt("Ingresa un número del 1 al 20"));
// Función para validar si el número está dentro del rango
const validarNum = (num) => {
    if (num < 1 || num > 20) {
        alert("Número fuera del rango permitido (1 al 20).");
        return false;
    }
    return true;
}
// Función para imprimir en consola la tabla de multiplicación del número dado
const Multiplicacion = (num) => {
    for (let i = 1; i <= num; i++) {
        let resultado = i * num;
        console.log(`${i} x ${num} = ${resultado}`);
    }
}
// Función para calcular y mostrar el factorial
const Factorial = (num) => {
    for (let i = 1; i <= num; i++) {
        let resultado = 1;
        for (let j = 1; j <= i; j++) {
            resultado *= j;
        }
        console.log(`Factorial de ${i} es: ${resultado}`);
    }
}
// // Validar el número ingresado
// let validacion = validarNum(ingresarNum);
// // Si el número es válido, imprimir multiplicación y factorial
// if (validacion) {
//     Multiplicacion(ingresarNum);
//     Factorial(ingresarNum);
// }


