// alert("Teste!!");


var largura = 0;
var altura = 0;
var vidas = 1;
var tempo = 10;

var criarMosquitoTempo;


var nivel = window.location.search;


nivel = nivel.replace("?", "");


// alert(nivel);


if ( nivel === "normal" ) {

	// 1500
	criarMosquitoTempo = 1500;

} else if ( nivel === "dificil ") {

	// 1000
	criarMosquitoTempo = 1000;

} else if ( nivel === "extra" ) {

	// 750
	criarMosquitoTempo = 750;

}


function ajustarTamanhoPalcoJogo() {


	largura = window.innerWidth;
	altura = window.innerHeight;


	// console.log(largura, altura);

}


ajustarTamanhoPalcoJogo();


var cronometro = setInterval(function() {

	tempo--;

	if ( tempo < 0 ) {

		clearInterval(cronometro);
		clearInterval(criarMosquito);

		window.location.href= "vitoria.html";

	} else {

		document.getElementById("cronometro").innerHTML = tempo;

	}

	

}, 1000); 




function posicaoRandomica() {


	// Remover o mosquito anterior (caso exista)
	if ( document.getElementById("mosquito") ) {

		document.getElementById("mosquito").remove()


		// console.log("Selecionado: v" + vidas);

		if ( vidas > 3 ) {

			window.location.href= "fim_de_jogo.html";
		}

		document.getElementById("v" + vidas).src= "img/coracao_vazio.png";

		vidas++;

	} 
	


	var posicaoX = Math.floor(Math.random() * largura) - 90;
	var posicaoY = Math.floor(Math.random() * altura) - 90;


	posicaoX = posicaoX < 0 ? 0 : posicaoX;

	posicaoY = posicaoY < 0 ? 0 : posicaoY;


	console.log(posicaoX, posicaoY);


	// Criando o elemento html
	var mosquito = document.createElement("img");

	mosquito.src = "img/mosquito.png";
	mosquito.className = tamanhoAleatorio() + " " +ladoAleatorio();
	mosquito.style.left = posicaoX + "px";
	mosquito.style.top = posicaoY + "px";
	mosquito.style.position = "absolute";
	mosquito.id = "mosquito";
	mosquito.onclick = function() {

		this.remove();
	}



	document.body.appendChild(mosquito);


	// console.log (tamanhoAleatorio());

	console.log (ladoAleatorio());


}



function tamanhoAleatorio() {

	var classe = Math.floor(Math.random() * 3);


	switch ( classe ) {

		case 0: return "mosquito1";

		case 1: return "mosquito2";

		case 2: return "mosquito3";


	} 


}



function ladoAleatorio() {

	var classe = Math.floor(Math.random() * 2);


	switch ( classe ) {

		case 0: return "ladoA";

		case 1: return "ladoB";


	} 

}



function iniciarJogo() {


	var nivel = document.getElementById("nivel").value

	// alert(nivel);


	if ( nivel === "" ) {

		alert("Selecione um nível para iniciar o jogo");

		return false;		

	}

	

	window.location.href="app.html?" + nivel;



}