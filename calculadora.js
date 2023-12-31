// Calculadora inteligente

// Funciones de la calculadora

// Operacion sumar
function sumar(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

// Operacion restar
function restar(valor1, valor2) {
    const resultado = valor1 - valor2;
    return resultado;
}

// Operacion dividir
function dividir(valor1, valor2) {
    const resultado = valor1 / valor2;
    return resultado;
}

// Operacion multiplicar
function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}

// Paso 1. Que se abra la calculadora tocando un boton
// Paso 2. Dar la bienvenida a la calculadora mediante un alert
// Paso 3. Que nos pida por prompt los dos valores que queremos calcular
// Paso 4. Elegir por prompt la operacion a realizar (sumar, restar, multiplicar, dividir)
// Paso 5. Agregar un default por si la operacion es invalida

function calculadora() {
    alert("¡Te damos la bienvenida a la calculadora inteligente!");
    const valor1 = parseInt(prompt("Ingrese el primer valor:"));
    const valor2 = parseInt(prompt("Ingrese el segundo valor:"));
    const operacion = prompt("¿Que operacion queres hacer? (+ - * /)");

    switch (operacion) {
        case "+":
            alert("El resultado de la suma es " + sumar(valor1, valor2));
            break;

        case "-":
            alert("El resultado de la resta es " + resta(valor1, valor2));
            break;

        case "/":
            alert("El resultado de la division es " + dividir(valor1, valor2));
            break;

        case "*":
            alert("El resultado de la multiplicacion es " + multiplicar(valor1, valor2));
            break;
        default:
            alert("La operacion no es valida");
    }
}



