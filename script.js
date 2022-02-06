const cartasDoJogo = [
    `<div class="carta" onclick="mostrarCarta(this, 1)" data-identifier="card" >
    <div class="frente face" data-identifier="back-face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face" data-identifier="front-face">
        <img src="imagens/metalparrot.gif">
    </div>
    </div> `,
    `<div class="carta" onclick="mostrarCarta(this, 2)" data-identifier="card" >
    <div class="frente face" data-identifier="back-face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face" data-identifier="front-face">
        <img src="imagens/bobrossparrot.gif">
    </div>
    </div> `,
    `<div class="carta" onclick="mostrarCarta(this, 3)" data-identifier="card" >
    <div class="frente face" data-identifier="back-face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face" data-identifier="front-face">
        <img src="imagens/explodyparrot.gif">
    </div>
    </div> `,
    `<div class="carta" onclick="mostrarCarta(this, 4)" data-identifier="card" >
    <div class="frente face" data-identifier="back-face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face" data-identifier="front-face">
        <img src="imagens/fiestaparrot.gif">
    </div>
    </div> `,
    `<div class="carta" onclick="mostrarCarta(this, 5)" data-identifier="card" >
    <div class="frente face" data-identifier="back-face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face" data-identifier="front-face">
        <img src="imagens/revertitparrot.gif">
    </div>
    </div> `,
    `<div class="carta" onclick="mostrarCarta(this, 6)" data-identifier="card" >
    <div class="frente face" data-identifier="back-face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face" data-identifier="front-face">
        <img src="imagens/tripletsparrot.gif">
    </div>
    </div> `,
    `<div class="carta" onclick="mostrarCarta(this, 7)" data-identifier="card" >
    <div class="frente face" data-identifier="back-face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face" data-identifier="front-face">
        <img src="imagens/unicornparrot.gif">
    </div>
    </div> `

];

let cartasUsadas = [];
let numeroDeCartas = 0;
let permitirJogada = true;
let contadorDeCliquePorJogada = 0;
let cartasClicadas = [];
let referenciasDasCartasClicadas = [];

function comparador() { 
	return Math.random() - 0.5; 
}

function validarPar(carta1,referenciaCarta1, carta2,referenciaCarta2){
    
    if(referenciaCarta1===referenciaCarta2){
        carta1.classList.add("encontrouOPar");
        carta2.classList.add("encontrouOPar");
    }else{
        carta1.classList.remove("virada");
        carta2.classList.remove("virada");
        //let comando1 = setInterval(comando2, 500);
        //setInterval(carta1.classList.remove("virada"), 500);
        //setInterval(carta2.classList.remove("virada"), 500);
    
        //clearInterval(comando2);
    } 

    cartasClicadas=[];
    referenciasDasCartasClicadas=[];
}
function comando1(){
    permitirJogada = true;
    
}
function mostrarCarta(carta, referenciaDoPar){
    let classesDaCarta = carta.classList;

    for (let i = 0; i< classesDaCarta.length; i++){
        if(classesDaCarta[i]==="encontrouOPar"){
            return;
        }
    }

    cartasClicadas.push(carta);
    referenciasDasCartasClicadas.push(referenciaDoPar);
    contadorDeCliquePorJogada++;
    console.log("contador = "+contadorDeCliquePorJogada)
    
    if ((contadorDeCliquePorJogada<2) && (permitirJogada===true)){
        carta.classList.toggle("virada");
        
    }else if((contadorDeCliquePorJogada===2) && (permitirJogada===true)){
        carta.classList.toggle("virada");
        permitirJogada = false;
        contadorDeCliquePorJogada=0;
        let comando = setInterval(comando1, 1000);
        clearInterval(comando);
        validarPar(cartasClicadas[0], referenciasDasCartasClicadas[0], cartasClicadas[1], referenciasDasCartasClicadas[1]);
        //setTimeout(permitirJogada = true, 1000);
        //setTimeout(contadorDeCliquePorJogada=0, 1000);
        
    }
    else {
        permitirJogada = false;
        //let comando1 = setInterval(`permitirJogada = true`, 1000);
        //let comando2 = setInterval(`contadorDeCliquePorJogada=0`, 1000);
        let comando = setInterval(comando1, 1000);
        clearInterval(comando);
        //clearInterval(comando2);
        validarPar(cartasClicadas[0], referenciasDasCartasClicadas[0], cartasClicadas[1], referenciasDasCartasClicadas[1]);
        //setTimeout(permitirJogada = true, 1000);
        //setTimeout(contadorDeCliquePorJogada=0, 1000);
    }
    
}
    
function adicionarCartasATela(cartasUsadas){
    let main = document.querySelector("main");
    for(let i = 0; i< cartasUsadas.length; i++){
        main.innerHTML=main.innerHTML + cartasUsadas[i];
    }
}

function embaralharCartas(numeroDePares){
    
    for (let i =0; i<numeroDePares; i++){
        cartasUsadas[i]=cartasDoJogo[i];
    }

    for (let i = 0; i< numeroDePares; i++){
        cartasUsadas[i+numeroDePares]=cartasUsadas[i];
    }
    cartasUsadas.sort(comparador);

    adicionarCartasATela(cartasUsadas);
}

function iniciarJogo (){
    numeroDeCartas =  prompt("Com quantas cartas deseja jogar? (Escolhar um número par entre 4 e 14)");

    if (((parseInt(numeroDeCartas)%2)===0) && (parseInt(numeroDeCartas) >= 4) && (parseInt(numeroDeCartas)<=14)){
        console.log("Número de cartas = "+ numeroDeCartas);
        numeroDeCartas =  parseInt(numeroDeCartas);
        embaralharCartas((numeroDeCartas/2));
        return;
    }
    else{
        iniciarJogo();
    }     
}

//===========X Funções executadas na inicialização do programa X===========

iniciarJogo();

