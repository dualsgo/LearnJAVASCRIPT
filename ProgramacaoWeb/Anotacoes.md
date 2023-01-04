# JavaScript - Introdução Canal Programação WEB

- JS adiciona interações aos sites.
- Está atrelado aos documentos HTML e CSS.
- Pode ser usado internamente no documento HTML usando as tags <script>Conteúdo JS</script>, ou externamente em arquivo separado com extensão .js,sendo este vinculado ao documento HTML por meio do atributo "src" na tag script <script src="arquivo.js">.
- Referenciamos o JavaScript no final do documento HTML, antes do fechamento da tag body pois o documento é lido de cima para baixo pelo computador, sendo assim as interações JavaScript precisam que os códigos HTML sejam carregados primeiro.


<html>
<head></head>
<body>
// O conteúdo HTML fica aqui.
<script src="arquivo.js">
// Fechamento do body e html
</body> 
</html>

## Tipos de Saída
 
- Método de seleção document.getElementById("id") para identificar o elemento pelo seu id único
- Método de saída .innerHTML = "Conteúdo" para inserir a informação no HTML através de um comando JS.

- // document.getElementById("id").innerHTML = "Conteúdo"

- Método document.write("Conteúdo") tem a mesma função e pode ser inserido direto no documento HTML nas tags <script>document.write("Adicionando conteúdo ao documento HTML através de um comando JavaScript.")</script>.

- alert("Texto que deseja exibir.") Exibe uma caixa modal com a saída desejada.
- console.log("Texto que dejeja exibir.") Exibe os dados no painel de desenvolvedor do navegador.

## Declarações

- São as intruções passadas ao computador.
- Sintaxe é a maneira como o código deve ser escrito.
- Tornar hábito o uso de ponto e vírgula ; ao final de cada declaração, pois isso indica o final de cada uma.
- JavaScript ignora espaços em branco nas declarações de códigos (Exceto em valores passados no tipo string) e aceita quebras de linha antes da terminação da declaração.

- // var nome = "Maycon" funciona da mesma forma que var nome="Maycon"

- // var nomeCompleto = "Maycon Douglas Barros da Silva" funciona assim como
var nomeCompleto = "Maycon
Douglas Barros
da
Silva"

- JavaScript aceita blocos de código/declarações indicadas entre chaves {}.

function minhhaFuncao(){
    //bloco de codigo
    document.write(5+5)
    document.write(5+5)
    document.write(5+5)
}
## Sintaxe

- JavaScript diferencia maiúsculas e minúsculas.
- Hífem é reservado para subtração, portanto não pode ser utilizado para separação.
- Para separações de palavras utilizamos Camel Case ou underline
- //camelCase: a primeira palavra é minúscula e a primeira letra de cada uma das demais deve ser maiúscula.

## Comentários

- Para comentar os códigos há duas formas:

- /*barra asterisco, asterisco barra*/ Comenta várias linhas.

- //barra barra Comenta apenas a linha em que se encontra.

## Variáveis

- Variáveis são como recipientes onde armazemanos dados qie podem mudar ou não
- Existem três tipos de variáveis:
- var / let / const
- Devemos declar as variáveis como nomes descritivos
- Estes nomes não podem ser palavras chave ou começar comum número, mas podem conter números.
- Podem conter $ e _

- JavaScript entende de forma litera. Então a capitalização importa.

var nome é diferente de var Nome ou nomE

- var: Pode ser redeclarada. Isso faz com que possa sobrescrever a declaração anterior sem apresentar um erro.

- let: Não pode ser redeclarada (Se isso acontecer será exibido um erro de sintaxe), mas pode ter seu valor reatribuído sem erro.

- const: Não pode ser redeclarada e nem seu valor pode ser reatribuído. Ele é constante!

>OBS.: É necessário observar o escopo(Global ou local)

## Operadores

- São usados para atribuir valores, comparar e executar operações matemáticas.
- São organizados em seis categorias:

>1 - Operadores Aritiméticos
>2 - Operadores de Atribuição
>3 - Operadores de Sequência
>4 - Operadores de Comparação
>5 - Operador Condicional (Ternário)
>6 - Operadores Lógicos

- OPERADORES ARITIMÉTICOS - Para efetuar as operações matemáticas:

>Adição +
>Subtração -
>Multiplicação *
>Exponenciação **
>Divisão /
>Resto da Divisão % 

- OPERADORES DE ATRIBUIÇÃO - Para atribuir os valores para as variáveis

>recebe =
>adiciona +=
>subtrai -=

- OPERADORES DE SEQUENCIA - São usados para concatenar strings (+) strings

>++ incrementa, pois é o mesmo que a = a + 1
>-- decremente, pois é o mesmo que a = a - 1

- OPERADORES DE COMPARAÇÃO - São usados em declarações lógicas e retornam true ou false (valores booleanos)

>Igual (valor) ==
>Idêntico (valor e tipo) ===
>Não igual(diferente) !=
>Não identico !==
>Menor que <
>Maior que >
>Menor ou Igual <=
>Maior ou Igual >=

- OPERADOR TERNÁRIO

> (teste lógico) ? true \\Codigo que deve ser executado : false \\Codigo que deve ser executado

## OPERADORES LÓGICOS

- e &&
- ou ||

>true && true - true
>true && false - false
>false && true - false
>false && false - false

>true || true - true
>true || false - true    
>false || true - true
>false || false - false

