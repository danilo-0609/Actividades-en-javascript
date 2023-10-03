const readline = require('readline-sync');

console.log("Bienvenido a la calculadora de perimetros y areas de figuras planas.");
console.log("Digite 1 si quiere calcular el perimetro y area de un triangulo.");
console.log("Digite 2 si quiere calcular el perimetro y area de un rectangulo.");
console.log("Digite 3 si quiere calcular el perimetro y area de un cuadrado.");
console.log("Digite 4 si quiere calcular el perimetro y area de un circulo.");
console.log("......................................................................");

let volverALaCalculadora = "y";

while (volverALaCalculadora.toLowerCase() === "y") {
    let eleccion;

    do {
        eleccion = parseInt(readline.question("Digite un numero del 1 al 4 para calcular el perimetro y area de la figura que escogio: "));
    } while (isNaN(eleccion) || eleccion < 1 || eleccion > 4);

    if (eleccion === 1) {
        console.log("Digite la base del triangulo: ");
        let baseDelTriangulo = parseFloat(readline.question());
        console.log("Digite la altura del triangulo: ");
        let alturaDelTriangulo = parseFloat(readline.question());
        console.log("Digite el total del lado a (hipotenusa del primer triangulo) del triangulo: ");
        let ladoA = parseFloat(readline.question());
        console.log("Digite el total del lado c (hipotenusa del segundo triangulo) del triangulo: ");
        let ladoC = parseFloat(readline.question());

        let perimetro = ladoA + baseDelTriangulo + ladoC;
        let area = (baseDelTriangulo * alturaDelTriangulo) / 2;

        console.log("Perimetro del triangulo: " + perimetro);
        console.log("Area del triangulo: " + area);
        
        volverALaCalculadora = readline.question("¿Volver a la calculadora (y/n)?: ").toLowerCase();
        
        if (!isYesOrNo(volverALaCalculadora)) {
            console.log("Introduzca solo 'y' o 'n' para continuar (y) o salir (n).");
            volverALaCalculadora = readline.question().toLowerCase();
        }
    } else if (eleccion === 2) {
        console.log("Digite la base del rectangulo: ");
        let baseDelRectangulo = parseFloat(readline.question());
        console.log("Digite la altura del rectangulo: ");
        let alturaDelRectangulo = parseFloat(readline.question());

        let perimetro = 2 * (baseDelRectangulo * alturaDelRectangulo);
        let area = baseDelRectangulo * alturaDelRectangulo;

        console.log("Perimetro del rectangulo: " + perimetro);
        console.log("Area del rectangulo: " + area);

        volverALaCalculadora = readline.question("¿Volver a la calculadora (y/n)?: ").toLowerCase();

        if (!isYesOrNo(volverALaCalculadora)) {
            console.log("Introduzca solo 'y' o 'n' para continuar (y) o salir (n).");
            volverALaCalculadora = readline.question().toLowerCase();
        }
    } else if (eleccion === 3) {
        console.log("Digite el total del lado del cuadrado: ");
        let ladoCuadrado = parseFloat(readline.question());

        let perimetro = 4 * ladoCuadrado;
        let area = Math.pow(ladoCuadrado, 2);

        console.log("Perimetro del cuadrado: " + perimetro);
        console.log("Area del cuadrado: " + area);

        volverALaCalculadora = readline.question("¿Volver a la calculadora (y/n)?: ").toLowerCase();

        if (!isYesOrNo(volverALaCalculadora)) {
            console.log("Introduzca solo 'y' o 'n' para continuar (y) o salir (n).");
            volverALaCalculadora = readline.question().toLowerCase();
        }
    } else if (eleccion === 4) {
        console.log("Digite el total del radio del circulo: ");
        let radio = parseFloat(readline.question());

        let perimetro = 2 * Math.PI * radio;
        let area = Math.PI * Math.pow(radio, 2);

        console.log("Perimetro del circulo: " + perimetro);
        console.log("Area del circulo: " + area);

        volverALaCalculadora = readline.question("¿Volver a la calculadora (y/n)?: ").toLowerCase();

        if (!isYesOrNo(volverALaCalculadora)) {
            console.log("Introduzca solo 'y' o 'n' para continuar (y) o salir (n).");
            volverALaCalculadora = readline.question().toLowerCase();
        }
    } 
}

    console.log("¡Gracias por usar el programa!");

function isYesOrNo(s) {
    s = s.toLowerCase();
    if (s === "y") {
        return true;
    }
    if (s === "n"){
        return true;
    }
    
    return false;
}


