console.log("Bienvenido al ordenador de vectores");
console.log("A continuación, vas a rellenar dos vectores con 5 números ordenados ascendentemente cada uno.");
console.log("-----------------------------------------------------------------------------");

const readline = require('readline-sync');

let primerVector = [];
let segundoVector = [];

console.log("Ingresa cinco numeros al primer vector.")
for (let i = 0; i < 5; i++) {
    let numero;

    do {
        numero = parseInt(readline.question(`Ingresa el numero ${i + 1}: `));

        if (i > 0 && numero <= primerVector[i - 1]) {
            console.log("El numero debe ser mayor que el anterior. Intentalo de nuevo.");
        } 
        else {
            primerVector.push(numero);
        }

    } while (isNaN(numero) || (i > 0 && numero <= primerVector[i - 1]));
}

console.log("-----------------------------------------------------------------------------");
console.log("Ahora, ingresa cinco numeros al segundo vector.")

for (let i = 0; i < 5; i++) {
    let numero;

    do {
        numero = parseInt(readline.question(`Ingresa el numero ${i + 1}: `));

        if (i > 0 && numero <= segundoVector[i - 1]) {
            console.log("El numero debe ser mayor que el anterior. Intentalo de nuevo.");
        } 
        else {
            segundoVector.push(numero);
        }
    } while (isNaN(numero) || (i > 0 && numero <= segundoVector[i - 1]));
}

console.log("-----------------------------------------------------------------------------");

const vectoresCombinados = primerVector.concat(segundoVector).sort((a, b) => a - b);

console.log("Vectores combinados: " + vectoresCombinados);
console.log("¡Gracias por usar el programa!");

//Para correr el programa, por favor, digita npm run start, en la linea de comandos
//de powershell o cmd.


