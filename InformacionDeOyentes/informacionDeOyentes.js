console.log("Bienvenido a tu lista de oyentes");
console.log("A continuación, registra la información de 6 oyentes.");
console.log("-------------------------------------------------------");

const readline = require('readline-sync');

const usuarios = [];

for (let i = 0; i < 2; i++) {
    const usuario = {
        nombre: readline.question("Ingresa el nombre del usuario: "),
        cedula: readline.question("Ingresa tu cedula: "),
        fechaDeNacimiento: readline.question("Ingresa tu fecha de nacimiento: "),
        correoElectronico: readline.question("Ingresa tu correo electronico: "),
        ciudadDeResidencia: readline.question("Ingresa tu ciudad de residencia: "),
        ciudadDeOrigen: readline.question("Ingresa tu ciudad de origen: "),
        artistaMasEscuchado: readline.question("Ingresa el artista que mas escuchas: "),
        cancionesFavoritas: []
    };

    console.log("Ahora, ingresa, por favor, 3 canciones que te gusten mucho, o tus favoritas");

    for (let j = 0; j < 3; j++) {
        const cancion = readline.question(`Ingresa la cancion ${j + 1} de tus canciones favoritas: `);
        usuario.cancionesFavoritas.push(cancion);
    }

    usuarios.push(usuario);
}

console.log("-----------------------------------------------------------------------");
let volverAAverUsuarios = "y";

while (volverAAverUsuarios === "y") {
    let usuarioSeleccionado = -1;

    while (usuarioSeleccionado < 0 || usuarioSeleccionado >= usuarios.length) {
        usuarioSeleccionado = parseInt(readline.question("¿Qué usuario quieres ver? (0-1): "));

        if (isNaN(usuarioSeleccionado) || usuarioSeleccionado < 0 || usuarioSeleccionado >= usuarios.length) {
            console.log("Selecciona solo números entre 0 y 5.");
        }
    }

    console.log("Detalles del usuario seleccionado:");
    console.log(usuarios[usuarioSeleccionado]);

    volverAAverUsuarios = readline.question("¿Quieres ver otro usuario? (y/n): ").toLowerCase();

    if (!isYesOrNo(volverAAverUsuarios)) {
        console.log("Introduzca solo 'y' o 'n' para continuar (y) o salir (n).");
        volverAAverUsuarios = readline.question().toLowerCase();
    }
}

console.log("-----------------------------------------------------------------------");
console.log("¡Gracias por usar el programa!");

function isYesOrNo(s) {
    s = s.toLowerCase();
    return s === "y" || s === "n";
}








