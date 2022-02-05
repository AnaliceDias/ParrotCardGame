const cartasDoJogo = [
    `<div class="carta" onclick="virarCarta(this)">
    <div class="frente face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face">
        <img src="imagens/metalparrot.gif">
    </div>
    </div> `,
    `<div class="carta" onclick="virarCarta(this)">
    <div class="frente face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face">
        <img src="imagens/bobrossparrot.gif">
    </div>
    </div> `,
    `<div class="carta" onclick="virarCarta(this)">
    <div class="frente face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face">
        <img src="imagens/explodyparrot.gif">
    </div>
    </div> `,
    `<div class="carta" onclick="virarCarta(this)">
    <div class="frente face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face">
        <img src="imagens/fiestaparrot.gif">
    </div>
    </div> `,
    `<div class="carta" onclick="virarCarta(this)">
    <div class="frente face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face">
        <img src="imagens/revertitparrot.gif">
    </div>
    </div> `,
    `<div class="carta" onclick="virarCarta(this)">
    <div class="frente face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face">
        <img src="imagens/tripletsparrot.gif">
    </div>
    </div> `,
    `<div class="carta" onclick="virarCarta(this)">
    <div class="frente face">
        <img src="imagens/front.png">
    </div>
    <div class="verso face">
        <img src="imagens/unicornparrot.gif">
    </div>
    </div> `

];

let cartasUsadas = [];
let numeroDeCartas = 0;

function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(carta){
    carta.classList.toggle("virada");

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

