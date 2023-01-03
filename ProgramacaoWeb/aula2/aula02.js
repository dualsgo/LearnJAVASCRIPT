// Selecionando o elemento desejado pelo seu ID. Há outras formas, como NOME, CLASSE, TAG e etc
document.getElementById("inner").innerHTML =
  "Adicionando conteúdo através do JS com .innerHTML";
// .innerHTML = 'CONTEÚDO' é a sintaxe para esse tipo de saída

// Selecionando pelo seletor
document.querySelector('div#caixa').innerHTML = 'Teste!'
//document.querySelector('SELETOR') é a sintaxe para esse tipo de saída


// Adicionando direto no documento
document.write("Adicionando conteúdo através do JS com document.write()");
// document.write('CONTEÚDO') é a sintaxe para esse tipo de saída

alert("Essa maneira mostra uma caixa com um botão OK");
confirm("Essa maneira mostra um botão OK e CANCEL");
console.log("Essa maneira mostra as informações de forma silenciosa");
