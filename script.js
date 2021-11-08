const vazio = [];
let num_cartas;
let conteudo_verso = [];
let conteudos = [
"<div class='par_1 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_1 verso carta_existente'><img src='imagens/papagaio_1.png'></div>",
"<div class='par_1 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_1 verso carta_existente'><img src='imagens/papagaio_1.png'></div>",
"<div class='par_2 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_2 verso carta_existente'><img src='imagens/papagaio_2.png'></div>",
"<div class='par_2 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_2 verso carta_existente'><img src='imagens/papagaio_2.png'></div>",
"<div class='par_3 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_3 verso carta_existente'><img src='imagens/papagaio_3.png'></div>",
"<div class='par_3 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_3 verso carta_existente'><img src='imagens/papagaio_3.png'></div>",
"<div class='par_4 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_4 verso carta_existente'><img src='imagens/papagaio_4.png'></div>",
"<div class='par_4 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_4 verso carta_existente'><img src='imagens/papagaio_4.png'></div>",
"<div class='par_5 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_5 verso carta_existente'><img src='imagens/papagaio_5.png'></div>",
"<div class='par_5 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_5 verso carta_existente'><img src='imagens/papagaio_5.png'></div>",
"<div class='par_6 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_6 verso carta_existente'><img src='imagens/papagaio_6.png'></div>",
"<div class='par_6 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_6 verso carta_existente'><img src='imagens/papagaio_6.png'></div>",
"<div class='par_7 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_7 verso carta_existente'><img src='imagens/papagaio_7.png'></div>",
"<div class='par_7 frente carta_existente'><img src='imagens/front 1.png'></div><div class='par_7 verso carta_existente'><img src='imagens/papagaio_7.png'></div>",
];



//Coleta o número de cartas selecionada pelo jogador
for (let a = false; a == false;){
    num_cartas = prompt("Com quantas cartas deseja jogar? Importante: O número deve ser par! Você pode jogar com no mínimo 4 e no máximo 14 cartas.");
    if ((num_cartas==0)||(num_cartas===null)||((num_cartas%2) !== 0)||(num_cartas<4)) {
        num_cartas = prompt("Com quantas cartas deseja jogar? Importante: O número deve ser par! Você pode jogar com no mínimo 4 e no máximo 14 cartas.");
    } else {
        a = true;
    }
}

const pares = [];
pares[0]= document.querySelector(".carta_1");
pares[1]= document.querySelector(".carta_2");
pares[2]= document.querySelector(".carta_3");
pares[3]= document.querySelector(".carta_4");
pares[4]= document.querySelector(".carta_5");
pares[5]= document.querySelector(".carta_6");
pares[6]= document.querySelector(".carta_7");
pares[7]= document.querySelector(".carta_8");
pares[8]= document.querySelector(".carta_9");
pares[9]= document.querySelector(".carta_10");
pares[10]= document.querySelector(".carta_11");
pares[11]= document.querySelector(".carta_12");
pares[12]= document.querySelector(".carta_13");
pares[13]= document.querySelector(".carta_14");

//pares.sort(comparador); //Sorteia os conteúdos dentro do array "pares"

function cartas_na_mesa(b){
    conteudo_verso = vazio;
    for (let i =0; i<b; i++){
        conteudo_verso[i]=conteudos[i];
    }
    conteudo_verso.sort(comparador);
    
    for(let i =0; i<b; i++){
      //pares[i].classList.add("carta_existente");
      pares[i].innerHTML=conteudo_verso[i];  
    }
}

cartas_na_mesa(num_cartas);


//=================================================================================================================

function comparador() { 
	return Math.random() - 0.5; 
}
