/_ Q01
Como é possível guardar o valor digitado em um prompt() dentro de uma variável?_/

- Declarando uma variável que receberá o valor fornecido pelo usuário
  var exemplo = prompt('valor')

/_ Q02
Como fazer com que um número digitado em um prompt() possa ser usado em cálculos?_/

- Como o prompt() retorna sempre uma string, precisamos converter para number utilizando Number(n).

var n1 = Number(prompt('Número));
var n2 = Number(prompt('Outro número'));

var soma = n1 + n2

Tamém podemos usar parseInt ou parseFloat se quisermos especificamente um tipo de número

/_ Q03
Como transformar um texto todo para letras MAIUSCULAS?_/

- utilizando .toUpperCase()

var nome = prompt('Digite o nome')
document.write(`Seu nome em maiúscula é ${nome.toUpperCase()}`);

/_ Q04
Como mostrar um número formatado como um valor monetário?_/

- Declaramos a variável e manipluamos fixando duas casas decimais, substituimos . por virgula e depois localizamos a string

var n1 = 1545.5

n1.toFixed(2).replace('.',',')
n1.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

OPERADORES DO JS

Operadores aritiméticos

+ adição
* subtração
- multiplicação
  / divisão real
  % divisão inteira | resto |
  ** exponenciação

5+2=7
5-2=3
5\*2=10
5/2=2.5
5%2=1
5\*\*2=25

PRECEDENCIA DOS OPERADORES

5+3/2
5+1.5
6.5

Ordem de precedencia (Se houver mais de um começar da esquerda para direita)
Parenteses
Potencias
Multiplicação, Divisão
Adição, Subtração

JAVASCRIPT SÓ APRESENTA ERROS DE SINTAXE

var a = 5 + 3 ||||||||||| 8
var b = a % 5 ||||||||||| 3
var c = 5 * b ** 2 |||||| 45
var d = 10 - a / 2 |||||| 6
var e = 6 * 2 / d ||||||| 2
var f = b % e + 4 / e ||| 3

AUTO ATRIBUIÇÃO

var n = 3 atribuição simples
n = n + 4 SIMPLIFICADO n += 4
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5

INCREMENTO

var x = 5
x = x + 1 SIMPLIFICADO x++
x = x - 1 SIMPLIFICADO X--
