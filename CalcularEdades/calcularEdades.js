console.log("Bienvenido al calculador de edades.");
console.log("A continuación, por favor, digita 5 edades de 5 personas distintas, para calcular sus edades de acuerdo a ciertos parámetros.");
console.log("--------------------------------------------------");

const readline = require('readline-sync');
const edades = [];
let contador = 1;
let edad;

    do {
        edad = parseInt(readline.question("Digita la edad de la " + contador + " persona: "));
        if(edad > 120){
            console.log("No puedes colocar una edad tan alta. Pon una edad más baja");
            edad = parseInt(readline.question("Digita la edad de la " + contador + " persona: ")); 
            
            if (edad < 120) {
                edades.push(edad);
                contador++;
            }
        } 
        else { 
            edades.push(edad);
            contador++;
        }
    } while (isNaN(edad) || edad < 0 || edad > 120 || edades.length < 5);

    const menoresDeEdad = [];
    const mayoresDeEdad = [];

    edades.forEach(edad => {
        if (edad < 18) {
        menoresDeEdad.push(edad);
        }

        if (edad >= 18) {
        mayoresDeEdad.push(edad);
        }
    });


    let menorDeLaLista = Math.min(...edades);
    let mayorDeLaLista = Math.max(...edades);

    let adultosMayores = edades.filter(edad => edad >= 60);

    let sumaDeEdades = 0;
    edades.forEach(edad => sumaDeEdades = sumaDeEdades + edad);
    let promedioDeEdad = sumaDeEdades / edades.length;

    console.log("--------------------------------------------------");

    console.log("Menor de la lista: " + menorDeLaLista);
    console.log("Mayor de la lista: " + mayorDeLaLista);
    console.log("Adultos mayores: " + adultosMayores.length);
    console.log("Mayores de edad: " + mayoresDeEdad.length);
    console.log("Menores de edad: " + menoresDeEdad.length);
    console.log("Promedio de edad: " + promedioDeEdad);


console.log("--------------------------------------------------");
console.log("¡Gracias por usar el programa!");
console.log("--------------------------------------------------");

//Para correr el programa, por favor, digita npm run start, en la linea de comandos
//de powershell o cmd.


