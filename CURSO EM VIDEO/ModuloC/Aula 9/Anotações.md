/*Q01
Qual é a diferenã entre usar =, == e === em códigos escritos em JS? */

= Recebe == Igual (valor/grandeza) === Identico (valor e tipo)

/*Q01
Em uma mesma expressão, temos os operadores || e &&. Quem eu resolvo primeiro? */

Resolvemos && antes de ||

/*Q01
Sabe usar o operador ternário para colocar um entre dois valores em uma variável*/

Sim! Operador ternário é teste ? true : false

///////////////////////////////////////////////////////

DOM - DOCUMENT OBJECT MODEL
Objetos que dão acesso aos componentes do site

ARVORE DOM

window 
location - url, paginas
document - documento atual
history - mostra de onde veio e para onde vai

document - html
html - temos o head e o body
head - meta, tittle, ...
body - h1, p, div, ...


window.document.write(conteudo) adiciona ao documento


Selecionando

por marca - window.document.getElementsByTagName('p')[0] para selecionar o primeiro p

por id - getElementById - para selecionar pelo #id
por nome - getElementsByName
por classe - getElementsByClassName
por seletor - querySelector e querySelectorAll

//////////////////////////////////////////////////

innertText mostra o conteúdo bruto
innerHTML mostra o conteudo com a formatação

 var p1 = window.document.getElementsByTagName('p')[1]
        window.document.write('Está escrito: ' + p1.innerText)
        p1.style.color = 'blue'
        corpo.style.background = 'black'
/*        var d = window.document.getElementById('msg')
        d.style.background = 'green'
        d.innerText = 'Estou aguardando'*/
        var d = window.document.querySelector('div#msg')
        d.style.background = 'blue'