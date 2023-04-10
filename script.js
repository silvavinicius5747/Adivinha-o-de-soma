var contador = 0;

function gerarPergunta() {
	var num1 = Math.floor(Math.random() * 9) + 1;
	var num2 = Math.floor(Math.random() * 9) + 1;
	document.getElementById("pergunta").innerHTML = num1 + " + " + num2 + " = ";
	document.getElementById("resposta").value = "";
}

function verificarResposta() {
	var num1 = parseInt(document.getElementById("pergunta").innerHTML.split("+")[0]);
	var num2 = parseInt(document.getElementById("pergunta").innerHTML.split("+")[1]);
	var resposta = parseInt(document.getElementById("resposta").value);
	if (resposta === num1 + num2) {
		alert("Parabéns, você acertou!");
		contador++;
	} else {
		alert("Que pena, você errou. A resposta correta é " + (num1 + num2));
	}
	document.getElementById("contador").innerHTML = "Acertos: " + contador;
	gerarPergunta();
}

gerarPergunta();
document.getElementById("verificar").addEventListener("click", verificarResposta);
