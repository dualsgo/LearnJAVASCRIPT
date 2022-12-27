/_ Q01
Para que serve o operador % em JS? Seria para calcular porcentagem?_/

- Serve para encontrar o resto da divisão. 

/_ Q02
6+4/2 é igual a 5 ou 8?_/

- É 8 pois pela ordem de precedencia fazemos primeiro a divisão e depois a adição
6 + (4/2)
6 + 2
8

/_ Q03
Se uma variavel n esta valendo 10 e executamos um n+=5, qual sera seu novo valor?_/

n começa com valor 10 e recebe o incremento de 5 se tornando 15

n = 10
10 + 5
n = 15

/_ Q04
Para que servem os peradores ++ e --?_/

- São operadore de incremento e decremento
São o mesmpo que n = n + 1 ou n+=1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

OPERADORES DO JS

Relacionais

> maior que
< menor que
>= maior ou igual
<= menor ou igual
== igual
!= não igual/diferente

5 > 2 true
7 < 4 false
8 >= 8 true
9 <= 7 false
5 == 5 true (igual valor/grandeza)
4 != false   

=== igualdade restrita/identico (valor e tipo)

LÓGICOS

! negação
$$ e conjulção
|| ou disjunção


!true = false - não verdadeiro é falso
!false = true - não falso é verdadeiro


&& um e outro precisam ser verdadeiros

true && true - true
true && false - false
false && false - false
false && true - false

|| um OU outro precisa ser verdadeiro

true || true - true
true || false - true
false || false - false
false || true - true


ARITIMETICO (PARENTESES, POTENCIA/MULTI/DIVI, ADICAO E SUB) > RELACIONAL (DA ESQUERDA PARA DIREITA) > LOGICO (NAO/E/OU)


Operador ternário

teste ? true : false