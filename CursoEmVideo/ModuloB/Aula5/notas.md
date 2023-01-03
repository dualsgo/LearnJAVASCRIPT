/* Q01
Já sabe organizar suas pastas no VSCode?/

- Sim! Explicação longa

/* Q02
O node.js está instalado no seu computador?*/

- Sim, está. Serve para executar o JavaScript fora do navegador

/_ Q03
Sabe diferenciar HTML5, CSS3 e JS dentro de um código?_/

- Sim! As tags HMTL5 ficam no body (mas todo o arquivos basicamente é considerado html) CSS3 fica dentro da tag style e JS dentro da tag script

/_ Q04
Sabe disparar alertas, confirmações e perguntas?_/

- Alertas são disparados com alert(), sendo exibida uma janela com botão ok
- Confirmações são disparadas com confirm() e exibiem na janela um botão ok e outro cancel
- Perguntas são disparadas com prompt() e exibem uma area para texto onde o usuário entra com os dados

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Tipos de dados e variáveis

Comentários - Ignoram os códigos

- // Comentário em única linha

- /_ Comentário em
  mais de uma linha
  _/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Variáveis

- São espaços reservados. A memória do computador disponibiliza espaços para guardarmos dados
- Palavra chave var para variáveis e temos no JS moderno let e const
- As variáveis precisam receber nomes identificadores descritivos e posteriormente recebem seus valores
- Os identificadores devem seguir certas regras:
  Podem começar com letra, $ ou \_
  Não podem começar com números
  É possível usar acentos e símbolos
  Não podem conter espaços
  Não podem ser palavras reservadas
  Maiúsculas e minúsculas fazem a diferença
  Tente escolher nomes coerentes para as variáveis
  Evite se tornar um programados alfabeto ou programador contador
- O sinal de igual é chamado de RECEBE pois ele atribui o valor a variável (Operador de atribuição)
- Abrir terminal no VSCode e digitar node
  CTRL + L para limpar

Tipos de dados - Primitivos primordiais

-number
5, 19, -12 // São números inteiros
0.5, -15.9, 3.14, 8.0 // São números reais, com ponto flutuante (float)
infinity e NaN
-string cadeias de caracteres (inclusive numeros, como cpf por exemplo)
"Google", 'JavaScript', `Maria`, "14994086761"
-boolean
true e false
-null
-undefined
-object
array
-function

comando typeof para saber o tipo de dado