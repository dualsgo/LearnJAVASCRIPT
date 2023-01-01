/* 

let num = [5, 8, 2, 9, 3, 15, 22, 23, 65, 67];
num[5] = 13; // adicionando um valor ao indice 6 que nesse caso nao esta definido
num.push(valor) // metodo push adiciona apos o ultimo indice que agora é o 7
num.sort() // coloca em ordem crescente
console.log(num.length);


for ( let pos = 0; pos < num.length ; pos++){
    console.log(`Posição é ${pos}`)
}
//TESTE LÓGICO PARA O VETOR CHEGAR ATÉ O FINAL DO VETOR

let valores = [8,1,7,4,2,9]
//Formas de fazer
console.log(valores)
//Sem formatação
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
//Forma errada

let valores = [8, 1, 7, 4, 2, 9];

//Tradicional
for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
valores.sort()
//Simplificado
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
*/
///METODO indexOf(valor)

let num = [5, 8, 2, 9, 3];
num.push(1);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O primeiro valor do vetor é ${num[0]}.`);
let pos = num.indexOf(12);

if (pos == -1) {
  console.log("O valor não foi encontrado!");
} else {
  console.log(`O valor 8 está na posição ${pos}.`);
}
