let numeroSecreto;  //Declarar estas variables al principio es una buena práctica en general
let intento;
let listaNumerosSecretos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);  //Primero se define una variable seleccionando el elemento a modificar.
    elementoHTML.innerHTML = texto;  //Con esta propiedad se le asigna el valor correspondiente a la sintaxis del elemento.
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10 + 1);
    console.log(numeroGenerado);
    
    if (listaNumerosSecretos.includes(numeroGenerado)) {
        if (listaNumerosSecretos.length == 10) {
            asignarTextoElemento('p', "Has descubierto todos los números secretos");
            document.getElementById('intentar').setAttribute('disabled', 'true');
        } else {
            return generarNumeroSecreto(); //Se pone return para que no solo ejecute la función sino que también reemplace directamente lo que se haya generado en la función actual por lo que se generará en la nueva función.
        }
    } else {
        listaNumerosSecretos.push(numeroGenerado);  //Con el .push se agrega un elemento al final de la lista. Para elimianr un objeto al final de la lista se utiliza .pop
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('p', "Elige un número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intento = 0;
}

function verificarIntento() {
    let objCajaTexto = document.getElementById('valorUsuario'); //Se selecciona el objeto para almacenarlo en la variable teniendo acceso a sus propiedades.
    let numeroUsuario = parseInt(objCajaTexto.value); //Con el value, agarramos el valor que tendría el objeto almacenado en la variable.
    intento++;

    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p', `Acertaste! El número es: ${numeroSecreto}. Lo lograste en ${intento} ${intento == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        asignarTextoElemento('p', `El número secreto es ${numeroSecreto > numeroUsuario ? 'mayor' : 'menor'}`);
    }

    objCajaTexto.value = '';
}

function reiniciarJuego() {
    document.querySelector('#valorUsuario').value = '';
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
asignarTextoElemento('h1', "Juego del Número Secreto");