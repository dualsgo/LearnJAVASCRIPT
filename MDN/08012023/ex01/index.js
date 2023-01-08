const para = document.querySelector("p");
//Criou uma variável e atribui a ela o elemento p
para.addEventListener("click", atualizarNome);
//um observador de eventos aguarda um clique para ser ativado e ativa a função atualizarNome

function atualizarNome() {
  var nome = prompt("Insira um novo nome");
  para.textContent = "Jogador 1: " + nome;
}
//A função atualizarNome é ativada como o evento de click, acionando um campo para entrada de valor pelo usuario. Ela cria uma variável que recebe o valor atribuido pelo usuario ao preencher o campo. Apos isso a variavel tem seu texto mudado para o valor que lhe foi atribuido pelo usuario