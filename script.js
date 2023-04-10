// Seleciona os elementos HTML necessários
const numbers = document.querySelectorAll('.number');
const scoreElement = document.getElementById('score');
const messageElement = document.querySelector('.message');

// Inicializa as variáveis necessárias
let score = 0;
let selectedNumbers = [];

// Função que verifica se a soma dos números selecionados é igual a 10
function checkSum() {
  const sum = selectedNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum === 10;
}

// Função que atualiza a mensagem final de acordo com o número de acertos
function updateMessage() {
  if (score === 3) {
    messageElement.textContent = 'Parabéns! Você acertou 3 vezes!';
  } else {
    messageElement.textContent = `Acertos: ${score}`;
  }
}

// Adiciona um listener de click para cada número
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    // Verifica se o número já foi selecionado
    if (selectedNumbers.includes(Number(number.dataset.value))) {
      // Remove o número da lista de selecionados
      selectedNumbers = selectedNumbers.filter((selectedNumber) => selectedNumber !== Number(number.dataset.value));
      // Remove a classe "selected" do número
      number.classList.remove('selected');
    } else {
      // Adiciona o número à lista de selecionados
      selectedNumbers.push(Number(number.dataset.value));
      // Adiciona a classe "selected" ao número
      number.classList.add('selected');
    }

    // Verifica se a soma dos números selecionados é igual a 10
    if (checkSum()) {
      // Incrementa o score e atualiza a mensagem final
      score++;
      updateMessage();
      // Reseta a lista de números selecionados e remove a classe "selected" de todos os números
      selectedNumbers = [];
      numbers.forEach((number) => number.classList.remove('selected'));
    }
  });
});
