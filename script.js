let num_cartas;
//let a = false;


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
pares[0]= document.querySelector(".par_1");
pares[1]= document.querySelector(".par_2");
pares[2]= document.querySelector(".par_3");
pares[3]= document.querySelector(".par_4");
pares[4]= document.querySelector(".par_5");
pares[5]= document.querySelector(".par_6");
pares[6]= document.querySelector(".par_7");

pares.sort(comparador); //Sorteia os conteúdos dentro do array "pares"

function cartas_na_mesa(a){
    for(let i =0; i<a; i++){
      pares[i].classList.remove("invisivel");  
    }
}

cartas_na_mesa(num_cartas);


//=================================================================================================================

function comparador() { 
	return Math.random() - 0.5; 
}
