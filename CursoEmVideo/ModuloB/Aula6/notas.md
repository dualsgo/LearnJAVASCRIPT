/*Q01
O que é uma variável?
*/

- É um espaço reservado na memória para armazenarmos dados

/_ Q02
Como declarar uma variável numérica inteira ou real usando JS?
_/

- Declaramos uma variável inteira com o valor 1 (exemplo) e para real utilizamos o ponto 1.3 (ponto é usado como vírgula na matemática)

/_ Q03
Quais são os tipos primitivos do JS?
_/

- number (infinity e NaN), string, boolean (true e false), null (é considerado object), undefined, object (array) e function

/_ Q04
O que significa colocar o valor null dentro de uma variável?
_/

- Ao atribuir o valor null anulamos a variável

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Manipulação de dados

- o sinal de + também serve para concatenação
- O prompt retorna string
number + number retorna uma adição
string + string retorna concatenação
- Para converter string para number usamos:
parseInt(n) para número inteiro
parseFloat(n) para número real/decimal
Number(n) o JS irá identificar automaticamente
- Para converter number para string usamos:
String(n)
n.toString()
- template string
utilizamos o placeholder entre crases dessa forma para concatenar strings `${variavel}`

Lidando com strings:

.length // quantos caracteres a string tem
.toUpperCase() // Transforma em maiúscula
.toLowerCase() // Transforma em minúscula

Lidando com números:

> var n1 = 1545.5 // Declarando a variavel

> n1 // chamando a variavel
1545.5 // retorno do valor que foi atribuido

> n1.toFixed(2) // para fixar as casas decimais
'1545.50' // exibe com duas casas decimais
> n1.toFixed(2).replace('.',',') // alem disso troca . pela ,

'1545,50'

> n1.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'
}) // atributos para mostrar em valor monetário

'R$ 1.545,50'

> n1.toLocaleString('pt-BR',{style: 'currency', currency: 'USD'
}) // atributos para mostrar em valor monetário

'US$ 1,545,50'


