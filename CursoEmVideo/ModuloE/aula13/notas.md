/*Q01
Sabe mudar a cor de fundo de um site dinamicamente, usando JS?
*/

Sim. Colocamos document.body.style.background = 'cor' na condição. Também podemos criar um botão que faça isso toda vez que é clicado e etc

/*Q02
Consegue inserir uma imagem dentro do seu site sem ter a tag <img> previamente criada?
*/

Podemos criar uma variável e atribuir o valor document.createElement('img')
img.setAtribute('id', 'foto') // para atribuir um id

/*Q03
Já treinou bastante o uso de condições simples, compostas, aninhadas e multiplas?
*/

Apenas com os exercícios

////////////////////////////////////////////////

Repetições em JS

Função ComerPizza()

function comerPizza(){
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
}


PONTO A >>>>>> PONTO B


Estrutura de controle

Sequencia - tarefas em sequencia
Condições - teste lógico com duas possibilidades true e false com instruções diferentes para cada

Repetições 
Laços - teste lógico, se a condiçao for verdadeira execurta o mesmo bloco em loop enquanto a condição for verdade

enquanto(condição){}
while(condição){}

function comerPizza(){}
    while(temFatia){
        comerFatia()
    }
}

Estrutura com teste no final

do{

} while 