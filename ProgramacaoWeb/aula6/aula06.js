/*
Vamos entender variáveis

Variáveis são como recipientes onde podemos armazenar 
informaçoes que pode variar, podem ter qualquer tipo de valor

No JS temos tres palavras chave para declarar variaveis

var
let
const

DECLARANDO E ATRIBUINDO VALOR

var a = 2;
var b = 3;
var c = a + b;

DECLARANDO (com valor undefined)

var a,b,c

ATRIBUINDO VALOR

a = 2
b = 3
c = a + b

REGRAS PARA IDENTIFICADORS
Pode comeãr com $, _ ou letras
Não pode começar com número, mas pode contê-lo
Não pode ser uma paracra restrita


VARIAVEIS PODEM FAZER OPERAÇÕES MATEMATICAS E CONCATENAÇÃO

var nome, sobrenome, nomeCompleto

nome ='Maycon '
sobrenome = 'Douglas'
nomeCompleto = nome + sobrenome
console.log(nomeCompleto)

DIFERENÇAS VAR LET CONST

VAR - Pode ser redeclarada, reatribuida e tem escopo global.
Se for usado fora e dentro de um bloco, o valor retornado
será o da última declaração. Essas substituições não retornam erro, então
podemos sobrescrever os valores por acidente e não identificar.

LET - Tem escopo local. Se for declarado dentro de um bloco só
funcionará dentro desse bloco.
Não pode ser redeclarada, MAS pode ter o valor reatriuido

let pessoa = 'Dimitri'
let pessoa = 'John'

Apresenta erro de sintaxe no console. 

let pessoa = 'Dimitri'
pessoa = 'John'

Não apresenta erro


CONS - Tem valor constante que não pode ser alterado
e tem o mesmo escopo de LET. Geralmente é usado para variaveis
que não serão alteradas











*/

