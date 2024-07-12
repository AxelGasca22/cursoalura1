
let intentos;
let numeroSecreto;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    console.log(numeroSecreto);
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor')
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    } else{
         //Si el numero generado está incluido en la lista
         if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //Recursividad
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiamos la caja.
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    condicionesIniciales();
    //generar el número aleatorio
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    //Deshabilitar el boton de nuevo Juego

    //inicializar el número de intentos.  
    
}


console.log(numeroSecreto);

condicionesIniciales();



/*************************************************************************/

// function promedio(numero1,numero2,numero3){
//     let media= (numero1 + numero2 + numero3) / 3;
//     console.log(`Hola ${media}`);
// }

// promedio(5,2,3);