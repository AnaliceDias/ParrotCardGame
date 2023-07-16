const figurinhas = [
    "src/figurinhas/metalparrot.gif",
    "src/figurinhas/bobrossparrot.gif",
    "src/figurinhas/explodyparrot.gif",
    "src/figurinhas/fiestaparrot.gif",
    "src/figurinhas/revertitparrot.gif",
    "src/figurinhas/tripletsparrot.gif",
    "src/figurinhas/unicornparrot.gif",
];
const verso = "src/verso.png"
const cartasDoJogo = [];
for (i =0 ; i < figurinhas.length; i++) {
    console.log(figurinhas[i])
    cartasDoJogo.push(
        `<div class="carta" onclick="mostrarCarta(this, ${i})" data-identifier="card" >
    <div class="frente face" data-identifier="back-face">
        <img src=${verso}>
    </div>
    <div class="verso face" data-identifier="front-face">
        <img src=${figurinhas[i]}>
    </div>
    </div> `)
}

let cartasUsadas = [];
let numeroDeCartas = 0;
let permitirJogada = true;
let contadorDeCliquePorJogada = 0;
let cartasClicadas = [];
let referenciasDasCartasClicadas = [];
let contadorDeJogadas=0;
let contadorDeAcertos=0;

function comparador() { 
	return Math.random() - 0.5; 
}

function fimDeJogo(){
    let numeroDePares=numeroDeCartas/2;
    
    if(contadorDeAcertos=== numeroDePares){
        let r = alert(`Você ganhou em ${contadorDeJogadas} jogadas!`);
        location.reload();
    }
    else{
        return;
    }
    
}

function validarPar(carta1,referenciaCarta1, carta2,referenciaCarta2){
    contadorDeJogadas++;

    if(carta1===carta2){
        contadorDeCliquePorJogada=0;
        permitirJogada = true;
        return;
    }
    else if(referenciaCarta1===referenciaCarta2){
        carta1.classList.add("encontrouOPar");
        carta2.classList.add("encontrouOPar");
        contadorDeAcertos++;
    }else{
        carta1.classList.remove("virada");
        carta2.classList.remove("virada");   
    } 

    cartasClicadas=[];
    referenciasDasCartasClicadas=[];
    contadorDeCliquePorJogada=0;
    permitirJogada = true;
    fimDeJogo();
    
}

function mostrarCarta(carta, referenciaDoPar){
    let classesDaCarta = carta.classList;

    for (let i = 0; i< classesDaCarta.length; i++){
        if(classesDaCarta[i]==="encontrouOPar" || classesDaCarta[i]==="virada"){
            return;
        }
    }

    cartasClicadas.push(carta);
    referenciasDasCartasClicadas.push(referenciaDoPar);
    contadorDeCliquePorJogada++;
    
    if ((contadorDeCliquePorJogada<2) && (permitirJogada===true)){
        carta.classList.toggle("virada");
        
    }else if((contadorDeCliquePorJogada===2) && (permitirJogada===true)){
        carta.classList.toggle("virada");
        permitirJogada = false;
        setTimeout(()=>{
            validarPar(cartasClicadas[0], referenciasDasCartasClicadas[0], cartasClicadas[1], referenciasDasCartasClicadas[1]);
        } , 1000)        
    }
    
}
    
function adicionarCartasATela(cartasUsadas){
    let main = document.querySelector("main");

    for(let i = 0; i< cartasUsadas.length; i++){
        main.innerHTML=main.innerHTML + cartasUsadas[i];
    }
}

function embaralharCartas(numeroDePares){
    cartasDoJogo.sort(comparador);
    
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
    numeroDeCartas = parseInt(numeroDeCartas);

    if (((numeroDeCartas%2)===0) && (numeroDeCartas >= 4) && (numeroDeCartas<=14)){
        numeroDeCartas =  parseInt(numeroDeCartas);
        embaralharCartas((numeroDeCartas/2));
        return;
    }
    else{
        iniciarJogo();
    }     
}

iniciarJogo();

