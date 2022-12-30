/*Q01
Consegue citar trÊs eventos que podem acontecer com elementos DOM de um site?
*/

Eventos de CLICK e MOUSE(Enter, Out, etc)

/*Q02
O que é uma função? Como criar funções em JS?
*/

Uma função é um bloco de código reutilizável

/*Q03
Sabe como pegar os valores de caixas de texto e fazer cálculos com eles?
*/

EXEMPLO EM FORMA DE FUNÇÃO 

        <input type="number" id="txtn1"> // Priemeiro espaço para entrada

        <input type="number" id="txtn2"> // Segundo espaço para entrada

        <input type="button" value="Clique" onclick="somar()"> // Botão de somar - NESSE CASO VALUE É O TEXTO

        <div id="res">Resultado</div> // ESSE TEXTO SERA MUDADO PELA VAR RES

    <script>
        function somar() {
            var res = document.getElementById('res')
            var n1 = document.getElementById('txtn1').value
            var n2 = document.getElementById('txtn2').value
            var s = Number(n1) + Number(n2)
            res.innerText = `A soma entre ${n1} e ${n2} é ${s}`
        }
    </script>

    ////////////////////////////////////////////////////

    SEQUENCIAS

    var n = 3 
    n += 2
    window.alert(n)

    CONDIÇÕES

    if(condição)bloco{
true
    }
    else {
false
    }

    TIPOS DE CONDIÇÃO:

    Simples

    if (condição){
        true
    }
    

