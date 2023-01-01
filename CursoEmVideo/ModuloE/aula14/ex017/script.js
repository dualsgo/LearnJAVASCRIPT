function tabuada() {
//Variaveis de inicio
  let num = document.getElementById("txtn");
  let tab = document.getElementById("selTab");
//Teste para verificar se foi preenchido
  if (num.value.length == 0) {
    window.alert("Por favor, digite um número!");
//Se estiver preenchido
  } else {
    let n = Number(num.value);//recebe o valor da string no input e converte para number
    let c = 1; //variavel de inicio
    tab.innerHTML = ''//limpa os dados do select
    while (c <= 10) {//limita a multiplicação ate 10
      let item = document.createElement("option");//cria o elemento option para cada resultado
      item.text = `${n} x ${c} = ${n * c}`//texto que sera exibido no resultado
      item.value = `tab${c}`;
      tab.appendChild(item);//adiciona o elemento ao final do outro
      c++;
    }
  }
}
