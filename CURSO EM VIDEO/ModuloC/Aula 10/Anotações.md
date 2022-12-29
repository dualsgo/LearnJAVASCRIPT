/*Q01
O que significa a sigla DOM? */

DOCUMENT OBJECT MODEL
Facilita o acesso aos documentos pelo JS

/*Q02
Sabe montar a árvore DOM de um website simples? */

Sim.

/*Q03
O que são os elementos Parent e os elementos Child em uma árvore DOM?*/

São níveis de hierarquia dentro do documento

/*Q04
Quais são os cinco principais métodos de selecionar elemtentos DOM dentro do JS?*/

São so métodos GET
getElementBy Id, Class, TagName e Name
E os métodos querySelector e querySelectorAll

///////////////////////////////////////////////////////

Eventos DOM

mouseenter - mouse dentro da div
mousemove -movendo dentro da di
mousedown - click e segurar
mouseup - retirar o click
click - movimento de click
mouseout - mose retirado da div


FUNÇOES 

function ação(parametros) {
Bloco - ocorrem somente quando o evento ocorrer
}

function() {} - anonima


/////////////////////////////////
EVENTO ONCLICK

    <div id="area" onclick="clicar()">
        Interaja...
    </div>

    <script>

function clicar(){
    var caixa = window.document.getElementById('area')
    caixa.innerText = 'Clicou'

////////////////////////////////

Eventos dentro do HTML

 <div id="area" onclick="clicar()" onmouseenter="entrar()" onmouseout="sair()">
        Interaja...
    </div>

    <script>

        var caixa = window.document.getElementById('area') // escopo global

        function clicar() {
            caixa.innerText = 'Clicou'
            caixa.style.background = 'blue'
        }

        function entrar() {
            caixa.innerText = 'Entrou'
            caixa.style.background = 'yellow'
        }

        function sair() {
            caixa.innerText = 'Saiu'
            caixa.style.background = 'red'
        }

/////////////////////////////////

Eventos com ouvidores listeners


        var caixa = window.document.getElementById('area') // escopo global

caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter', entrar); // variavel.addEnetListener('evento', funcao)
caixa.addEventListener('mouseout', sair);

        function clicar() {
            caixa.innerText = 'Clicou'
            caixa.style.background = 'blue'
        }

        function entrar() {
            caixa.innerText = 'Entrou'
            caixa.style.background = 'yellow'
        }

        function sair() {
            caixa.innerText = 'Saiu'
            caixa.style.background = 'red'
        }




