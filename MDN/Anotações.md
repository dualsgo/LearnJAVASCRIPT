## Aula 1

## [Definição de alto nível](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#defini%C3%A7%C3%A3o_de_alto_n%C3%ADvel)

JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido. É a terceira camada do bolo das tecnologias padrões da web, duas das quais ([HTML](https://developer.mozilla.org/pt-BR/docs/Learn/HTML)  e  [CSS](https://developer.mozilla.org/pt-BR/docs/Learn/CSS)) nós falamos com muito mais detalhes em outras partes da Área de Aprendizado.

![](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/cake.png)

-   [HTML](https://developer.mozilla.org/pt-BR/docs/Glossary/HTML)  é a linguagem de marcação que nós usamos para estruturar e dar significado para o nosso conteúdo web. Por exemplo, definindo parágrafos, cabeçalhos, tabelas de conteúdo, ou inserindo imagens e vídeos na página.
-   [CSS](https://developer.mozilla.org/pt-BR/docs/Glossary/CSS)  é uma linguagem de regras de estilo que nós usamos para aplicar estilo ao nosso conteúdo HTML. Por exemplo, definindo cores de fundo e fontes, e posicionando nosso conteúdo em múltiplas colunas.
-   [JavaScript](https://developer.mozilla.org/pt-BR/docs/Glossary/JavaScript)  é uma linguagem de programação que permite a você criar conteúdo que se atualiza dinamicamente, controlar múltimídias, imagens animadas, e tudo o mais que há de intessante. Ok, não tudo, mas é maravilhoso o que você pode efetuar com algumas linhas de código JavaScript.

As três camadas ficam muito bem uma em cima da outra. Vamos exemplificar com um simples bloco de texto. Nós podemos marcá-lo usando HTML para dar estrutura e propósito:

```
<p>Jogador 1: Chris</p>

```


![](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/just-html.png)

Nós podemos adicionar um pouco de CSS na mistura, para deixar nosso parágrafo um pouco mais atraente:

```
p {
  font-family: 'helvetica neue', helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgba(0,0,200,0.6);
  background: rgba(0,0,200,0.3);
  color: rgba(0,0,200,0.6);
  box-shadow: 1px 1px 2px rgba(0,0,200,0.4);
  border-radius: 10px;
  padding: 3px 10px;
  display: inline-block;
  cursor:pointer;
}

```


![](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/html-and-css.png)

E finalmente, nós podemos adicionar JavaScript para implementar um comportamento dinâmico:

```
const para = document.querySelector('p');

para.addEventListener('click', atualizarNome);

function atualizarNome() {
  var nome = prompt('Insira um novo nome');
  para.textContent = 'Jogador 1: ' + nome;
}

```


Experimente clicar no botão acima para ver o que acontece (note também que você pode encontrar essa demonstração no GitHub — veja o  [código fonte](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html)  ou  [veja funcionar](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html))!

JavaScript pode fazer muito mais do que isso — vamos explorar com mais detalhes.

## [Então o que ele pode realmente fazer?](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#ent%C3%A3o_o_que_ele_pode_realmente_fazer)

O núcleo da linguagem JavaScript consiste em alguns benefícios comuns da programação que permite a você fazer coisas como:

-   Armazenar conteúdo útil em variáveis. No exemplo acima, a propósito, nós pedimos que um novo nome seja inserido e armazenamos o nome em uma variável chamada  `nome`.
-   Operações com pedaços de texto (conhecidos como "strings" em programação). No exemplo acima, nós pegamos a string "Jogador 1: " e concatenamos (juntamos) com a variável  `nome`  para criar o texto completo "Jogador 1: Chris".
-   Executar o código em resposta a determinados eventos que ocorrem em uma página da Web. Nós usamos o  `[click  (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event "Currently only available in English (US)")`  no nosso exemplo acima para que quando clicassem no botão, rodasse o código que atualiza o texto.
-   E muito mais!

O que é ainda mais empolgante é a funcionalidade construída no topo do núcleo da linguagem JavaScript. As APIs (Application Programming Interfaces - Interface de Programação de Aplicativos) proveem a você superpoderes extras para usar no seu código JavaScript.

APIs são conjuntos prontos de blocos de construção de código que permitem que um desenvolvedor implemente programas que seriam difíceis ou impossíveis de implementar. Eles fazem o mesmo para a programação que os kits de móveis prontos para a construção de casas - é muito mais fácil pegar os painéis prontos e parafusá-los para formar uma estante de livros do que para elaborar o design, sair e encontrar a madeira, cortar todos os painéis no tamanho e formato certos, encontrar os parafusos de tamanho correto e  _depois_  montá-los para formar uma estante de livros.

Elas geralmente se dividem em duas categorias.

![APIs de terceiros e APIs do navegador](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/browser.png)

**APIs de navegadores**  já vem implementadas no navegador, e são capazes de expor dados do ambiente do computador, ou fazer coisas complexas e úteis. Por exemplo:

-   A  [API DOM (Document Object Model)](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model)  permite a você manipular HTML e CSS, criando, removendo e mudando HTML, aplicando dinamicamente novos estilos para a sua página, etc. Toda vez que você vê uma janela pop-up aparecer em uma página, ou vê algum novo conteúdo sendo exibido (como nós vimos acima na nossa simples demonstração), isso é o DOM em ação.
-   A  [API de Geolocalização](https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation)  recupera informações geográficas. É assim que o  [Google Maps](https://www.google.com/maps)  consegue encontrar sua localização e colocar em um mapa.
-   As APIs  [Canvas](https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API)  e  [WebGL](https://developer.mozilla.org/pt-BR/docs/Web/API/WebGL_API)  permite a você criar gráficos 2D e 3D animados. Há pessoas fazendo algumas coisas fantásticas usando essas tecnologias web — veja  [Chrome Experiments](https://www.chromeexperiments.com/webgl)  e  [webglsamples](https://webglsamples.org/).
-   [APIs de áudio e vídeo  (en-US)](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery "Currently only available in English (US)")  como  [`HTMLMediaElement`  (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement "Currently only available in English (US)")  e  [WebRTC](https://developer.mozilla.org/pt-BR/docs/Web/API/WebRTC_API)  permitem a você fazer coisas realmente interessantes com multimídia, tanto tocar música e vídeo em uma página da web, como capturar vídeos com a sua câmera e exibir no computador de outra pessoa (veja  [Snapshot demo](http://chrisdavidmills.github.io/snapshot/)  para ter uma ideia).

**Nota:**  Muitas demonstrações acima não vão funcionar em navegadores antigos — quando você for experimentar, é uma boa ideia usar browsers modernos como Firefox, Edge ou Opera para ver o código funcionar. Você vai precisar estudar  [testes cross browser](https://developer.mozilla.org/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing)  com mais detalhes quando você estiver chegando perto de produzir código (código real que as pessoas vão usar).

**APIs de terceiros**  não estão implementados no navegador automaticamente, e você geralmente tem que pegar seu código e informações em algum lugar da Web. Por exemplo:

-   A  [API do Twitter](https://dev.twitter.com/overview/documentation)  permite a você fazer coisas como exibir seus últimos tweets no seu website.
-   A  [API do Google Maps](https://developers.google.com/maps/)  permite a você inserir mapas customizados no seu site e outras diversas funcionalidades.

**Nota:**  Essas APIs são avançadas e nós não vamos falar sobre nenhuma delas nesse módulo. Você pode achar muito mais sobre elas em nosso módulo  [APIs web no lado cliente](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs).

Tem muito mais coisas disponíveis! Contudo, não fique animado ainda. Você não estará pronto para desenvolver o próximo Facebook, Google Maps ou Instagram depois de estudar JavaScript por 24 horas — há um monte de coisas básicas para estudar primeiro. E é por isso que você está aqui — vamos começar!

## [O que JavaScript está fazendo na sua página web?](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#o_que_javascript_est%C3%A1_fazendo_na_sua_p%C3%A1gina_web)

Aqui nós vamos realmente começar a ver algum código, e enquanto fazemos isso vamos explorar o que realmente acontece quando você roda algum código JavaScript na sua página.

Vamos recaptular brevemente a história do que acontece quando você carrega uma página web em um navegador (falamos sobre isso no nosso artigo  [Como o CSS funciona](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/First_steps/How_CSS_works#how_does_css_actually_work)). Quando você carrega uma página web no seu navegador, você está executando seu código (o HTML, CSS e JavaScript) dentro de um ambiente de execução (a guia do navegador). Isso é como uma fábrica que pega a matéria prima (o código) e transforma em um produto (a página web).

![](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/execution.png)

Um uso muito comum do JavaScript é modificar dinamicamente HTML e CSS para atualizar uma interface do usuário, por meio da API do Document Object Model (conforme mencionado acima). Observe que o código em seus documentos web geralmente é carregado e executado na ordem em que aparece na página. Se o JavaScript carregar e tentar executar antes do carregamento do HTML e CSS afetado, poderão ocorrer erros. Você aprenderá maneiras de contornar isso mais adiante neste artigo, na seção  [Estratégias de carregamento de scripts](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#script_loading_strategies).

### [Segurança do navegador](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#seguran%C3%A7a_do_navegador)

Cada guia do navegador tem seu próprio espaço para executar código (esses espaços são chamados de "ambientes de execução", em termos técnicos) — isso significa que na maioria dos casos o código em cada guia está sendo executado separadamente, e o código em uma guia não pode afetar diretamente o código de outra guia — ou de outro website. Isso é uma boa medida de segurança — se esse não fosse o caso, então hackers poderiam começar a escrever código para roubar informações de outros websites, e fazer outras coisas más.

**Nota:**  Há muitas maneiras de trocar código e conteúdo entre diferentes websites/guias de uma forma segura, mas são técnicas avançadas que não serão estudadas nesse curso.

### [Ordem de execução do JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#ordem_de_execu%C3%A7%C3%A3o_do_javascript)

Quando o navegador encontra um bloco de código JavaScript, ele geralmente executa na ordem, de cima para baixo. Isso significa que você precisa ter cuidado com a ordem na qual você coloca as coisas. Por exemplo, vamos voltar ao bloco JavaScript que nós vimos no primeiro exemplo:

```
const para = document.querySelector('p');

para.addEventListener('click', atualizarNome);

function atualizarNome() {
  let nome = prompt('Informe um novo nome:');
  para.textContent = 'Jogador 1: ' + nome;
}

```


Aqui nós estamos selecionando um parágrafo (linha 1) e anexando a ele um  _event listener_  (linha 3). Então, quando o parágrafo recebe um clique, o bloco de código  `atualizarNome()`  (linhas 5 a 8) é executado. O bloco de código  `atualizarNome()`(esses tipos de bloco de código reutilizáveis são chamados "funções") pede ao usuário que informe um novo nome, e então insere esse nome no parágrafo, atualizando-o.

Se você inverte a ordem das duas primeiras linhas de código, ele não fucionaria — em vez disso, você receberia um erro no console do navegador —  `TypeError: para is undefined`. Isso significa que o objeto  `para`  não existe ainda, então nós não podemos adicionar  _um event listener_  a ele.

**Nota:**  Esse é um erro muito comum — você precisa verificar se os objetos aos quais você se refere no seu código existem antes de você tentar anexar coisas a eles.

### [Código interpretado x compilado](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#c%C3%B3digo_interpretado_x_compilado)

Você pode ouvir os termos  **interpretado**  e  **compilado**  no contexto da programação. JavaScript é uma linguagem interpretada — o código é executado de cima para baixo e o resultado da execução do código é imediatamente retornado. Você não tem que transformar o código em algo diferente antes do navegador executa-lo.

Linguagens compiladas, por outro lado, são transformadas (compiladas) em algo diferente antes que sejam executadas pelo computador. Por exemplo, C/C++ são compiladas em linguagem Assembly, e depois são executadas pelo computador.

JavaScript é uma linguagem de programação leve e interpretada. O navegador recebe o código JavaScript em sua forma de texto original e executa o script a partir dele. Do ponto de vista técnico, a maioria dos intérpretes modernos de JavaScript realmente usa uma técnica chamada  **compilação just-in-time**  para melhorar o desempenho; o código-fonte JavaScript é compilado em um formato binário mais rápido enquanto o script está sendo usado, para que possa ser executado o mais rápido possível. No entanto, o JavaScript ainda é considerado uma linguagem interpretada, pois a compilação é manipulada em tempo de execução, e não antes.

Há vantagens em ambos os tipos de linguagem, mas nós não iremos discutir no momento.

### [Lado do servidor x Lado do cliente](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#lado_do_servidor_x_lado_do_cliente)

Você pode também ouvir os termos  **lado do servidor (_server-side_)**  e  **lado do cliente (_client-side_)**, especialmente no contexto de desenvolvimento web. Códigos do lado do cliente são executados no computador do usuário — quando uma página web é visualizada, o código do lado do cliente é baixado, executado e exibido pelo navegador. Nesse módulo JavaScript nós estamos explicitamente falando sobre  **JavaScript do lado do cliente**.

Códigos do lado do servidor, por outro lado, são executados no servidor e o resultado da execução é baixado e exibido no navegador. Exemplos de linguagens do lado do servidor populares incluem PHP, Python, Ruby, e ASP.NET. E JavaScript! JavaScript também pode ser usada como uma linguagem  _server-side_, por exemplo, no popular ambiente Node.js — você pode encontrar mais sobre JavaScript do lado do servidor no nosso tópico  [Websites dinâmicos - Programação do lado do servidor](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side).

### [Código dinâmico x estático](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#c%C3%B3digo_din%C3%A2mico_x_est%C3%A1tico)

A palavra  **dinâmico**  é usada para descrever tanto o JavaScript  _client-side_  como o  _server-side_  — essa palavra se refere a habilidade de atualizar a exibição de uma página web/app para mostrar coisas diferentes em circunstâncias diferentes, gerando novo conteúdo como solicitado. Código do lado do servidor dinamicamente gera novo conteúdo no servidor, puxando dados de um banco de dados, enquanto que JavaScript do lado do cliente dinamicamente gera novo conteúdo dentro do navegador do cliente, como criar uma nova tabela HTML com dados recebidos do servidor e mostrar a tabela em uma página web exibida para o usuário. Os significados são ligeiramente diferente nos dois contextos, porém relacionados, e ambos (JavaScript  _server-side_  e  _client-side_) geralmente trabalham juntos.

Uma página web sem atualizações dinâmicas é chamada de  **estática**  — ela só mostra o mesmo conteúdo o tempo todo.

## [Como você adiciona JavaScript na sua página?](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#como_voc%C3%AA_adiciona_javascript_na_sua_p%C3%A1gina)

O JavaScript é inserido na sua página de uma maneira similar ao CSS. Enquanto o CSS usa o elemento  [`<link>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/link)  para aplicar folhas de estilo externas e o elemento  [`<style>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/style)  para aplicar folhas de estilo internas, o JavaScript só precisa de um amigo no mundo do HTML — o elemento  [`<script>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/script). Vamos aprender como funciona.

### [JavaScript interno](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#javascript_interno)

1.  Antes de tudo, faça uma cópia local do nosso arquivo de exemplo  [aplicando-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Salve-o em alguma pasta, de uma forma sensata.
2.  Abra o arquivo no seu navegador web e no seu editor de texto. Você verá que o HTML cria uma simples página web contendo um botão clicável.
3.  Agora, vá até o seu editor de texto e adicione o código a seguir antes da tag de fechamento  `</body>`:
    
    ```
    <script>
    
      // O JavaScript fica aqui
    
    </script>
    
    ```
    
  
    
4.  Agora nós vamos adicionar um pouco de JavaScript dentro do nosso elemento  [`<script>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/script)  para que a página faça algo mais interessante — adicione o seguinte código abaixo da linha "// O JavaScript fica aqui":
    
    ```
    function criarParagrafo() {
      let para = document.createElement('p');
      para.textContent = 'Você clicou no botão!';
      document.body.appendChild(para);
    }
    
    const botoes = document.querySelectorAll('button');
    
    for(var i = 0; i < botoes.length ; i++) {
      botoes[i].addEventListener('click', criarParagrafo);
    }
    
    ```
    
  
    
5.  Salve seu arquivo e recarregue a página — agora você deveria ver que quando você clique no botão, um novo parágrafo é gerado e colocado logo abaixo.

**Nota:**  Se seu exemplo não parece funcionar, leia cada passo novamente e confira que você fez tudo certo. Você salvou sua cópia local do código inicial como um arquivo .html? Você adicionou o elemento  [`<script>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/script)  imediatamente antes da tag  `</body>`? Você digitou o código JavaScript exatamente como ele está sendo mostrado?  **JavaScript é uma linguagem case sensitive (isso significa que a linguagem vê diferença entre letras maiúsculas e minúsculas) e muito confusa, então você precisa digitar a sintaxe exatamente como foi mostrada, senão não vai funcionar.**

**Nota:**  Você pode ver essa versão no GitHub como  [apicando-javascript-interno.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)  ([veja funcionar também](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### [JavaScript externo](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#javascript_externo)

Isso funciona muito bem, mas e se nós quiséssemos colocar nosso JavaScript em um arquivo externo? Vamos explorar isso agora.

1.  Primeiro, crie um novo arquivo na mesma pasta que está o arquivo HTML de exemplo. Chame-o de  `script.js`  — tenha certeza de que o nome do arquivo tem a extensão  `.js`, pois é assim que ele será reconhecido como JavaScript.
2.  Agora substitua o elemento atual  [`<script>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/script)  pelo seguinte código:
    
    ```
    <script src="script.js" defer></script>
    
    ```
    
  
    
3.  Em  `script.js`, adicione o seguinte script:
    
    ```
    function createParagraph() {
      let para = document.createElement('p');
      para.textContent = 'Você clicou no botão!';
      document.body.appendChild(para);
    }
    
    const buttons = document.querySelectorAll('button');
    
    for(let i = 0; i < buttons.length ; i++) {
      buttons[i].addEventListener('click', createParagraph);
    }
    
    ```
    
  
    
4.  Salve e atualize seu navegador, e você deverá ver a mesma coisa! Funciona igualmente, mas agora nós temos o JavaScript em um arquivo externo. Isso é geralmente uma coisa boa em termos de organização de código, e faz com que seja possível reutilizar o código em múltiplos arquivos HTML. Além disso, o HTML fica mais legível sem grandes pedaços de script no meio dele.

**Nota:**  Você pode ver essa versão no GitHub como  [aplicando-javascript-externo.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)  e  [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js)  ([veja funcionar também](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### [Manipuladores de JavaScript inline](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#manipuladores_de_javascript_inline)

Note que às vezes você vai encontrar código JavaScript escrito dentro do HTML. Isso deve ser algo como:

```
function criarParagrafo() {
  let para = document.createElement('p');
  para.textContent = 'Você clicou o botao!';
  document.body.appendChild(para);
}

```

```
<button onclick="criarParagrafo()">Me clique!</button>

```

Você pode tentar essa versão na nossa demonstração abaixo.

Essa demonstração tem exatamente a mesma funcionalidade que vimos nas primeiras duas seções, exceto que o elemento  [`<button>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/button)  inclui um manipulador  _inline_  `onclick`  para fazer a função ser executada quando o botão é clicado.

**Contudo, por favor, não faça isso.**  É uma má prática poluir seu HTML com JavaScript, e isso é ineficiente — você teria que incluir o atributo  `onclick="criarParagrafo()"`  em todo botão que você quisesse aplicar JavaScript.

Usando uma estrutura feita de puro JavaScript permite a você selecionar todos os botões usando uma instrução. O código que nós usamos acima para servir a esse propósito se parece com isso:

```
const botoes = document.querySelectorAll('button');

for(var i = 0; i < botoes.length ; i++) {
  botoes[i].addEventListener('click', criarParagrafo);
}

```


Isso talvez parece ser mais do que o atributo  `onclick`, mas isso vai funcionar para todos os botões, não importa quantos tem na página, e quantos forem adicionados ou removidos. O JavaScript não precisará ser mudado.

**Nota:**  Tente editar a sua versão do arquivo  `aplicar-javascript.html`, adicionando alguns botões a mais. Quando você recarregar, você deverá ver que todos os botões, quando clicados, irão criar parágrafos. Agradável, não?

### [Estratégias para o carregamento de scripts](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#estrat%C3%A9gias_para_o_carregamento_de_scripts)

Há um considerável número de problemas envolvendo o carregamento de scripts na ordem correta. Infelizmente, nada é tão simples quanto parece ser! Um problema comum é que todo o HTML de uma página é carregado na ordem em que ele aparece. Se você estiver usando Javascript para manipular alguns elementos da página (sendo mais preciso, manipular o  [Document Object Model](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model)), seu código não irá funcionar caso o JavaScript for carregado e executado antes mesmo dos elementos HTML estarem disponíveis.

Nos exemplos acima, tanto nos scripts internos ou externos, o JavaScript é carregado e acionado dentro do cabeçalho do documento, antes do corpo da página ser completamente carregado. Isso poderá causar algum erro. Assim, temos algumas soluções para isso.

No exemplo interno, você pode ver essa estrutura em volta do código:

```
document.addEventListener("DOMContentLoaded", function() {
  ...
});

```


Isso é um  _event listener_  (ouvidor de eventos*)*, que ouve e aguarda o disparo do evento "DOMContentLoaded" vindo do  _browser_, evento este que significa que o corpo do HTML está completamente carregado e pronto. O código JavaScript que estiver dentro desse bloco não será executado até que o evento seja disparado, portanto, o erro será evitado (você irá  [aprender sobre eventos](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)  mais tarde).

No exemplo externo, nós usamos um recurso moderno do JavaScript para resolver esse problema: Trata-se do atributo  `defer`, que informa ao  _browser_  para continuar renderizando o conteúdo HTML uma vez que a tag  `<script>`  foi atingida.

```
<script src="script.js" defer></script>

```


Neste caso, ambos script e HTML irão carregar de forma simultânea e o código irá funcionar.

**Nota:**  No caso externo, nós não precisamos utilizar o evento  `DOMContentLoaded`  porque o atributo  `defer`  resolve o nosso problema. Nós não utilizamos  `defer`  como solução para os exemplos internos pois  `defer`  funciona apenas com scripts externos.

Uma solução à moda antiga para esse problema era colocar o elemento script bem no final do body da página (antes da tag  `</body>)`. Com isso, os scripts iriam carregar logo após todo o conteúdo HTML. O problema com esse tipo de solução é que o carregamento/renderização do script seria completamente bloqueado até que todo o conteúdo HTML fosse analisado. Em sites de maior escala, com muitos scripts, essa solução causaria um grande problema de performance e deixaria o site lento.

#### async e defer

Atualmente, há dois recursos bem modernos que podermos usar para evitar o problema com o bloqueio de scripts —  `async`  e  `defer`  (que vimos acima). Vamos ver as diferenças entre esses dois?

Os scripts que são carregados usando o atributo  `async`  (veja abaixo) irão baixar o script sem bloquear a renderização da página e irão executar imediatamente após o script terminar de ser disponibilizado. Nesse modo você não tem garantia nenhuma que os scripts carregados irão rodar em uma ordem específica, mas saberá que dessa forma eles não irão impedir o carregamento do restante da página. O melhor uso para o  `async`  é quando os scripts de uma página rodam de forma independente entre si e também não dependem de nenhum outro script.

Por exemplo, se você tiver os seguintes elementos script:

```
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>

```


Você não pode garantir que o script.  `jquery.js`  carregará antes ou depois do  `script2.js`  e  `script3.js`  . Nesse caso, se alguma função desses scripts dependerem de algo vindo do  `jquery`, ela produzirá um erro pois o  `jquery`  ainda não foi definido/carregado quando os scripts executaram essa função.

`async`  deve ser usado quando houver muitos scripts rodando no  _background_, e você precisa que estejam disponíveis o mais rápido possível. Por exemplo, talvez você tenha muitos arquivos de dados de um jogo para carregar que serão necessários assim que o jogo iniciar, mas por enquanto, você só quer entrar e ver a tela de carregamento, a do titulo do jogo e o  _lobby_, sem ser bloqueado pelo carregamento desses scripts.

Scripts que são carregados utilizando o atributo  `defer`  (veja abaixo) irão rodar exatamente na ordem em que aparecem na página e serão executados assim que o script e o conteúdo for baixado.

```
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>

```


Todos os scripts com o atributo  `defer`  irão carregar na ordem que aparecem na página. No segundo exemplo, podemos ter a certeza que o script  `jquery.js`  irá carregar antes do  `script2.js`  e  `script3.js`  e o  `script2.js`  irá carregar antes do  `script3.js`. Os scripts não irão rodar sem que antes todo o conteúdo da página seja carregado, que no caso, é muito útil se os seus scripts dependem de um DOM completamente disponibilizado em tela (por exemplo, scripts que modificam um elemento).

Resumindo:

-   `async`  e  `defer`  istruem o  _browser_  a baixar os scripts numa  _thread_  (processo) à parte, enquanto o resto da página (o DOM, etc.) está sendo baixado e disponibilizado de forma não bloqueante.
-   Se os seus scripts precisam rodar imediatamente, sem que dependam de outros para serem executados, use  `async`.
-   Se seus scripts dependem de outros scripts ou do DOM completamente disponível em tela, carregue-os usando  `defer`  e coloque os elementos  `<script>`  na ordem exata que deseja que sejam carregados.

## [Comentários](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#coment%C3%A1rios)

Assim como HTML e CSS, é possível escrever comentários dentro do seu código JavaScript que serão ignorados pelo navegador, e existirão simplesmente para prover instruções aos seus colegas desenvolvedores sobre como o código funciona (e pra você, se você tiver que voltar ao seu código depois de 6 meses e não se lembrar do que fez). Comentários são muito úteis, e você deveria usá-los frequentemente, principalmente quando seus códigos forem muito grandes. Há dois tipos:

-   Um comentário de uma linha é escrito depois de duas barras. Por exemplo:
    
    ```
    // Eu sou um comentário
    
    ```
    
  
    
-   Um comentário de múltiplas linhas é escrito entre os caracteres /* e */. Por exemplo:
    
    ```
    /*
      Eu também sou
      um comentário
    */
    
    ```
    
  
    

Então, por exemplo, você poderia fazer anotações na nossa última demonstração de código JavaScript, da seguinte forma:

```
// Função: Cria um novo parágrafo e o insere no fim do arquivo HTML.

function criarParagrafo() {
  var para = document.createElement('p');
  para.textContent = 'Você clicou no botão!';
  document.body.appendChild(para);
}

/*
  1. Captura referências de todos os botões na página e armazena isso em um array.
  2. Vai até todos os botões e adiciona um event listener click a cada um deles.

  Quando cada botão é clicado, a função criarParagrafo() será executada.
*/

const botoes = document.querySelectorAll('button');

for(var i = 0; i < botoes.length ; i++) {
  botoes[i].addEventListener('click', criarParagrafo);
}

```


**Nota:**  Em geral mais comentários são melhores que menos, porém você deve tomar cuidado para não adicionar comentários de mais tentando explicar o que uma variável é (o nome da sua variável deve ser mais intuitivo), ou tentando explicar uma operação simples (talvez seu código seja muito complicado denecessariamente).

## [Sumário](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#sum%C3%A1rio)

Então, esse foi o seu primeiro passo no mundo do JavaScript. Nós iniciamos apenas com teoria, então te ensinamos porque usar JavaScript e que tipo de coisa você pode fazer com ele. Pelo caminho você viu alguns códigos de exemplo e aprendeu como JavaScript se encaixa com o resto do código do seu site, entre outras coisas.

O JavaScript talvez pareça um pouco assustador agora, mas não se preocupe — nesse curso você será guiado passo a passo, e tudo vai começar a fazer sentido. No próximo artigo vamos  [mergulhar direto para a prática](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash), levando você a construir seu próprio código JavaScript.

## Aula 2

## [Pensando como um Programador](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#pensando_como_um_programador)

Uma das coisas mais difíceis de aprender na programação não é a sintaxe que você precisa aprender, mas como aplicá-la para resolver problemas do mundo real. Você precisa começar a pensar como um programador - isso geralmente envolve olhar para as descrições do que seu programa precisa fazer e analisar como eles podem ser aplicados na solução real (prática), quais recursos de código são necessários para alcançar esse objetivo, e como fazê-los trabalhar em conjunto.

Isso requer um mistura de trabalho duro, experiência com a sintaxe de programação utilizada e prática, além de um pouco de criatividade, é claro. Quanto mais você programa, melhor programador se torna. Nós não prometemos transformar seu cérebro em um "cérebro de programador" em 5 minutos, mas vamos te dar todas as oportunidades para pensar na prática como um programador ao longo deste curso.

Com isso em mente, vejamos o exemplo que estaremos construindo neste artigo e analisaremos o processo geral de dissecá-lo em tarefas tangíveis.

## [Exemplo — Jogo adivinhe um número](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#exemplo_%E2%80%94_jogo_adivinhe_um_n%C3%BAmero)

Neste artigo vamos mostrar a você como construir este simples jogo, que pode ser visto abaixo:

Vá em frente e jogue por um tempo para se familiarizar com o jogo antes de continuar.

Vamos imaginar que o seu chefe te deu as seguintes diretrizes para criar este jogo:

> Quero que você crie um jogo simples do tipo adivinhe um número. Ele deve gerar um número aleatório de 1 a 100, depois desafiar o jogador a adivinhar o número em 10 rodadas. A cada rodada deve ser dito ao jogador se ele está certo ou errado, se estiver errado, deve ser dito se o palpite é muito baixo ou muito alto. Também deve ser mostrado ao jogador os números que ele tentou adivinhar anteriormente. O jogo termina se o jogador acertar o número ou acabarem o número de tentativas. Quando o jogo acabar, deve ser dado ao jogador a opção de jogar novamente.

Olhando para o enunciado, a primeira coisa que devemos fazer é quebrá-lo em pequenas tarefas, da forma mais parecida com o pensamento de um programador quanto possível:

1.  Gerar um número aleatório entre 1 e 100.
2.  Gravar o número do turno que o jogador está. Iniciar em 1.
3.  Dar ao jogador uma forma de adivinhar o número.
4.  Após a tentativa ter sido submetida, primeiro gravar em algum lugar para que o usuário possa ver as tentativas anteriores.
5.  Depois, verificar se o palpite está correto.
6.  Se estiver correto:
    1.  Escrever mensagem de parabéns.
    2.  Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
    3.  Mostrar controle que permita ao jogador reiniciar o jogo.
7.  Se o palpite estiver errado e o jogador ainda tem turnos sobrando:
    1.  Dizer ao jogador que ele está errado.
    2.  Permitir que ele insira outra resposta.
    3.  Incrementar o número do turno em 1.
8.  Se o jogador está errado mas não tem turnos sobrando:
    1.  Dizer ao jogador que o jogo acabou.
    2.  Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
    3.  Mostrar controle que permita ao jogador reiniciar o jogo.
9.  Quando reiniciar, tenha certeza de resetar todas as variáveis e a interface do jogo, então volte para o passo 1.

Então vamos em frente, olhando como podemos transformar esses passos em código, construindo esse exemplo e explorando as ferramentas do JavaScript ao longo do caminho.

### [Configuração Inicial](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#configura%C3%A7%C3%A3o_inicial)

Para iniciar este tutorial, gostaríamos que você fizesse uma cópia do arquivo  [jogo-adivinhe-o-numero-inicio.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)  ([ver demonstração](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Abra-o em um editor de texto e também no seu browser. No momento você vai apenas ver um simples cabeçalho, parágrafo de instruções e um formulário para entrada de informações, mas o formulário não fará nada por enquanto.

O lugar em que começaremos a escrever nosso código será dentro da tag  [`<script>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/script)  na parte inferior do HTML:

```
<script>

  // Seu JavaScript vai aqui

</script>

```


### [Adicionando variáveis para armazenar nossos dados](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#adicionando_vari%C3%A1veis_para_armazenar_nossos_dados)

Vamos começar. Primeiramente, adicione as seguintes linhas na sua tag  [`<script>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/script)  :

```
var numeroAleatorio= Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 1;
var botaoReinicio;

```


Aqui estamos setando as variáveis que precisamos para guardar os dados que nosso programa irá utilizar. Variáveis são basicamente recipientes para valores (como números, ou strings ou textos). Variáveis são criadas com a palavra-chave  `var`  seguida de um nome para sua variável. Você pode atribuir um valor para sua variável com um sinal de igual (`=`) seguido do valor que você quer dar a ela.

No nosso exemplo:

-   À primeira variável —  `numeroAleatorio`  — é atribuído um número aleatório entre 1 e 100, calculado usando um algoritmo matemático.
-   As próximas três variáveis são criadas para guardar uma referência para os parágrafos resultantes em nosso HTML, e são usadas para inserir valores nos parágrafos no código:
    
    ```
    <p class="palpites"></p>
    <p class="ultimoResultado"></p>
    <p class="baixoOuAlto"></p>
    
    ```
    
  
    
-   As próximas duas variáveis armazenam referências para o campo de texto e o botão de envio e são usados para controlar o envio do palpite.
    
    ```
    <label for="campoPalpite">Digite seu palpite: </label><input type="text" id="campoPalpite" class="campoPalpite">
    <input type="submit" value="Enviar palpite" class="envioPalpite">
    
    ```
    
  
    
-   As últimas duas variáveis (contagemPalpites e botaoReinicio) são usadas para armazenar a contagem dos palpites do usuário, e o outro é uma referência para o botão de reset, que não existe ainda (mas irá existir).

**Nota:**  Você irá aprender muito mais sobre variáveis a partir do  [próximo artigo](https://developer.mozilla.org/pt-BR/docs/user:chrisdavidmills/variables "This is a link to an unwritten page").

### [Funções](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#fun%C3%A7%C3%B5es)

Em seguida, adicione o seguinte código abaixo do JavaScript anterior:

```
function conferirPalpite() {
  alert('Eu sou um placeholder');
}

```


Funções são blocos reutilizáveis de código que você pode escrever uma vez e executá-lo de novo e de novo, eliminando a necessidade de repetir o código todas as vezes. Isso é realmente útil. Há várias formas de se definir funções, mas, por agora, vamos nos concentrar em um tipo simples. Aqui nós definimos uma função usando a palavra chave  `function`, seguida de um nome, com parênteses colocados na sequência. Depois disso nós colocamos duas chaves (`{ }`). Dentro das chaves vai todo o código que queremos executar sempre que chamarmos a função.

O código é executado digitando o nome da função seguido pelos parênteses.

Tente salvar o seu código agora e atualizá-lo no navegador.

Vá até o  [console JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools), e insira a seguinte linha:

```
conferirPalpite();

```


Você deverá ver um alerta aparecer dizendo "Eu sou um placeholder"; nós definimos uma função em nosso código que cria um alerta a qualquer hora em que a chamarmos.

**Nota:**  Você irá aprender muito mais sobre funções mais tarde no curso.

### [Operadores](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#operadores)

Os operadores JavaScript nos permite realizar testes, fazer cálculos matemáticos, unir sequências de texto, e outras coisas do tipo.

Vamos salvar nosso código e atualizar a página exibida em nosso navegador. Abra o  [console JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools)  se você ainda não o tiver aberto, para que possamos digitar os exemplos mostrados abaixo — digite cada um exatamente como mostrado na coluna "Exemplo", pressionando Return/Enter na sequência, e veja quais resultados são retornados. Se você não tiver fácil acesso às ferramentas de desenvolvimento do navegador você pode sempre utilizar o console embutido simples, como no exemplo abaixo:

Primeiro vamos ver os operadores matemáticos, como por exemplo:

Operador

Nome

Exemplo

`+`

Adição

`6 + 9`

`-`

Subtração

`20 - 15`

`*`

Multiplicação

`3 * 7`

`/`

Divisão

`10 / 5`

Você também pode usar o operador  `+`  para unir sequências de texto (isso é chamado de concatenação em programação). Tente inserir as seguintes linhas:

```
var nome = 'Bingo';
nome;
var ola = ' diz olá!';
ola;
var cumprimento = nome + ola;
cumprimento;

```


Há também alguns atalhos para operadores disponíveis, chamados de operadores de atribuição ampliada (ou atribuição composta). Por exemplo, se você quer adicionar uma nova sequência de texto à uma existente e retornar o resultado, você pode fazer o seguinte:

```
nome += ' diz olá!';

```


Isso é equivalente a:

```
nome = nome + ' diz olá!';

```


Quando estamos rodando testes de verdadeiro/falso (por exemplo, condicinais internas — veja  [abaixo](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#conditionals), usamos operadores de comparação, por exemplo:

Operador

Nome

Exemplo

`===`

Igualdade estrita (é estritamente o mesmo?)

`5 === 2 + 4`

`!==`

Não-igualdade (não é o mesmo?)

`'Chris' !== 'Ch' + 'ris'`

`<`

Menor que

`10 < 6`

`>`

Maior que

`10 > 20`

### [Condicionais](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#condicionais)

Voltando à nossa função  `conferirPalpite()`, imagino que seja seguro dizer que não queremos que ela apenas exiba uma mensagem de teste (placeholder). Nós queremos verificar se o palpite do jogador está correto ou não, e responder apropriadamente.

Neste ponto, substitua sua função  `conferirPalpite()`  atual por esta versão:

```
function conferirPalpite() {
  var palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1) {
    palpites.textContent = 'Palpites anteriores: ';
  }
  palpites.textContent += palpiteUsuario + ' ';

  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = 'Parabéns! Você acertou!';
    ultimoResultado.style.backgroundColor = 'green';
    baixoOuAlto.textContent = '';
    configFimDeJogo();
  } else if (contagemPalpites === 10) {
    ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
    baixoOuAlto.textContent = '';
    configFimDeJogo();
  } else {
    ultimoResultado.textContent = 'Errado!';
    ultimoResultado.style.backgroundColor = 'red';
    if(palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
    } else if(palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito alto!';
    }
  }

  contagemPalpites++;
  campoPalpite.value = '';
  campoPalpite.focus();
}

```


Isso é bastante código — ufa! Vamos abordar cada seção e explicar o que faz.

-   A primeira linha (linha 2 no código acima) declara uma variável chamada  `palpiteUsuario`  e define seu valor igual ao valor inserido pelo jogador no campo de texto. Nós também rodamos esse valor através do método embutido  `Number()`, apenas para ter certeza de que o valor inserido é um número.
-   Em seguida, encontramos nosso primero bloco de código condicional (linhas 3–5 no código acima). Um bloco de código condicional lhe permite executar código seletivamente, dependendo se uma condição é verdadeira ou não. Se parece um pouco com uma função, mas não é. A forma mais simples de um bloco condicional começa com a palavra chave  `if`, depois os parênteses, depois as chaves. Dentro dos parênteses nós incluímos um teste. Se o teste retornar  `true`(verdadeiro), o código dentro das chaves é executado. Caso contrário, não é executado, e seguimos para a próxima parte do código. Neste caso, o teste está verificando se a variável  `contagemPalpites`  é igual a  `1`  (isto é, se essa é ou não a primeira tentativa do jogador):
    
    ```
    contagemPalpites === 1
    
    ```
    
  
    
    Se a condição for verdadeira, nós tornamos o conteúdo do parágrafo de palpites,  `<p class="palpites"></p>`  igual a "Palpites anteriores: ". Caso contrário, o texto não é exibido.
-   A linha 6 acrescenta o valor atual de  `palpiteUsuario`  ao final do parágrafo  `palpites`, mais um espaço em branco para que haja espaçamento entre cada palpite mostrado.
-   O próximo bloco (linhas 8–24 acima) fazem as seguintes conferências:
    -   O primeiro  `if(){ }`  confere se o palpite do jogador é igual ao número aleatório (`numeroAleatorio`) definido no topo do nosso JavaScript. Se for, o jogador adivinhou corretamente o número e venceu o jogo. Então mostramos ao jogador uma mensagem de parabenização com uma agradável cor verde, limpamos o conteúdo do parágrado que informa sobre o palpite ser alto ou baixo  `<p class="baixoOuAlto"></p>`, e executamos uma função chamada  `configFimDeJogo()`, que iremos discutir mais tarde.
    -   Agora nós encadeamos outro teste ao final deste anterior usando uma estrutura  `else if(){ }`. Este confere se o palpite do jogador é sua última tentativa. Se for, o programa faz o mesmo que no bloco anterior, porém com uma mensagem de fim de jogo ao invés do texto de parabenização.
    -   O bloco final encadeado ao final do código (`else { }`) contém código que só é executado se nenhum dos outros dois testes retornar verdadeiro (ou seja, o jogador não acertou o número, porém ainda tem mais tentativas restantes). Neste caso nós dizemos a ele que está errado, e então rodamos outro teste condicional para checar se o palpite foi maior ou menor do que a resposta certa, exibindo então uma mensagem apropriada para informá-lo se foi maior ou menor.
-   As próximas três linhas da função (linhas 26–28) nos deixa preparados para o próximo palpite ser submetido. Nós somamos 1 à variável  `contagemPalpites`  para que o jogador use sua tentativa (`++`  é uma operação de incremento — incrementa em 1), e o campo de texto do formulário de inserção seja esvaziado e focado novamente, pronto para que o próximo palpite seja inserido.

### [Eventos](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#eventos)

Neste ponto temos uma função  `conferirPalpite()`  bem implementada, mas ela não irá fazer nada pois nós não a chamamos ainda. Idealmente nós queremos que ela seja acionada quando o botão "Enviar palpite" for pressionado, e para fazer isso precisamos usar um evento. Eventos são ações que acontencem no navegador, como um botão sendo clicado, ou uma página carregada, ou um vídeo tocando; ações as quais podemos responder executando blocos de código. Os construtores que monitoram os acontecimentos de eventos são chamados de  **event listeners**, e os blocos de código executados em resposta ao acontecimento do evento são chamados de  **event handlers**.

Adicione a seguinte linha abaixo da chave de fechamento da sua função  `conferirPalpite()`:

```
envioPalpite.addEventListener('click', conferirPalpite);

```


Aqui nós estamos adicionando um  _event listener_  ao botão  `envioPalpite`. Esse é um método que aceita a inserção de dois valores (chamados de argumentos) — o tipo de envento que estamos monitorando (neste caso o evento  `click`) como um  _string_  (sequência de texto), e o código que queremos executar quando o evento ocorrer (neste caso a função  `conferirPalpite()`  — note que não temos que especificar os parênteses quando estivermos escrevendo dentro de  [`addEventListener()`](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener "addEventListener()")).

Tente agora salvar e atualizar seu código, e seu exemplo deve funcionar agora, até um ponto. O único problema agora é que se você acertar o palpite ou ficar sem mais tentativas o jogo irá falhar, porque ainda não definimos a função  `configFimDeJogo()`  que deve ser executada uma vez que o jogo terminar. Vamos adicionar agora o código restante e completar a funcionalidade do nosso exemplo.

### [Finalizando a funcionalidade do jogo](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#finalizando_a_funcionalidade_do_jogo)

Vamos adicionar a função  `configFimDeJogo()`  ao final do nosso código e então explorá-lo. Adicione agora isso, abaixo do restante do seu JavaScript:

```
function configFimDeJogo() {
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReinicio = document.createElement('button');
  botaoReinicio.textContent = 'Iniciar novo jogo';
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener('click', reiniciarJogo);
}

```


-   As primeiras duas linhas desabilitam a entrada de texto do formulário e o clique do botão, definindo a propriedade  _disabled_  (desabilitado) de cada um como  `true`  (verdadeiro). Isso é necessário, pois se não o fizermos, o usuário poderia submeter mais palpites depois do jogo ter terminado, o que iria bagunçar as coisas.
-   As próximas três linhas geram um novo elemento  [`<button>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/button), define o texto de seu rótulo como "Iniciar novo jogo", e o adiciona ao final do nosso HTML existente.
-   A linha final define um monitor de evento (_event listener_) em nosso botão, para que quando seja clicado, uma função chamada  `reiniciarJogo()`  seja executada.

Agora precisamos definir essa função também! Adicione o seguinte código, novamente ao final do nosso JavaScript:

```
function reiniciarJogo() {
  contagemPalpites = 1;

  var reiniciarParas = document.querySelectorAll('.resultadoParas p');
  for (var i = 0 ; i < reiniciarParas.length ; i++) {
    reiniciarParas[i].textContent = '';
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);

  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = '';
  campoPalpite.focus();

  ultimoResultado.style.backgroundColor = 'white';

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

```


Esse longo bloco de código redefine completamente tudo do modo como era no início do jogo, para que o jogador possa jogá-lo novamente. Ele:

-   Coloca o valor da variável  `contagemPalpites`  novamente igual a 1.
-   Limpa todos os parágrafos de informativos.
-   Remove o botão resete do nosso código.
-   Habilita os elementos do formulários, esvazia e direciona o foco ao campo de texto, pronto para que um novo palpite seja inserido.
-   Remove a cor de fundo do parágrafo  `ultimoResultado`.
-   Gera um novo número aleatório para que o jogador não esteja tentando adivinhar o mesmo número novamente!

**Neste ponto você deve ter um jogo (simples) completamente funcional — parabéns!**

Tudo o que temos que fazer agora neste artigo é falar sobre alguns outros recursos importantes que você já viu, mesmo que não os tenha notado ainda.

### [Loops](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#loops)

Uma parte do código acima que precisamos olhar mais detalhadamente é o loop  [for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for). Loop é um conceito muito importante em programação, que permite a você continuar executando um pedaço do código repetidamente, até que determinada condição seja satisfeita.

Para começar, vá novamente até o  [console JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools)  do seu navegador, e insira o seguinte:

```
for (var i = 1 ; i < 21 ; i++) { console.log(i) }

```


O que aconteceu? Os números de 1 a 20 foram exibidos no seu console. Isso acontece por causa do loop. Um loop  `for`  utiliza a inserção de três valores (argumentos):

1.  **Um valor inicial**: Nesse caso estamos iniciando a contagem em 1, mas poderia ser qualquer outro número que quisesse utilizar. Você pode substituir  `i`  por qualquer número que quiser também, mas  `i`  é utilizado por convenção porque é curto e fácil de lembrar.
2.  **Uma condição de saída**: Aqui nós especificamos  `i < 21`  — o loop irá continuar rodando até que  `i`  não seja mais menor que 21. Quando  `i`  alcançar 21, o loop não será mais executado.
3.  **Incremento**: Nós especificamos  `i++`, que siginifica "adicione 1 à i". O loop irá rodar uma vez para cada valor de  `i`, até que  `i`  alcance o valor de 21 (como abordado acima). Nesse caso, nós estamos simplesmente imprimindo o valor de  `i`  no console em cada iteração usando  [`console.log()`](https://developer.mozilla.org/pt-BR/docs/Web/API/Console/log "console.log()").

Agora vamos olhar o loop em nosso jogo de adivinhar o número — o código seguinte pode ser encontrado dentro da função  `reiniciarJogo()`:

```
var reiniciarParas = document.querySelectorAll('.resultadoParas p');
for (var i = 0 ; i < reiniciarParas.length ; i++) {
  reiniciarParas[i].textContent = '';
}

```


Esse código cria uma variável contendo uma lista de todos os parágrafos dentro de  `<div class="resultadoParas">`  usando o método  [`querySelectorAll()`](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelectorAll "querySelectorAll()"), e então faz o loop em cada um, removendo o conteúdo de texto dos mesmos.

### [Uma pequena discussão sobre objetos](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#uma_pequena_discuss%C3%A3o_sobre_objetos)

Vamos adicionar uma melhoria final antes de chegarmos a essa discussão. Adicione a linha seguinte logo abaixo da linha  `var botaoReinicio;`  próximo ao topo do seu JavaScript, em seguida salve nosso arquivo:

```
campoPalpite.focus();

```


Essa linha usa o método  [`focus()`  (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus "Currently only available in English (US)")  para automaticamente colocar o cursor dentro campo de texto do  [`<input>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input)  assim que a página carrega, significando que o usuário já pode começar a digitar o primeiro palpite, e não precisa clicar no campo do formulário primeiro. É apenas uma pequena adição, mas melhora a usabilidade — dando ao usuário uma boa dica visual do que ele deve fazer para jogar o jogo.

Vamos analisar o que está acontencedo aqui com um pouco mais de detalhes. Em JavaScript, tudo é um objeto. Um objeto é uma coleção de funcionalidades relacionadas armazenadas em um único agrupamento. Você pode criar seus próprios objetos, mas isso é bastante avançado e nós não iremos abordar até mais tarde no curso. Por agora, vamos apenas discutir brevemente os objetos pré-construídos presentes em seu navegador, que lhe permite fazer várias coisas úteis.

Neste caso particular, nós primeiro criamos a variável  `campoPalpite`  que armazena uma referência ao campo de inserção de texto do formulário em nosso HTML — a linha seguinte pode ser achada entre nossas declarações de variáveis próximas ao topo:

```
var campoPalpite = document.querySelector('.campoPalpite');

```


Para pegar essa referência, usamos o método  [`querySelector()`](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector "querySelector()")  do objeto  [`document`](https://developer.mozilla.org/pt-BR/docs/Web/API/Document).  `querySelector()`  pega um pedaço de informação — um  [seletor CSS  (en-US)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors "Currently only available in English (US)")  que seleciona o elemento ao qual você quer referenciar.

Como agora  `campoPalpite`  contém referência ao elemento  [`<input>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), ele terá agora acesso a um número de propriedades (basicamente variáveis armazenadas dentro de objetos, sendo que alguns não podem ter seus valores alterados) e métodos (basicamente, funções armazenadas dentro de objetos). Um método disponível para elementos de inserção  `<input>`, é o  `focus()`, então agora podemos usar essa linha para focar o campo de inserção de texto:

```
campoPalpite.focus();

```


Variáveis que não contém referências a elementos de formulário não terão  `focus()`  disponível para elas. Por exemplo, a variável  `palpites`  contém referência de um elemento  [`<p>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/p), e  `contagemPalpites`  contém um número.

### [Brincando com objetos do navegador](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#brincando_com_objetos_do_navegador)

Vamos brincar um pouco com alguns objetos do navegador.

1.  Primeiro abra seu programa em um navegador.
2.  Em seguida, abra as  [ferramentas de desenvolvimento do navegador](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools), e certifique-se de que a aba do console JavaScript esteja aberta.
3.  Digite  `campoPalpite`  e o console irá lhe mostrar que a variável contém um elemento  [`<input>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input). Você também irá notar que o console completa automaticamente os nomes de objetos existentes dentro do ambiente de execução, incluindo suas variáveis!
    1.  Agora digite o seguinte:
        
        ```
        campoPalpite.value = 'Olá';
        
        ```
        
      
        
        A propriedade  `value`  representa o valor atual inserido no campo de texto. Você verá que inserindo esse comando, nós mudamos o valor desse objeto!
4.  Agora tente digitar  `palpites`  e pressione  _return_. O console irá mostrar que a variável contém um elemento  [`<p>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/p).
5.  Agora tente inserir a linha seguinte:
    
    ```
    palpites.value
    
    ```
    
  
    
    O navegador irá retornar  `undefined`, porque  `value`  não existe em parágrafos.
6.  Para mudar o texto dentro de um parágrafo, você precisa da propriedade  [`textContent`](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent "textContent"). Tente isso:
    
    ```
    palpites.textContent = 'Onde está meu parágrafo?';
    
    ```
    
  
    
7.  Agora algo divertido. Tente inserir as linhas abaixo, uma por uma:
    
    ```
    palpites.style.backgroundColor = 'yellow';
    palpites.style.fontSize = '200%';
    palpites.style.padding = '10px';
    palpites.style.boxShadow = '3px 3px 6px black';
    
    ```
    
  
    
    Cada elemento em uma página tem uma propriedade  `style`, que contém um objeto no qual estão inseridos em suas propriedades todos os estilos incorporados de CSS aplicados ao respectivo elemento. Isso nos permite configurar dinamicamente novos estilos CSS nos elementos usando JavaScript.

## [Finalizado por enquanto...](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#finalizado_por_enquanto)

Então é isso, para construir o exemplo — você chegou ao final, muito bem! Teste o resultado do seu código, ou  [jogue com nossa versão finalizada aqui](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Se você não conseguir fazer o exemplo funcionar, compare com o  [código fonte](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).


## Aula 3

## [Tipos de erros](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#tipos_de_erros)

De um modo geral, quando você faz algo errado no código, existem dois tipos principais de erros que você encontrará:

-   **Erros de sintaxe:**  são erros de ortografia em seu código que realmente fazem com que o programa não seja executado, ou pare de trabalhar parcialmente - você geralmente receberá algumas mensagens de erro também. Estes geralmente são adequados para consertar, desde que você esteja familiarizado com as ferramentas certas e saiba o que as mensagens de erro significam!
-   **Erros lógicos:**  são erros onde a sintaxe está realmente correta, mas o código não é o que você pretendia, o que significa que o programa é executado com sucesso, mas dá resultados incorretos. Muitas vezes, eles são mais difíceis de consertar do que erros de sintaxe, pois geralmente não há uma mensagem de erro resultante para direcioná-lo para a origem do erro.

Ok, então não é assim tão simples - há alguns outros diferenciadores à medida que você aprofunda. Mas as classificações acima serão bem úteis nesta fase inicial da sua carreira. Examinaremos esses dois tipos a seguir.

## [Um exemplo errôneo](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#um_exemplo_err%C3%B4neo)

Para começar, voltemos ao nosso jogo de adivinhação - porém desta vez estaremos explorando uma versão que tem alguns erros inseridos propositalmente. Vá até o Github e faça uma cópia local de  [jogo-numero-erros.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)  ([veja-o em execução aqui](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1.  Para começar, abra a cópia local dentro do seu editor de texto favorito, e em seu navegador.
2.  Tente jogar o jogo - você notará que, quando você pressiona o botão "Enviar palpite", ele não funciona!

> **Nota:**Talvez você tenha sua própria versão de exemplo do jogo que não funciona, e pode querer consertá-la! Nós ainda gostaríamos que você trabalhasse no artigo com a nossa versão, para que possa aprender as técnicas que estamos ensinando aqui. Daí então você pode voltar e tentar consertar seu exemplo.

Neste ponto, vamos consultar o console do desenvolvedor para ver se identificamos qualquer erro de sintaxe, e então tentar consertá-lo. Você irá aprender como, logo abaixo.

## [Consertando erros de sintaxe](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#consertando_erros_de_sintaxe)

Anteriormente no curso, nós fizemos você digitar alguns comandos simples de JavaScript no  [console JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools)  (se você não se lembra como, abra o link anterior). O que é ainda mais útil é o fato do console lhe mostrar mensagens de erro sempre que existir algo errado na sintaxe dentro do JavaScript enviado ao motor de JavaScript do navegador. Agora vamos à caça.

1.  Vá até a aba onde você tem aberto o arquivo  `jogo-numero-erros.html`  e abra o console JavaScript. Você deverá ver uma mensagem de erro sendo exibida:![](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong/nao-e-uma-funcao.png)
2.  Esse é um erro bem fácil de identifcar, e o navegador lhe fornece várias informações úteis para lhe ajudar (a captura de tela acima foi feita no Firefox, mas os outros navegadores oferecem informações similares). Da esquerda para a direita, nós temos:
    -   Um "x" laranja para indicar que esse é um erro.
    -   Uma mensagem de erro para indicar o que está errado: "TypeError: envioPalpite.addeventListener is not a function"
    -   Um link "Learn More" que encaminha à uma página no MDN docs explicando o que esse erro significa em uma quantidade enorme de detalhes.
    -   O nome do arquivo JavaScript, que direciona à aba Debugger das ferramentas de desenvolvimento. Se você clicar nesse link, verá a linha exata onde o erro está destatacada.
    -   O número da linha onde o erro se encontra, e o número do caractere na linha onde o erro é encontrado primeiro. Neste caso nós temos, linha 86, caractere número 3.
3.  Se olharmos para a linha 86 em nosso nosso código de código, vamos encontrar a seguinte linha:
    
    ```
    envioPalpite.addeventListener('click', conferir Palpite);
    
    ```
    
  
    
4.  O erro diz o seguinte "envioPalpite.addeventListener is not a function", que significa envioPalpite.addeventListener não é uma funçao. Então provavelmente digitamos algo errado. Se você não estiver certo da digitação correta de parte da sintaxe, é uma boa ideia procurar a funcionalidade no MDN docs. A melhor forma de fazer isso atualmente é pesquisar por "mdn  _nome-da-funcionalidade_" em seu mecanismo de buscas favorito. Aqui está um atalho para te salvar algum tempo nesse caso:  [`addEventListener()`](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener).
5.  Então, olhando nessa essa página, o erro parece ser termos digitado o nome da função errado! Lembre-se de que o JavaScript diferencia letras maiúsculas de minúsculas, então qualquer diferença na digitação ou no uso de letras maiúsculas irá causar um erro. Alterar  `addeventListener`  para  `addEventListener`  deverá corrigir esse erro. Faça essa alteração no código do seu arquivo.

**Nota:**  Veja nossa página de referência  [TypeError: "x" is not a function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Not_a_function)  para mais detalhes sobre esse erro.

### [Erros de sintaxe - segundo round](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#erros_de_sintaxe_-_segundo_round)

1.  Salve o arquivo e atualize a aba do navegador, e você poderá ver que o erro foi corrigido.
2.  Agora se você tentar enviar um palpite e pressionar o botão !Enviar palpite" você verá... outro erro!![](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong/variavel-e-nula.png)
3.  Dessa vez o erro informado é "TypeError: baixoOuAlto is null", na linha 78.
    
    **Nota:**  [`Null`](https://developer.mozilla.org/en-US/docs/Glossary/Null)  é um valor especial que significa "nada", ou "sem valor". Então  `baixoOuAlto`  foi declarado e inicializado, mas não com algum valor significativo — não possui nenhum caractere ou valor.
    
    **Nota:**  Esse erro não apareceu assim que a página foi carregada porque esse erro ocorreu dentro de uma função (dentro do bloco  `conferirPalpite() { ... }`  ). Como você irá aprender com mais detalhes no nosso artigo de funções mais tarde, o código localizado dentro de funções roda em um escopo separado do código presente fora das funções. Nesse caso, o código não estava rodando e o erro não estava aparecendo até a função  `conferirPalpite()`  ser executada na linha 86.
    
4.  Dê uma olhada na linha 78, e você verá o seguinte código:
    
    ```
    baixoOuAlto.textContent = 'Seu palpite foi muito alto!';
    
    ```
    
  
    
5.  Essa linha está tentando definir a propriedade  `textContent`  (conteúdo de texto) da variável  `baixoOuAlto`  como uma sequência de texto, mas isso não está funcionando porque  `baixoOuAlto`  não contém o que deveria conter. Vamos ver o porquê — tente localizar outras instâncias de  `baixoOuAlto`  no código. A instância que aparece primeiro no código JavaScript é na linha 48:
    
    ```
    var baixoOuAlto = document.querySelector('baixoOuAlto');
    
    ```
    
  
    
6.  Nesse ponto estamos tentando fazer com que a variável contenha uma referência a um elemento no documento HTML. Vamos conferir se o valor é  `null`  (nulo) depois que essa linha é executada. Adicione o seguinte código na linha 49:
    
    ```
    console.log(baixoOuAlto);
    
    ```
    
  
    
    **Nota:**  [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/console/log)  é uma função de debugging (correção de erros) realmente útil que exibe um valor na tela do console. Então ela irá imprimir o valor da variável  `baixoOuAlto`  na tela do console assim que tentarmos defini-la na linha 48.
    
7.  Salve o arquivo e o atualize no navegador, e você deverá ver agora o resultado do  `console.log()`  na tela do seu console.![](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong/console-log-saida.png)Pois bem, nesse ponto o valor de  `baixoOuAlto`  e  `null`, então definitivamente há um problema com a linha 48.
8.  Vamos pensar em qual poderia ser o problema. A linha 48 está usando um método  [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)  para pegar a referência do elemento selecionado com um seletor CSS selector (_CSS selector_). Olhando mais acima no nosso código, podemos encontrar o parágrafo em questão:
    
    ```
    <p class="baixoOuAlto"></p>
    
    ```
    
  
    
9.  Então nós precisamos de um seletor de classe aqui, que começa com um ponto (.), mas o seletor passado pelo método  `querySelector()`  na linha 48 não tem o ponto. Esse pode ser o problema! Tente mudar  `baixoOuAlto`  para  `.baixoOuAlto`  na linha 48.
10.  Tente salvar o arquivo e atualizá-lo no navegador de novo, e a sua declaração  `console.log()`  deverá retornar o elemento  `<p>`  que queremos. Ufa! Outro erro resolvido! Você pode deletar a linha do seu  `console.log()`  agora, ou mantê-la para referência posterior — a escolha é sua.

**Nota:**  Veja nossa página de referência  [TypeError: "x" is (not) "y"](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Unexpected_type)  para mais detalhes sobre esse erro.

### [Erros de sintaxe - terceiro round](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#erros_de_sintaxe_-_terceiro_round)

1.  Agora se você tentar jogar novamente, você deve ter mais sucesso — o jogo deve continuar normalmente, até você terminar, ou adivinhando o número, ou ficando sem mais chances.
2.  Nesse ponto, o jogo falha mais uma vez, e o mesmo erro do início é exibido — "TypeError: botaoReinicio.addeventListener is not a function"! No entanto, dessa vez é listado vindo da linha 94.
3.  Olhando a linha 94, é fácil de ver que nós cometemos o mesmo erro novamente. Só precisamos alterar mais uma vez  `addeventListener`  para  `addEventListener`. Faça isso.

## [Um erro de lógica](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#um_erro_de_l%C3%B3gica)

Nesse ponto, o jogo deve rodar normalmente, porém depois de jogá-lo algumas vezes você irá notar que o número "aleatório" que você tem que adivinhar é sempre igual a 1. Definitivamente não é como queremos que o jogo funcione!

Há sem dúvida um problema na lógica do jogo em algum lugar — o jogo não está retornando nenhum erro;simplesmente não está funcionando corretamente.

1.  Procure pela variável  `numeroAleatorio`, e as linhas onde o número aleatório é definido primeiro. A instância que armazena o número aleatório que queremos adivinhar no começo do jogo deve estar na linha 44 ou próximo a ela:
    
    ```
    var numeroAleatorio = Math.floor(Math.random()) + 1;
    
    ```
    
  
    
2.  E a linha que gera o número aleatório antes de cada jogo subsequente está na linha 113, ou próximo a ela:
    
    ```
    numeroAleatorio = Math.floor(Math.random()) + 1;
    
    ```
    
  
    
3.  Para checar se essas linhas são mesmo o problema, vamos recorrer ao nosso amigo  `console.log()`  de novo — insira a seguinte linha diretamente abaixo de cada uma das duas linhas:
    
    ```
    console.log(numeroAleatorio);
    
    ```
    
  
    
4.  Salve o arquivo e atualize o navegador, então jogue algumas vezes — você verá que o  `numeroAleatorio`  é igual a 1 cada vez em que é exibido no console.

### [Trabalhando através da lógica](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#trabalhando_atrav%C3%A9s_da_l%C3%B3gica)

Para consertar isso, vamos considerar como essa linha está trabalhando. Primeiro, nós invocamos  [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), que gera um número decimal aleatório entre 0 e 1, ex. 0.5675493843.

```
Math.random()

```


Em seguida, passamos o resultado invocando  `Math.random()`  através de  [`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), que arredonda o número passado para o menor número inteiro mais próximo. E então adicionamos 1 ao resultado:

Math.floor(Math.random()) + 1

Arredondando um número decimal aleatório entre 0 e 1 para baixo irá sempre retornar 0, então adicionando 1 a ele sempre retornará 1. Precisamos multiplicar o número aleatório por 100 antes de o arredondarmos para baixo. O código seguinte nos daria um número aleatório entre 0 and 99:

```
Math.floor(Math.random()*100);

```


Por isso, queremos adicionar 1, para nos dar um número aleatório entre 1 e 100:

```
Math.floor(Math.random()*100) + 1;

```


Tente atualizar as duas linhas dessa forma, então salve e atualize o navegador — o jogo deve agora funcionar como nós queremos que funcione!

## [Outros erros comuns](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#outros_erros_comuns)

Existem outros erros comuns com os quais você irá esbarrar em seu código. Essa seção destaca a maioria deles.

### [_SyntaxError: missing ; before statement_](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#syntaxerror_missing_before_statement)

Erro de sintaxe: faltando ";" antes da declaração. Esse erro geralmente significa que você deixou de inserir um ponto e vírgula ao final de uma de suas linhas de código, mas algumas vezes pode ser mais crítico. Por exemplo, se mudarmos essa linha (número 58) dentro da função  `conferirPalpite()`:

```
var palpiteUsuario = Number(campoPalpite.value);

```


para

```
var palpiteUsuario === Number(campoPalpite.value);

```


Exibe esse erro porque pensa que você está fazendo algo diferente. Você deve se certificar de não misturar o operador de atribuição (`=`) — que configura uma variável para ser igual a determinado valor — com o operador de igualdade restrita (`===`), que testa se um valor é exatamente igual a outro, e retorna um resultado  `true`/`false`  (verdadeiro ou falso).

**Nota:**  Veja nossa página de referência  [SyntaxError: missing ; before statement](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement)  para mais detalhes sobre esse erro.

### [O programa sempre diz que você ganhou, independentemente do palpite que insira](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#o_programa_sempre_diz_que_voc%C3%AA_ganhou_independentemente_do_palpite_que_insira)

Isso pode ser outro sintoma de confusão entre o operador de atribuição e o operador de igualdade restrita. Por exemplo, se nós quiséssemos essa linha dentro de  `conferirPalpite()`:

```
if (palpiteUsuario === numeroAleatorio) {

```


para

```
if (palpiteUsuario = numeroAleatorio) {

```


o teste retornaria sempre  `true`  (verdadeiro), causando o programa a reportar que o jogo foi vencido. Tome cuidado!

### [_SyntaxError: missing ) after argument list_](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#syntaxerror_missing_after_argument_list)

Erro de sintaxe: faltando ")" depois de listar uma declaração. Esse é bem simples — geralmente significa que deixamos de fechar o parênteses no final ao invocar uma função/método.

**Nota:**  Veja nossa página de referência  [SyntaxError: missing ) after argument list](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list)  para mais detalhes sobre o erro.

### [_SyntaxError: missing : after property id_](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#syntaxerror_missing_after_property_id)

Erro de sintaxe: faltando ":" depois da propriedade id. Esse erro geralmente se relaciona à formação incorreta de um objeto de JavaScript, mas nesse caso o obtivemos alterando:

```
function conferirPalpite() {

```


para

```
function conferirPalpite( {

```


Isso levou o navegador a pensar que estávamos tentando passar todo o conteúdo da função como se fosse um argumento dessa função. Seja cuidadoso com esses parênteses!

### [_SyntaxError: missing } after function body_](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#syntaxerror_missing_after_function_body)

Erro de sintaxe: faltando "}" depois do corpo da função. Isso é fácil — geralmente significa que você deixou de colocar uma das chaves de uma função ou de uma estrutura condicional. Nós obtemos esse erro deletando uma das chaves de fechamento próximas ao final da função  `conferirPalpite()`.

### [_SyntaxError: expected expression, got 'string'_  ou  _SyntaxError: unterminated string literal_](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#syntaxerror_expected_expression_got_string_ou_syntaxerror_unterminated_string_literal)

Erro de sintaxe: esperado uma expressão, obtido uma 'string' e Erro de sintaxe: string literal não terminada. Esses erros geralmente significam que você deixou de colocar aspas no início ou no final da declaração de uma cadeia de texto. No primeiro erro acima, '_string'_  seria substituído pelo(s) caractere(s) encontrado(s) pelo navegador ao invés da aspa no início de uma cadeia de texto. O segundo erro quer dizer que a cadeia de texto não foi finalizada com o caractere de aspa.

Para todos esses erros, pense em como nós abordamos os exemplos em que olhamos no passo a passo. Quando um erro surge, olha o número da linha que é informado, vá até essa linha e veja se consegue localizar o que há de errado. Mantenha em mente que o erro não estará necessariamente nessa linha, e também que o erro pode não ter sido causado exatamente pelo mesmo problema que citamos acima!

**Nota:**  Veja nossas páginas de referência  [SyntaxError: Unexpected token](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Unexpected_token)  e  [SyntaxError: unterminated string literal](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal)  para mais detalhes sobre esses erros.

## [Sumário](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#sum%C3%A1rio)

Então aqui temos, o básico de como resolver erros em programas simples de JavaScript. Não será sempre tão fácil de solucionar o que está errado em seu código, mas pelo menos isso irá te poupar algumas horas de sono e lhe permitir progredir um pouco mais rápido quando as coisas não saírem certas no início da sua jornada de aprendizado.

## Aula 4

## [Ferramentas que você precisa](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#ferramentas_que_voc%C3%AA_precisa)

Ao longo deste artigo, pediremos que você digite linhas de código para testar seu entendimento do conteúdo. Se você estiver utilizando um navegador em um computador, o melhor lugar para digitar seus código de exemplos é o console JavaScript do seu navegador (veja o artigo  [O que são as ferramentas de desenvolvimento do navegador](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools)  para mais informações sobre como acessar essa ferramenta).

No entanto, nós também providenciamos um simples console JavaScript incorporado à página logo abaixo para que você inserir o código, caso não esteja usando um navegador com um console JavaScript facilmente disponível, ou se achar o console incorporado mais confortável.

## [O que é uma variável?](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#o_que_%C3%A9_uma_vari%C3%A1vel)

Uma variável é um container para um valor, como um número que podemos usar em uma operação de adição, ou uma sequência de texto que possamos usar como parte de uma oração. Mas uma coisa especial a respeito das variáveis é que seu conteúdo pode mudar. Vamos ver um exemplo simples:

```
<button>Aperte-me</button>

```


```
var button = document.querySelector('button');

button.onclick = function() {
  var nome = prompt('Qual é o seu nome?');
  alert('Olá ' + nome + ', é um prazer te ver!');
}

```


Nesse exemplo, apertar o botão executa algumas linhas de código. A primeira linha exibe uma caixa pop-up na tela que pede ao leitor para inserir o seu nome, e então armazena o valor na variável. A segunda linha exibe uma mensagem de boas vindas que inclui seu nome, obtido do valor da variável.

Para entender porque isso é útil, vamos pensar sobre como nós escreveríamos esse exemplo sem usar uma variável. Iria acabar se parecendo com algo do tipo:

var nome = prompt('Qual é o seu nome?');

if (nome === 'Adão') {
  alert('Olá Adão, é um prazer te ver!');
} else if (nome === 'Alan') {
  alert('Olá Alan, é um prazer te ver!');
} else if (nome === 'Bella') {
  alert('Olá Bella, é um prazer te ver!');
} else if (nome === 'Bianca') {
  alert('Olá Bianca, é um prazer te ver!');
} else if (nome === 'Chris') {
  alert('Olá Chris, é um prazer te ver !');
}

// ... e assim por diante ...

Você talvez não entenda totalmente a sintaxe que estamos usando (ainda!), mas deve ter pegado a ideia — se nós não tivermos variáveis disponíveis teríamos que implementar um bloco de código gigantesco para conferir qual era o nome inserido, e então exibir a mensagem apropriada para aquele nome. Isso é obviamente muito ineficiente (o código é muito maior, mesmo para apenas quatro opções de nome), e simplesmente não funcionaria — você não poderia armazenar todas as possíveis opções de nome.

Variáveis simplesmente fazem sentido, e a medida que você for aprendendo mais sobre JavaScript elas começarão a se tornar uma coisa natural.

Outra coisa especial sobra as variáveis é que elas podem conter praticamente qualquer coisa — não apenas cadeias de texto e números. Variáveis também podem conter dados complexos e até mesmo funções completas para fazer coisas incríveis. Você irá aprender mais sobre isso a medida que continuarmos.

**Nota:**  Perceba que dissemos que as variáveis contém valores. Essa é uma distinção importante a se fazer. Elas não são os valores; e sim os containers para eles. Você pode pensar nelas sendo pequenas caixas de papelão nas quais você pode guardar coisas..

![](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables/boxes.png)

## [Declarando uma variável](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#declarando_uma_vari%C3%A1vel)

Para usar uma variável primeiro tem que criá-la — mais precisamente, chamamos isso de declarar a variável. Para fazê-lo digitamos a palavra chave  `var`  seguido do nome que desejamos dar à variável:

```
var meuNome;
var minhaIdade;

```


Aqui, estamos criando duas variáveis chamadas  `meuNome`  e  `minhaIdade`. Tente agora digitar essas linhas no console do seu navegador. Depois disso, tente criar uma variável (ou duas) com suas próprias escolhas de nomes.

**Nota:**  No JavaScript, todas as intruções em código deve terminar com um ponto e vírgula (`;`) — seu código pode até funcionar sem o ponto e vírgula em linhas únicas, mas provavelmente não irá funcionar quando estiver escrevendo várias linhas de código juntas. Tente pegar o hábito de sempre incluir o ponto e vírgula.

Você pode testar se os valores agora existem no ambiente de execução digitando apenas os nomes das variáveis, ex.:

```
meuNome;
minhaidade;

```


Elas atualmente não possuem valor; são containers vazios. Quando você insere o nome de uma variável, você deve obter em retorno ou um valor  `undefined`  (indefinido), ou se a variável não existir, você recebe uma mensagem de erro — tente digitar:

```
scoobyDoo;

```


**Nota:**  Não confunda uma variável que existe mas não tenho valor definido com uma variável que não existe — são coisas bem diferentes.

## [Inicializando uma variável](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#inicializando_uma_vari%C3%A1vel)

Uma vez que você declarou uma variável, você pode inicializá-la com um valor. Você faz isso digitando o nome da variável, seguido do sinal de igual (`=`) e o valor que deseja atribuir a ela. Por exemplo:

```
meuNome = 'Chris';
minhaIdade = 37;

```


Tente voltar ao console agora e digitar essas linhas acima. Você deve ver o valor que atribuiu à variável retornado no console confirmando-o, em cada caso. De novo, você pode retornar os valores de suas variáveis simplesmente digitando seus nomes no console — tente isso novamente:

```
meuNome;
minhaIdade;

```


Você pode declarar e inicializar uma variável ao mesmo tempo, assim:

```
var meuNome = 'Chris';

```


Isso provavelmente é como irá fazer na maioria das vezes, já que é mais rápido do que fazer as duas ações em duas linhas separadas.

## [A diferença entre var e let](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#a_diferen%C3%A7a_entre_var_e_let)

Agora você pode estar pensando "por que precisamos de duas palavras-chave para definir variáveis? Por que  `var`  _e_  `let`?".

As razões são um tanto históricas. Quando o JavaScript foi criado, havia apenas  `var`. Isso funciona basicamente bem na maioria dos casos, mas tem alguns problemas na maneira como funciona — seu design pode ser confuso ou totalmente irritante. Portanto,  `let`  foi criada nas versões modernas de JavaScript, uma nova palavra-chave para criar variáveis que funcionam de maneira um pouco diferente para  `var`, corrigindo seus problemas no processo.

Algumas diferenças simples são explicadas abaixo. Não abordaremos todas as diferenças agora, mas você começará a descobri-las à medida que aprender mais sobre JavaScript (se realmente quiser ler sobre elas agora, fique à vontade para conferir nossa  [página de referência let](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let)).

Para começar, se você escrever um programa JavaScript de várias linhas que declare e inicialize uma variável, poderá realmente declarar uma variável com  `var`  depois de inicializá-la e ainda funcionará. Por exemplo:

```
meuNome = 'Chris';

function logNome() {
  console.log(meuNome);
}

logNome();

var meuNome;

```


**Nota:**  Isso não funcionará ao digitar linhas individuais em um console JavaScript, apenas ao executar várias linhas de JavaScript em um documento da web.

Isso funciona por causa do  **hoisting**  — leia  [var hoisting](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/var#var_hoisting)  pra mais detalhes.

Hoisting não funciona mais com  `let`. Se mudássemos de  `var`  para  `let`  no exemplo acima, teríamos um erro. Isso é bom — declarar uma variável depois que você a inicializa resulta em código confuso e difícil de entender.

E depois, ao usar  `var`, você pode declarar a mesma variável quantas vezes quiser, mas com  `let`  você não consegue. Isso pode funcionar:

```
var meuNome = 'Chris';
var meuNome = 'Bob';

```


Mas isso geraria um erro na segunda linha:

```
let meuNome = 'Chris';
let meuNome = 'Bob';

```


Você precisaria fazer assim:

```
let meuNome = 'Chris';
meuNome = 'Bob';

```


Novamente, essa é uma decisão sensata da linguagem. Não há razão para redeclarar variáveis — isso apenas torna as coisas mais confusas.

Por esses motivos e mais, recomendamos que você use  `let`  o máximo possível em seu código, em vez de  `var`. Não há motivo para usar  `var`, a menos que você precise oferecer suporte para versões antigas do Internet Explorer com seu código (ele não suporta  `let`  até a versão 11; o navegador mais moderno do Windows, o Edge, suporta  `let`).

## [Atualizando uma variável](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#atualizando_uma_vari%C3%A1vel)

Uma vez que uma tenha um valor atribuido, você pode atualizar esse valor simplesmente dando a ela um valor diferente. Tente inserir as seguintes linhas no seu console:

```
meuNome = 'Bob';
minhaIdade = 40;

```


### [Um adendo sobre regras de nomeação de variáveis](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#um_adendo_sobre_regras_de_nomea%C3%A7%C3%A3o_de_vari%C3%A1veis)

Você pode chamar uma variável praticamente qualquer nome que queira, mas há limitações. Geralmente você deve se limitar a utilizar somente caracteres latinos (0-9, a-z, A-Z) e o caractere underline ( _ ).

-   Você não deve usar outros caracteres porque eles podem causar erros ou ser difíceis de entender por uma audiência internacional.
-   Não use underline no início do nome de variáveis — isso é utilizado em certos construtores JavaScript para significar coisas específicas, então pode deixar as coisas confusas.
-   Não use número no início do nome de variáveis. Isso não é permitido e irá causar um erro.
-   Uma conveção segura e se ater é a chamada  ["lower camel case"](https://pt.wikipedia.org/wiki/CamelCase), onde você junta várias palavras, usando minúscula para a primeira palavra inteira e, em seguida, maiusculiza a primeira letra das palavras subsequentes. Temos utilizado esse procedimento para os nomes das nossas variáveis nesse artigo até aqui.
-   Faça nomes de variáveis intuitivos, para que descrevam o dado que ela contém. Não use letras ou números únicos, ou frases muito longas.
-   As variáveis diferenciam letras maiúsculas e minúsculas — então  `minhaidade`  é uma variável diferente de  `minhaIdade`.
-   Um último ponto — você também precisa evitar utilizar palavras reservadas pelo JavaScript como nome para suas variáveis — com isso, queremos dizer as palavras que fazem parte da sintaxe do JavaScript! Então você não pode usar palavras como  `var`,  `function`,  `let`  e  `for`  como nome de variáveis. Os navegadores vão reconhecê-las como itens de código diferentes e, portanto, você terá erros.

**Nota:**  Você pode encontrar uma lista bem completa de palavras reservadas para evitar em  [Gramática léxica — Palavras-chave](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#palavras-chave).

Exemplos de bons nomes:

idade
minhaIdade
inicio
corInicial
valorFinalDeSaida
audio1
audio2

Exemplos ruins de nomes:

1
a
_12
minhaidade
MINHAIDADE
var
Document
skjfndskjfnbdskjfb
esseeumnomedevariavelbemlongoeestupido

Tente criar mais algumas variáveis agora, com a orientação acima em mente.

## [Tipos de variáveis](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#tipos_de_vari%C3%A1veis)

Existem alguns diferentes tipos de dados que podemos armazenar em variáveis. Nessa seção iremos descrevê-los brevemente, e então em artigos futuros você aprenderá sobre eles em mais detalhes.

Até agora nós vimos os dois primeiros, mas há outros.

### [Números](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#n%C3%BAmeros)

Você pode armazenar números em variáveis, tanto números inteiros, como por exemplo 30 (também chamados de  _integers_) como números decimais, por exemplo 2.456 (também chamados de  _floats_  ou  _floating point numbers_). Você não precisa declarar tipos de variáveis no JavaScript, diferentemente de outras linguagens de programação. Quando você atribui a uma variável o valor em número, você não inclui as aspas:

```
var minhaIdade = 17;

```


### [_Strings_  (cadeias de texto)](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#strings_cadeias_de_texto)

_Strings_  são sequências de texto. Quando você dá a uma variável um valor em texto (_string_), você precisa envolver o texto em aspas simples ou duplas; caso contrário, o JavaScript vai tentar interpretá-lo como sendo outro nome de variável.

```
var despedidaGolfinho = 'Até logo e obrigado por todos os peixes!';

```


### [_Booleans_  (boleanos)](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#booleans_boleanos)

_Booleans_  são valores verdadeiro/falso (_true/false_) — eles podem ter dois valores,  `true`  (verdadeiro) ou  `false`  (falso). São geralmente usados para verificar uma condição, que em seguida o código é executado apopriadamente. Por exemplo, um caso simples seria:

```
var estouVivo = true;

```


Enquanto na realidade seria utlizado mais da seguinte forma:

```
var teste = 6 < 3;

```


Esse exemplo está usando o operador "menor que" (`<`) para testar se 6 é menor que 3. Como você pode esperar, irá retornar  `false`  (falso), porque 6 não é menor que 3! Você aprenderá mais sobre tais operadores mais tarde no curso.

### [_Arrays_](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#arrays)

Um array é um único objeto que contém valores múltiplos inseridos entre colchetes e separados por vírgulas. Tente inserir as seguintes linhas de código no seu console:

```
var meuNomeArray = ['Chris', 'Bob', 'Jim'];
var meuNumeroArray = [10,15,40];

```


Uma vez que esses arrays estejam definidos, você pode acessar cada um de seus valores através de sua localização dentro do array. Tente essas linhas:

```
meuNomeArray[0]; // deve retornar 'Chris'
meuNumeroArray[2]; // deve retornar 40

```


Os colchetes especificam um valor do índice correspondente à posição do valor que você deseja retornado. Você talvez tenha notado que os arrays em JavaScript são indexados a partir do zero: o primeiro elemento está na posíção 0 do índice.

Você aprenderá mais sobre arrays em um artigo futuro.

### [Objetos](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#objetos)

Em programação, um objeto é uma estrutura de código que representa um objeto da vida real. Você pode ter um simples objeto que representa um estacionamento de carro contendo informações sobre sobre sua largura e comprimento, ou você poderia ter um objeto que representa uma pessoa, e contém dados sobre seu nome, altura, peso, que idioma ela fala, como dizer olá a ela, e mais.

Tente inserir a seguinte linha em seu console:

```
var cachorro = { nome : 'Totó', raca : 'Dálmata' };

```


Para obter a informação armazenada no objeto, você pode usar a seguinte sintaxe:

```
cachorro.nome

```


Nós não iremos ver mais sobre objetos por agora — você pode aprender mais sobre eles em um artigo futuro.

## [Digitação permissiva](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#digita%C3%A7%C3%A3o_permissiva)

JavaScript é uma "dynamically typed language", o que significa que, diferente de outras linguagens, você não precisa especificar que tipo de dados uma variável irá conter (ex.: números, cadeias de texto, arrays, etc).

Por exemplo, se você declarar uma variável e dar a ela um valor encapsulado em aspas, o navegador irá tratar a variável como sendo uma  _string_  (cadeia de texto):

```
var minhaString = 'Olá';

```


Irá continuar sendo uma  _string_, mesmo que dentro das apas contenha um número, então seja cuidadoso:

```
var meuNumero = '500'; // opa, isso continua sendo uma string
typeof(meuNumero);
meuNumero = 500; // bem melhor — agora isso é um número
typeof(meuNumero);

```


Tente inserir as quatro linhas acima em seu console uma por uma, e veja quais são os resultados. Você notará que estamos usando uma função especial chamada  `typeof()`  — ela irá retornar o tipo de dado da variável que você passar. Da primeira vez que for executada, deve retornar  `string`, como naquele ponto a variável  `meuNumero`  contém uma  _string_,  `'500'`. Dê uma olhada e veja o que é retornado da segunda vez que você a utilizar.

## [Constants em JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#constants_em_javascript)

Muitas linguagens de programação têm o conceito de  _constant_  — um valor que uma vez declarado não pode ser alterado. Há muitas razões pelas quais você deseja fazer isso, desde segurança (se um script de terceiros alterou esses valores, poderia causar problemas) até a depuração e a compreensão do código (é mais difícil alterar acidentalmente valores que não devem ser alterados e bagunçar as coisas).

Nos primeiros dias do JavaScript, não existiam  _constants_. No JavaScript moderno, temos a palavra-chave  `const`, que nos permite armazenar valores que nunca podem ser alterados:

```
const diasNaSemana = 7;
const horasNoDia = 24;

```


`const`  funciona exatamente da mesma maneira que  `let`, exceto que você não pode atribuir um novo valor a  `const`. No exemplo a seguir, a segunda linha geraria um erro:

```
const diasNaSemana = 7;
diasNaSemana = 8;

```


## [Teste suas habilidades!](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#teste_suas_habilidades!)

Você chegou ao final deste artigo, mas consegue se lembrar das informações mais importantes? Você pode encontrar alguns testes adicionais para verificar se você reteve essas informações antes de prosseguir — veja  [Teste suas habilidades: variáveis](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables).

## [Sumário](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables#sum%C3%A1rio)

Por agora você deve saber razoavelmente sobre variáveis JavaScript e como criá-las. No próximo artigo Vamos focar nos números em mais detalhes, vendo como fazer matemática básica no JavaScript.

## Aula 5

## [Todo mundo ama matemática](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math#todo_mundo_ama_matem%C3%A1tica)

Ok, talvez não. Alguns de nós gostam de matemática, alguns de nós tem a odiado desde que tivemos que aprender a tabuada de multiplicação e divisão na escola, e alguns de nós estão em algum lugar no meio dos dois cenários. Mas nenhum de nós pode negar que a matemática é uma parte fundamental da vida sem a qual não poderíamos ir muito longe. Isso é especialmente verdadeiro quando estamos aprendendo a programar em JavaScript (ou em qualquer outra linguagem, diga-se de passagem) — muito do que fazemos se baseia no processamento de dados numéricos, cálculo de novos valores, etc. Assim você não ficará surpreso em aprender que o JavaScript tem uma configuração completa de funções matemáticas disponíveis.

Este artigo discute apenas as partes básicas que você precisa saber agora.

### [Tipos de números](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math#tipos_de_n%C3%BAmeros)

Em programação, até mesmo o humilde sistema de números decimais que todos nós conhecemos tão bem é mais complicado do que você possa pensar. Usamos diferentes termos para descrever diferentes tipos de números decimais, por exemplo:

-   **Integers**  (inteiros) são números inteiros, ex. 10, 400 ou -5.
-   **Números de ponto flutuante**  _(floats)_  tem pontos e casas decimais, por exemplo 12.5 e 56.7786543.
-   **Doubles**  são tipos de  _floats_  que tem uma precisão maior do que os números de ponto flutuante padrões (significando que eles são mais precisos, possuindo uma grande quantidade de casas decimais).

Temos até mesmo diferentes tipos de sistemas numéricos! O decimal tem por base 10 (o que significa que ele usa um número entre 0–9 em cada casa), mas temos também algo como:

-   **Binário**  — A linguagem de menor level dos computadores; 0s e 1s.
-   **Octal**  — Base 8, usa um caractere entre 0–7 em cada coluna.
-   **Hexadecimal**  — Base 16, usa um caractere entre 0–9 e depois um entre a–f em cada coluna. Você pode já ter encontrado esses números anteriormente, trabalhando com  [cores no CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#valores_hexadecimais).

**Antes de se preocupar com seu cérebro estar derretendo, pare agora mesmo!**  Para um começo, vamos nos ater aos números decimais no decorrer desse curso; você raramente irá se deparar com a necessidade de começar a pensar sobre os outros tipos, se é que vai precisar algum dia.

A segunda boa notícia é que, diferentemente de outras linguagens de programação, o JavaScript tem apenas um tipo de dados para números, você advinhou,  [`Number`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number). Isso significa que qualquer que seja o tipo de números com os quais você está lidando em JavaScript, você os manipula do mesmo jeito.

### [Tudo é número para mim](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math#tudo_%C3%A9_n%C3%BAmero_para_mim)

Vamos brincar rapidamente com alguns números para nos familiarizarmos com a sintaxe básica que precisamos. Insira os comandos listados abaixo em seu  [console JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools), ou use o console simples incorporado abaixo, se preferir.

**[Abra em uma nova janela](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/)**

1.  Primeiramente, vamos declarar duas variáveis e as inicializar com um  _integer_  e um  _float_, respectivamente, então digitaremos os nomes das variáveis para verificar se está tudo em ordem:
    
    ```
    var meuInt = 5;
    var meuFloat = 6.667;
    meuInt;
    meuFloat;
    
    ```
    
  
    
2.  Valores numéricos são inseridos sem aspas — tente declarar e inicializar mais duas variáveis contendo números antes de seguir em frente.
3.  Agora vamos checar se nossas duas variáveis originais são do mesmo tipo de dados. Há um operador chamado  [`typeof`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)  no JavaScript que faz isso. Insira as duas linhas conforme mostradas abaixo:
    
    ```
    typeof meuInt;
    typeof meuFloat;
    
    ```
    
  
    
    Você deve obter  `"number"`  de volta nos dois casos — isso torna as coisas muito mais fáceis para nós do que se diferentes tipos de números tivessem diferentes tipos de dados, e tivéssemos que lidar com eles em diferentes maneiras. Ufa!

## [Operadores aritméticos](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math#operadores_aritm%C3%A9ticos)

São os operadores que utilizamos para fazer as operações aritiméticas básicas:

Operador

Nome

Propósito

Exemplo

`+`

Adição

Adiciona um número a outro.

`6 + 9`

`-`

Subtração

Subtrai o número da direita do número da esquerda.

`20 - 15`

`*`

Multiplicação

Multiplica um número pelo outro.

`3 * 7`

`/`

Divisão

Divide o número da esquerda pelo número da direita.

`10 / 5`

`%`

Restante  _(Remainder_  - as vezes chamado de modulo)

Retorna o resto da divisão em números inteiros do número da esquerda pelo número da direita.

`8 % 3`  (retorna 2; como três cabe duas vezes em 8, deixando 2 como resto.)

**Nota:**  Você verá algumas vezes números envolvidos em aritimética chamados de  operandos.

Nós provavelmente não precisamos ensinar a você como fazer matemática básica, mas gostaríamos de testar seu entendimento da sintaxe envolvida. Tente inserir os exemplos abaixo no seu  [console JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools), ou use o console incorporado visto anteriormente, se preferir, para familiarizar-se com a sintaxe.

1.  Primeiro tente inserir alguns exemplos simples por sua conta, como
    
    ```
    10 + 7
    9 * 8
    60 % 3
    
    ```
    
  
    
2.  Você pode tentar declarar e inicializar alguns números dentro de variáveis, e tentar usá-los nas operações — as variáveis irão se comportar exatamente como os valores que elas armazenam para a finalidade das operações. Por exemplo:
    
    ```
    var num1 = 10;
    var num2 = 50;
    9 * num1;
    num2 / num1;
    
    ```
    
  
    
3.  Por último, nesta seção, tente inserir algumas expressões mais complexas, como:
    
    ```
    5 + 10 * 3;
    num2 % 9 * num1;
    num2 + num1 / 8 + 2;
    
    ```
    
  
    

Alguns dos exemplos do último bloco podem não ter retornado os valores que você estava esperando; a seção abaixo pode lhe explicar o porquê.

### [Precedência de operador](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math#preced%C3%AAncia_de_operador)

Vamos olhar para o último exemplo, assumindo que  `num2`  guarda o valor 50 e  `num1`  possui o valor 10 (como iniciado acima):

```
num2 + num1 / 8 + 2;

```


Como um ser humano, talvez você leia isso como  _"50 mais 10 é igual a 60"_, depois  _"8 mais 2 é igual a 10"_, e então  _"60 dividido por 10 é igual a 6"_.

No entanto seu navegador vai ler  _"10 dividido por 8 é igual a 1.25"_, então  _"50 mais 1.25 mais 2 é igual a 53.25"_.

Isto acontence por causa da  **precedência de operadores**  — algumas operações serão aplicadas antes de outras quando calcularmos o resultado de uma soma (referida em programação como uma expressão). A precedência de operadores em JavaScript é semelhante ao ensinado nas aulas de matemática na escola — Multiplicação e divisão são realizados primeiro, depois a adição e subtração (a soma é sempre realizada da esquerda para a direita).

Se você quiser substituir a precedência do operador, poderá colocar parênteses em volta das partes que desejar serem explicitamente tratadas primeiro. Então, para obter um resultado de 6, poderíamos fazer isso:

```
(num2 + num1) / (8 + 2);

```


Tente fazer e veja como fica.

**Nota:**  Uma lista completa de todos os operadores JavaScript e suas precedências pode ser vista em  [Expressões e operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operator_precedence).

## [Operadores de incremento e decremento](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math#operadores_de_incremento_e_decremento)

Às vezes você desejará adicionar ou subtrair, repetidamente, um valor de uma variável numérica. Convenientemente isto pode ser feito usando os operadores incremento  `++`  e decremento  `--`. Usamos  `++`  em nosso jogo "Adivinhe o número" no primeiro artigo  [Um primeiro mergulho no JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash), quando adicionamos 1 ao nosso  `contagemPalpites`  para saber quantas adivinhações o usuário deixou após cada turno.

```
contagemPalpites++;

```


**Nota:**  Eles são mais comumente usado em  [Laços e iterações](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration), que será visto no curso mais tarde. Por exemplo, digamos que você queira passar por uma lista de preços e adicionar imposto sobre vendas a cada um deles. Você usaria um loop para passar por cada valor e fazer o cálculo necessário para adicionar o imposto sobre vendas em cada caso. O incrementador é usado para mover para o próximo valor quando necessário. Na verdade, fornecemos um exemplo simples mostrando como isso é feito -  [verifique ao vivo](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/loop.html)  e observe o  [código-fonte](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/maths/loop.html)  para ver se consegue identificar os incrementadores! Veremos os  _loops_  detalhadamente mais adiante no curso.

Vamos tentar brincar com eles no seu console. Para começar, note que você não pode aplicá-las diretamente a um número, o que pode parecer estranho, mas estamos atribuindo a variável um novo valor atualizado, não operando no próprio valor. O seguinte retornará um erro:

```
3++;

```


Então, você só pode incrementar uma variável existente. Tente isto:

```
var num1 = 4;
num1++;

```


Ok, segunda coisa estranha! Quando você fizer isso, verá um valor 4 retornado - isso ocorre porque o navegador retorna o valor atual e,  _em seguida_, incrementa a variável. Você pode ver que ele foi incrementado se você retornar o valor da variável novamente:

```
num1;

```


Acontece a mesma coisa com  `--`  : tente o seguinte

```
var num2 = 6;
num2--;
num2;

```


**Nota:**  Você pode fazer o navegador fazer o contrário - incrementar/decrementar a variável e depois retornar o valor, colocando o operador no início da variável ao invés do final. Tente os exemplos acima novamente, mas desta vez use  `++num1`  e  `--num2`.

## [Operadores de atribuição](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math#operadores_de_atribui%C3%A7%C3%A3o)

Operadores de atribuição são os que atribuem um valor à uma variável. Nós já usamos o básico,  `=`, muitas vezes, simplesmente atribuindo à variável do lado esquerdo o valor indicado do lado direito do operador:

```
var x = 3; // x contém o valor 3
var y = 4; // y contém o valor 4
x = y; // x agora contém o mesmo valor de y, 4

```


Mas existem alguns tipos mais complexos, que fornecem atalhos úteis para manter seu código mais puro e mais eficiente. Os mais comuns estão listados abaixo:

Operator

Name

Purpose

Example

Shortcut for

`+=`

Atribuição de adição

Adiciona o valor à direita ao valor da variável à esquerda e, em seguida, retorna o novo valor da variável

`x = 3; x += 4;`

`x = 3; x = x + 4;`

`-=`

Atribuição de subtração

Subtrai o valor à direita do valor da variável à esquerda e retorna o novo valor da variável

`x = 6; x -= 3;`

`x = 6; x = x - 3;`

`*=`

Atribuição de multiplicação

Multiplica o valor da variável à esquerda pelo valor à direita e retorna o novo valor da variável

`x = 2; x *= 3;`

`x = 2; x = x * 3;`

`/=`

Atribuição de divisão

Divide o valor da variável à esquerda pelo valor à direita e retorna o novo valor da variável

`x = 10; x /= 5;`

`x = 10; x = x / 5;`

Tente digitar alguns dos exemplos acima em seu console para ter uma ideia de como eles funcionam. Em cada caso, veja se você pode adivinhar qual é o valor antes de digitar a segunda linha.

Note que você pode muito bem usar outros valores ​​no lado direito de cada expressão, por exemplo:

```
var x = 3; // x contém o valor 3
var y = 4; // y contém o valor 4
x *= y; // x agora contém o valor 12

```


**Nota:**  Existem muitos  [outros operadores de atribuição disponíveis](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_atribuicao), mas estes são os básicos que você deve aprender agora.

## [Aprendizado ativo: dimensionando uma canvas box](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math#aprendizado_ativo_dimensionando_uma_canvas_box)

Neste exercício, você manipulará alguns números e operadores para alterar o tamanho de uma caixa. A caixa é desenhada usando uma API do navegador chamada  [Canvas API](https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API). Não há necessidade de se preocupar sobre como isso funciona, apenas concentre-se na matemática por enquanto. A largura e altura da caixa (em pixels) são definidas pelas variáveis x e y, que recebem um valor inicial de 50.

**[Abrir em nova janela](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Na caixa de código editável acima, há duas linhas marcadas com um comentário que gostaríamos que você atualizasse para aumentar/diminuir a caixa para determinados tamanhos, usando determinados operadores e/ou valores em cada caso. Vamos tentar o seguinte:

-   Altere a linha que calcula x para que a caixa ainda tenha 50px de largura, mas que 50 seja calculado usando os números 43 e 7 e um operador aritmético.
-   Altere a linha que calcula y tenha 75px de altura, mas que 75 seja calculado usando os números 25 e 3 e um operador aritmético.
-   Altere a linha que calcula x para que a caixa tenha 250px de largura, mas que 250 seja calculado usando dois números e o operador resto (modulo).
-   Altere a linha que calcula y para que a caixa tenha 150px de altura, mas que 150 seja calculado usando três números e os operadores de subtração e divisão.
-   Altere a linha que calcula x para que a caixa tenha 200px de largura, mas que 200 seja calculado usando o número 4 e um operador de atribuição.
-   Altere a linha que calcula y para que a caixa tenha 200px de altura, mas que 200 seja calculado usando os números 50 e 3, o operador de multiplicação e o operador de atribuição de adição.

Não se preocupe se você estragar totalmente o código. Você sempre pode pressionar o botão Reset para fazer as coisas funcionarem novamente. Depois de ter respondido corretamente a todas as perguntas acima, sinta-se à vontade para brincar um pouco com o código ou crie seus próprios desafios.

## [Operadores de comparação](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math#operadores_de_compara%C3%A7%C3%A3o)

Às vezes, queremos executar testes verdadeiro / falso e, em seguida, agir de acordo, dependendo do resultado desse teste, para fazer isso, usamos  **operadores de comparação**.

Operator

Name

Purpose

Example

`===`

Igualdade estrita

Verifica se o valor da esquerda e o da direita são idênticos entre si.

`5 === 2 + 4`

`!==`

Não-igualdade-estrita

Verifica se o valor da esquerda e o da direita  **não**  são idênticos entre si.

`5 !== 2 + 3`

`<`

Menor que

Verifica se o valor da esquerda é menor que o valor da direita.

`10 < 6`

`>`

Maior que

Verifica se o valor da esquerda é maior que o valor da direita.

`10 > 20`

<=

Menor ou igual que

Verifica se o valor da esquerda é menor que ou igual ao valor da direita.

`3 <= 2`

>=

Maior ou igual que

Verifica se o valor da esquerda é maior que ou igual ao valor da direita.

`5 >= 4`

**Nota:**  Talvez você já tenha visto alguém usando  `==`  e`!=`  afim de testar igualdade ou desigualdade em JavaScript. Estes são operadores válidos em JavaScript, mas que diferem de  `===`/`!==`. As versões anteriores testam se os valores são os mesmos, mas não se os tipos de dados dos valores são os mesmos. As últimas versões estritas testam a igualdade de ambos os valores e seus tipos de dados. Elas tendem a resultar em menos erros, por isso recomendamos que você as use.

Se você tentar inserir alguns desses valores em um console, verá que todos eles retornam  `true`/`false`  — aqueles booleanos que mencionamos no último artigo. Eles são muito úteis, pois nos permitem tomar decisões em nosso código, e eles são usados ​​toda vez que queremos fazer uma escolha de algum tipo. Por exemplo, booleanos podem ser usados ​​para:

-   Exibir o text label em um botão, dependendo se um recurso está ativado ou desativado
-   Exibir uma mensagem de 'game over' se um jogo acabou ou uma mensagem de vitória se o jogo foi vencido
-   Exibir uma saudação sazonal correta, dependendo da época de festas
-   Aumentar ou diminuir o zoom do mapa, dependendo do nível de zoom selecionado

Veremos como codificar essa lógica quando examinarmos instruções condicionais em um artigo futuro. Por enquanto, vamos dar uma olhada em um exemplo rápido:

```
<button>Iniciar máquina</button>
<p>A máquina está parada.</p>

```


    ```
    var btn = document.querySelector('button');
    var txt = document.querySelector('p');
    
    btn.addEventListener('click', updateBtn);
    
    function updateBtn() {
       if (btn.textContent === 'Iniciar máquina') {
           btn.textContent = 'Parar máquina';
           txt.textContent = 'A máquina iniciou!';
       } else {
           btn.textContent = 'Iniciar máquina';
           txt.textContent = 'A máquina está parada.';
       }
    }
    
    ```


**[Abrir em nova janela](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/conditional.html)**

Você pode ver o operador de igualdade sendo usado apenas dentro da função  `updateBtn()`. Neste caso, não estamos testando se duas expressões matemáticas têm o mesmo valor, estamos testando se o conteúdo de texto de um botão contém uma certa string , mas ainda é o mesmo princípio em funcionamento. Se o botão estiver dizendo "Iniciar máquina" quando for pressionado, mudaremos o rótulo para "Parar máquina" e atualizaremos o rótulo conforme apropriado. Se o botão estiver dizendo "Parar máquina" quando for pressionado, nós trocamos a tela de volta.

**Nota:**  Esse controle que troca entre dois estados geralmente é chamado de  **toggle**. Ele alterna entre um estado e outro - acender, apagar, etc.

## [Resumo](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math#resumo)

Neste artigo, cobrimos as informações fundamentais que você precisa saber sobre números em JavaScript, por enquanto. Você verá os números sendo usados ​​de novo e de novo, durante todo o aprendizado de JavaScript. Portanto, é uma boa ideia tirar isso do caminho agora. Se você é uma daquelas pessoas que não gosta de matemática, pode se consolar com o fato de este capítulo ser muito curto.

No próximo artigo, vamos explorar o texto e como o JavaScript nos permite manipulá-lo.

## Aula 6 

## [O poder das palavras](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Strings#o_poder_das_palavras)

Palavras são muito importante para humanos - elas são uma grande parte de como nos comunicamos. Desde que a Web é largamente baseada em texto, projetada para permitir humanos a comunicar e compartilhar infomação, isto é útil para nós termos controle sobre como apresentar isso.  [HTML](https://developer.mozilla.org/pt-BR/docs/Glossary/HTML)  fornece estrutura e significado para nosso texto,  [CSS](https://developer.mozilla.org/pt-BR/docs/Glossary/CSS)  nos permite estilizar precisamente ele, e JavaScript contem um número de funcionalidades para manipular strings, criar mensagens de boas-vindas customizadas, mostrando rótulos quando preciso, sorteando termos de acordo como desejado e muito mais.

Muitos dos programas que temos visto até agora no curso está envolvido em alguma parte com manipulação de string.

## [Strings — O básico](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Strings#strings_%E2%80%94_o_b%C3%A1sico)

Em um primeiro relance, strings são tratadas de forma parecida como números, mas quando vamos mais a fundo, você começa a ver algumas diferenças importantes. Vamos começar a entrar em linhas básicas no console para nos familiarizar. Nós vamos fornecer abaixo (você pode também  [abrir isto no console](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html)  em uma guia ou janela separada, ou usar o  [console do navegador](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools)  se você preferir).

### [Criando uma string](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Strings#criando_uma_string)

1.  Para começar, digite as linhas seguintes:
    
    ```
    var string = 'The revolution will not be televised.';
    string;
    
    ```
    
  
    
    Como fizemos com números, nós declaramos uma variável, inicializando-a com um valor string, e então retornamos o valor. A única diferença aqui é que quando escrevemos uma string, você precisa colocá-la entre aspas.
2.  Se você não fez isso, ou esqueceu uma das aspas, você recebeu um erro. Experimente digitar as linhas seguintes:
    
    ```
    var badString = This is a test;
    var badString = 'This is a test;
    var badString = This is a test';
    
    ```
    
    Estas linhas não funcionam porque todo texto sem aspas são interpretados como um nome de variável, propriedade do nome, palavra reservada ou algo assim. Se o navegador não puder encontrar, então um erro é apresentado (ex.: "faltando; declaração anterior"). Se o navegador puder ver onde a string começa, mas não conseguir encontrar o fim, como indicado com as segundas aspas, é retornado um erro (com "string não terminada"). Se seu programa retorna tais erros, então volte e verifique todas suas strings para ter certeza que não faltam aspas.
3.  O seguinte funcionará se você definiu previamente a variável  `string`  - tente isto agora:
    
    ```
    var badString = string;
    badString;
    
    ```
    
  
    
    `badString`  é agora definido para ter o mesmo valor de  `string`.

### [Aspas simples x aspas duplas](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Strings#aspas_simples_x_aspas_duplas)

1.  Em JavaScript, você pode escolher aspas simples ou duplas para envolver suas strings. Ambas linhas abaixo funcionará bem:
    
    ```
    var sgl = 'Single quotes.';
    var dbl = "Double quotes";
    sgl;
    dbl;
    
    ```
    
  
    
2.  Há poucas diferenças entre as duas, e qual você usar é de preferência pessoal. Você deve escolher uma e permanecer nela, entretanto; diferentes aspas no código pode ser confuso, especialmente se você usa diferentes aspas na mesma string! O seguinte retornará erro:
    
    ```
    var badQuotes = 'What on earth?";
    
    ```
    
3.  O navegador interpretará como a string não tivesse fechada, porque o outro tipo de aspas pode aparecer dentro da sua string. Por exemplo, ambos exemplos abaixo são okay:
    
    ```
    var sglDbl = 'Would you eat a "fish supper"?';
    var dblSgl = "I'm feeling blue.";
    sglDbl;
    dblSgl;
    
    ```
    
  
    
4.  Entretanto, você não pode incluir o mesmo tipo de aspas dentro da sua string, se você usa para conter seu texto. O seguinte será um erro, como é confuso para o navegador onde a string termina:
    
    ```
    var bigmouth = 'I've got no right to take my place...';
    
    ```
    
    Isto nos leva muito bem ao nosso próximo assunto.

### [Caracteres de escape na string](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Strings#caracteres_de_escape_na_string)

Para corrigir o problema anterior, nós precisamos escapar o problema da aspa. Caracteres de escape significa que nós fazemos algo para ter certeza que eles são reconhecidos como texto, não parte do código. Em JavaScript, nós fazemos isso colocando uma barra invertida logo antes do caracter.Tente isso:

```
var bigmouth = 'I\'ve got no right to take my place...';
bigmouth;

```


Isto funciona bem. Você pode escapar outros caracteres do mesmo jeito, ex.:  `\"`, e há alguns códigos especiais também. Veja  [Notação de escape](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#escape_notation)  para mais detalhes.

## [Concatenando strings](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Strings#concatenando_strings)

1.  Concatenar é uma palavra chique da programação que significa "colocar junto". Para colocar strings juntas em JavaScript, usamos o operador (+), o mesmo usamos para adicionar números, mas neste contexto é algo diferente. Vamos tentar este exemplo no console.
    
    ```
    var one = 'Hello, ';
    var two = 'how are you?';
    var joined = one + two;
    joined;
    
    ```
    
  
    
    O resultado disso é uma variável chamada  `joined`, que contém o valor "Hello, how are you?".
2.  No último exemplo, nós somente juntamos duas strings, mas você pode fazer quantas quiser, contanto que inclua um  `+`  entre cada uma.Experimente isso:
    
    ```
    var multiple = one + one + one + one + two;
    multiple;
    
    ```
    
  
    
3.  Você pore usar um mix de variáveis e strings reais. Tente isso:
    
    ```
    var response = one + 'I am fine — ' + two;
    response;
    
    ```
    
  
    

**Nota:**  Quando você coloca uma string atual no seu código dentro de aspas simples ou duplas, é chamada uma  **string literal**.

### [Concatenação em contexto](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Strings#concatena%C3%A7%C3%A3o_em_contexto)

Vamos dar uma olhada na concatenação em ação — aqui está um exemplo do curso anterior:

```
<button>Pressione-me</button>

```


```
var button = document.querySelector('button');

button.onclick = function() {
  var nome = prompt('Qual é o seu nome?');
  alert('Olá ' + nome + ', prazer em conhecê-lo!');
}

```


Aqui estamos usando uma função  [`Window.prompt()`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt "Window.prompt()")  na linha 4, a qual pergunta ao usuário para responder uma questão via uma caixa de diálogo, então armazena o texto em uma variável — neste caso  `nome`. Nós então usamos uma função  [`Window.alert()`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert "Window.alert()")  na linha 5 para mostrar outra caixa de diálogo contendo nossa string montada de duas strings literais e a variável  `name`,via concatenação.

### [Números x strings](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Strings#n%C3%BAmeros_x_strings)

1.  Então o que acontece quando tentamos adicionar (ou concatenar) uma string e um número? Vamos tentar isso no console:
    
    ```
    'Front ' + 242;
    
    ```
    
  
    
    Você pode esperar um erro disto, mas funciona correto. Tentando representar uma string como um número, realmente não faz sentido. Mas representando um número como string, faz. Então o navegador espertamente converte o número em string e concatena as duas.
2.  Você pode fazer isto até com dois números — você pode forçar um número a ser string colocando ele entre aspas. Experimente o seguinte (nós estamos usando o operador  `typeof`  para checar o que a variável é, se um número ou string):
    
    ```
    var myDate = '19' + '67';
    typeof myDate;
    
    ```
    
  
    
3.  Se você tem uma variável numérica que precisa converter em string, mas não mudar completamente, ou uma string e quer converter em número, você pode usar a construção seguinte:
    
    -   O objeto  [`Number`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number)  converterá qualquer coisa passada em um número, se for possível. Tente o seguinte:
        
        ```
        var myString = '123';
        var myNum = Number(myString);
        typeof myNum;
        
        ```
        
      
        
    -   Por outro lado, todo número tem um método chamado  [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)  que converterá para a string equivalente. Tente isto:
        
        ```
        var myNum = 123;
        var myString = myNum.toString();
        typeof myString;
        
        ```
        
      
        
    
    Estas construções podem ser bem úteis em algumas situações. Por exemplo, se o usuário colocar um número em um campo de texto, isso será uma string. Entretanto, se você quiser adicionar este número a algo, você precisa que seja um número, então você pode passar isto através do  `Number()`  para poder manipular.Nós fizemos exatamente isto no nosso  [Number Guessing Game, in line 59](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L59).

## [Conclusão](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Strings#conclus%C3%A3o)

Então isto é o basico sobre strings em JavaScript. No próximo artigo nós iremos continuar daqui, vendo alguns métodos de construção de strings disponíveis em JavaScript e como nós podemos usá-los para manipular nossa string da forma como quisermos.

## Aula 7

## [Strings como objetos](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#strings_como_objetos)

Como dissemos antes e diremos novamente —  _tudo_  é um objeto em JavaScript. Quando você cria um string, usando por exemplo

```
var string = 'This is my string';

```


sua variável torna-se uma instância do objeto string e, como resultado, tem um grande número de propriedades e métodos diponíveis para ela. Você pode ver isso se você for na página do objeto  [`String`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)  e olhar para baixo na lista do lado da página!

**Agora, antes de seu cérebro começar a derreter, não se preocupe!**  Você não precisa saber sobre a maioria deles no início da sua jornada de aprendizado. Mas há alguns que você potencialmente usará com bastante frequência que veremos aqui.

Vamos digitar alguns exemplos em um console novo. Nós fornecemos um abaixo (você também pode abrir este console em uma guia ou janela separada, ou usar o console do desenvolvedor do navegador, se preferir).

Nós fornecemos um abaixo (você também pode  [abrir esse console](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html)  em uma aba ou janela separada, ou usar o  [console do navegador do desenvolvedor](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools)  se você preferir).

### [Descobrindo o comprimento de uma string](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#descobrindo_o_comprimento_de_uma_string)

Essa é fácil — você simplesmente usa a propriedade  [`length`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length). Tente digitar as linhas a seguir:

```
var browserType = 'mozilla';
browserType.length;

```


Isso deve retornar o número 7, porque "mozilla" tem 7 caracteres. Isso é útil por vários motivos; por exemplo, você pode querer encontrar os comprimentos de uma série de nomes para que você possa exibi-los em ordem de comprimento, ou deixar um usuário saber que um nome de usuário que ele informou em um campo de formulário é muito longo se este for maior do que um certo comprimento.

### [Recuperando um caractere de string específico](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#recuperando_um_caractere_de_string_espec%C3%ADfico)

Nota complementar: você pode retornar qualquer caractere dentro de uma string usando a  **notação colchete**  - isso significa que você inclui colchetes (`[]`) no final do nome da variável. Dentro dos colchetes, você inclui o número do caractere que deseja retornar, por exemplo, para recuperar a primeira letra, faça o seguinte:

```
browserType[0];

```


Computadores contam a partir de 0, não 1! Para recuperar o último caractere de  _qualquer_  string, nós podemos usar a linha a seguir, combinando essa técnica com a propriedade  `length`  que vimos anteriormente:

```
browserType[browserType.length-1];

```


O comprimento de "mozilla" é 7, mas porque a contagem começa de 0, a posição do caractere é 6, daí precisamos usar  `length-1`. Você pode usar isso para, por exemplo, encontrar a primeira letra de uma série de strings e ordená-los alfabeticamente.

### [Encontrando uma substring dentro de uma string e extraindo-a](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#encontrando_uma_substring_dentro_de_uma_string_e_extraindo-a)

1.  Às vezes você quer saber se uma string menor está presente dentro de uma maior (geralmente dizemos  _se uma substring está presente dentro de uma string_). Isso pode ser feito usando o método  [`indexOf ()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf), que leva um único  [parameter  (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Parameter "Currently only available in English (US)")  - a substring que deseja procurar. Experimente isso:
    
    ```
    browserType.indexOf('zilla');
    
    ```
    
  
    
    Isso nos dá o resultado 2, porque a substring "zilla" se inicia na posição 2 (0, 1, 2 — então, 3 caraceteres) dentro de "mozilla". Esse código poderia ser usado para filtrar cadeias de caracteres. Por exemplo, podemos ter uma lista de endereços da web e apenas queremos imprimir aqueles que contenham "mozilla".
2.  Isso pode ser feito de outro jeito, que é possivelmente mais eficaz. Experimente isso:
    
    ```
    browserType.indexOf('vanilla');
    
    ```
    
  
    
    Isso deve lhe dar um resultado  `-1`  — isso é retornado quando a substring, neste caso 'vanilla', não é encontrada na string principal. Você pode usar isso para encontrar todas as instâncias de strings que  **não contém**  a substring 'mozilla', ou  **contém**, se você usar o operador de negação, conforme mostrado abaixo. Você poderia fazer algo assim:
    
    ```
    if(browserType.indexOf('mozilla') !== -1) {
      // faz coisas com a string
    }
    
    ```
    
  
    
3.  Quando você sabe onde uma substring começa dentro de uma string e você sabe em qual caractere você deseja que ela termine,  [`slice ()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)  pode ser usado para extrair isto. Tente o seguinte:
    
    ```
    browserType.slice(0,3);
    
    ```
    
  
    
    Isso retorna "moz" — o primeiro parâmetro é a posição do caractere a partir da qual será iniciada a extração, e o segundo parâmetro é a posição seguinte do último caractere a ser extraído. Então, a fatia ocorre da primeira posição, até a última posição, mas não incluindo. Você também pode dizer que o segundo parâmetro é igual ao comprimento da string que está sendo retornada.

Também, se você sabe que você deseja extrair todos os caracteres restantes em uma string após um certo caracter, você não tem que incluir o segundo parametro! Você apenas precisa incluir a posição do caracter a partir de onde você deseja extrar os caracteres restantes em uma string. Tente o seguinte:

```
browserType.slice(2);

```


Isso retornará "zilla" — isso é porque a posição de caracter 2 é a letra z, e porque você não incluiu o segundo parametro, a substring retornou todos os caracteres restantes na string.

**Nota:**  O segundo parametro do  `slice()`  é opcional: Se você não incluir ele, o slice finaliza no fim da string original. Existem outras opções também; estude a  [`slice()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)  pagina para ver o que mais você pode descobrir.

### [Mudando entre maiúsculas e minúsculas](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#mudando_entre_mai%C3%BAsculas_e_min%C3%BAsculas)

O método string  [`toLowerCase()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)  e  [`toUpperCase()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)  toma a string e converte todos os caracteres para minusculo - ou maiusculo, respectivamente. Este pode ser util, por exemplo, se você quer normalizar todas as entradas de dados do usuário antes de armazenar em um banco de dados.

Vamos testar inserindo as seguintes linhas para ver o que acontece:

```
var radData = 'My NaMe Is MuD';
radData.toLowerCase();
radData.toUpperCase();

```


### [Atualizando partes de uma string](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#atualizando_partes_de_uma_string)

Você pode substituir uma substring dentro de uma string com uma outra substring usando o método  [`replace()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace). Este funciona muito simples em um nível básico, apesar haver algumas coisas avançadas que você pode fazer com ele, nós não iremos tão longe ainda.

Ele toma dois parametros — A string que você quer substituir e a string que você quer que substitua o primeiro parametro. Tente este exemplo:

```
browserType.replace('moz','van');

```


Observe que para realmente obter o valor atualizado refletido na variavel  `browserType`  em um programa real, você teria que setar o valor da variavel para ser o resultado da operação; não apenas atualizar o valor da substring automaticamente. Assim você teria que realmente escrever isso:  `browserType = browserType.replace('moz','van');`

## [Exemplos para aprendizado ativo](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#exemplos_para_aprendizado_ativo)

Nesta seção, tentaremos escrever um código de manipulação de string. Em cada exercício abaixo, temos uma matriz de strings e um loop que processa cada valor na matriz e o exibe em uma lista com marcadores. Você não precisa entender matrizes ou loops agora - isso será explicado em artigos futuros. Tudo o que você precisa fazer em cada caso é escrever o código que produzirá as strings no formato em que as queremos.

Cada exemplo vem com um botão "Reset", que você pode usar para redefinir o código original, isso se cometer um erro e não conseguir faze-lo funcionar novamente, e um botão "Show Solution" que você pode pressionar para ver aresposta em potencial se realmente estiver travado.

### [Filtrando mensagens de saudação](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#filtrando_mensagens_de_sauda%C3%A7%C3%A3o)

No primeiro exercício, começaremos com simplicidade - temos várias mensagens de cartão, mas queremos classificá-las para listar apenas as mensagens de Natal. Queremos que você preencha um teste condicional dentro da estrutura if (...), para testar cada string e apenas imprimi-la na lista se for uma mensagem de Natal.

1.  Primeiro pense em como você poderia testar se a mensagem em cada caso é uma mensagem de Natal. Qual string está presente em todas essas mensagens e que método você poderia usar para testar se ela está presente?
2.  Em seguida, você precisará escrever um teste condicional do formulario operando2 operador operando1. A coisa à esquerda é igual à coisa à direita? Ou neste caso, o método chama à esquerda retorna o resultado à direita?
3.  Dica: Nesse caso, é provavelmente mais útil testar se a chamada do método não é igual a um determinado resultado.

### [Corrigindo a capitalização](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#corrigindo_a_capitaliza%C3%A7%C3%A3o)

Neste exercício, temos os nomes das cidades no Reino Unido, mas a capitalização está toda desarrumada. Nós queremos que você as altere para que elas sejam todas minúsculas, exceto pela primeira letra maiúscula. Uma boa maneira de fazer isso é:

1.  Converta toda a cadeia contida na variável de entrada para minúscula e armazene-a em uma nova variável.
2.  Pegue a primeira letra da string nesta nova variável e armazene-a em outra variável.
3.  Usando esta última variável como substring, substitua a primeira letra da string em minúsculas pela primeira letra da string em minúsculas alterada para maiúscula. Armazene o resultado desse procedimento de substituição em outra nova variável.
4.  Altere o valor da variável  `result`  para igual ao resultado final, não a  `input`.

**Nota:**  Uma dica — os parâmetros dos métodos de string não precisam ser literais de string; eles também podem ser variáveis, ou mesmo variáveis com um método sendo invocado nelas.

### [Fazendo novas strings a partir de partes antigas](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#fazendo_novas_strings_a_partir_de_partes_antigas)

Neste último exercício, o array contém um monte de strings contendo informações sobre estações de trem no norte da Inglaterra. As strings são itens de dados que contêm o código da estação de três letras, seguido por alguns dados legíveis por máquina, seguidos por um ponto-e-vírgula, seguido pelo nome da estação legível por humanos. Por exemplo:

MAN675847583748sjt567654;Manchester Piccadilly

Queremos extrair o código e o nome da estação e juntá-los em uma string com a seguinte estrutura:

MAN: Manchester Piccadilly

Nós recomendamos que faça assim:

1.  Extraia o código da estação de três letras e armazene-o em uma nova variável.
2.  Encontre o número de índice do caractere do ponto e vírgula.
3.  Extraia o nome da estação legível usando o número do índice de caracteres de ponto-e-vírgula como ponto de referência e armazene-o em uma nova variável.
4.  Concatene as duas novas variáveis e uma string literal para fazer a string final.
5.  Altere o valor da variável  `result`  para igual à string final, não a  `input`.

## [Conclusão](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#conclus%C3%A3o)

Você não pode escapar do fato de que ser capaz de lidar com palavras e frases em programação é muito importante — particularmente em JavaScript, pois os sites são todos sobre comunicação com pessoas. Este artigo forneceu os fundamentos que você precisa saber sobre a manipulação de strings por enquanto. Isso deve atendê-lo bem ao abordar tópicos mais complexos no futuro. Em seguida, vamos ver o último tipo de dados importante que precisamos focar no curto prazo — arrays.

## Aula 8

## [O que é uma array?](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#o_que_%C3%A9_uma_array)

Arrays são geralmente descritas como "lista de objetos"; elas são basicamente objetos que contem múltiplos valores armazenados em uma lista. Um objeto array pode ser armazenado em variáveis e ser tratado de forma muito similar a qualquer outro tipo de valor, a diferença está em podermos acessar cada valor dentro da lista individualmente, e fazer super úteis e eficientes coisas com a lista, como laço através da lista e fazer a mesma coisa para cada valor. Talvez nós pegamos uma série de produtos e seus preços armazenados em uma array, e nós queremos fazer um laço através de todos eles e mostrar em um recibo, enquanto somamos todos os preços e mostramos o preço total ao final.

Se nós não tivessemos arrays, teríamos que armazenar cada item em uma variável separada, então chamar o código para mostrar e adicionar separadamente cada item. Isto seria muito mais longo de escrever, menos eficiente e mais suscetível a erros. Se nós temos 10 itens para adicionar na fatura, isto é ruim o bastante, mas e se fosse 100 itens ou 1000? Nós vamos retornar a este exemplo mais tarde neste artigo.

Como no artigo anterior, vamos aprender o básico de arrays introduzindo com alguns exemplos dentro de um console JavaScript. Nós fornecemos um abaixo (você também pode  [abrir este console](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html)  em uma aba separada ou janela, ou usar o  [console de desenvolvedor do navegador](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools)  se preferir).

### [Criando uma array](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#criando_uma_array)

Arrays são contruídas de colchetes, os quais contém uma lista de itens separada por vírgulas.

1.  Vamos supor que queremos armazenar uma lista de compras em uma array — nós temos algo como o seguinte. Digite as linhas abaixo no seu console:
    
    ```
    var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
    shopping;
    
    ```
    
  
    
2.  Neste caso, cada item na array é uma string, mas tenha em mente que você pode armazenar qualquer item em uma array — string, número, objeto, outra variável, até outra array. Você pode também misturar e combinar tipos de itens — eles não têm que ser todos números, strings, etc. Tente isto:
    
    ```
    var sequence = [1, 1, 2, 3, 5, 8, 13];
    var random = ['tree', 795, [0, 1, 2]];
    
    ```
    
  
    
3.  Tente criar um par de arrays você mesmo, antes de seguir em frente.

### [Acessando e modificando itens de uma array](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#acessando_e_modificando_itens_de_uma_array)

Você pode acessar itens individuais em uma array usando a notação de colchetes, da mesma forma que você  [acessa as letras em uma string](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#retrieving_a_specific_string_character).

1.  Digite o seguinte no seu console:
    
    ```
    shopping[0];
    // returns "bread"
    
    ```
    
  
    
2.  Você também pode modificar um item em uma array simplesmente dando um novo valor ao item. Tente isto:
    
    ```
    shopping[0] = 'tahini';
    shopping;
    // shopping vai retornar agora [ "tahini", "milk", "cheese", "hummus", "noodles" ]
    
    ```
    
  
    
    **Nota:**  Nós dissemos isto antes, mas como lembrete — computadores começam a contar do 0!
    
3.  Note que uma array dentro de uma array é chamada de array multidimensional. Você pode acessar um item dentro de uma array que está localizada dentro de outra array, colocando dois conjuntos de colchetes juntos. Por exemplo, para acessar um dos itens dentro de uma array, que é o terceiro item dentro da array  `random`  (veja a seção anterior), nós podemos fazer algo tipo isto:
    
    ```
    random[2][2];
    
    ```
    
  
    
4.  Antes de continuar, faça algumas modificações nos exemplos, crie seus próprios arrays e veja o que funciona e o que não funciona. Divirta-se!

### [Encontrando o comprimento de uma array](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#encontrando_o_comprimento_de_uma_array)

Você pode encontrar o comprimento de uma array (quantos itens existem nela) exatamente do mesmo jeito que você encontra o comprimento (em caracteres) de uma string — usando a propriedade  [`length`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length). Tente o seguinte:

```
sequence.length;
// deve retornar 7

```


Isto tem outras funcionalidades, mas é mais comum usar em um laço para seguir todos os itens em uma array. Então, por exemplo:

```
var sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

```


Você irá aprender sobre laços propriamente em um artigo futuro, mas, brevemente, este código está dizendo:

1.  Comece o laço no item número 0 na array.
2.  Pare o laço no item de número igual ao comprimento da array. Isto funcionará para uma array de qualquer tamanho, mas neste caso vai parar o laço no item 7 (isto é bom, como o último item — que nós queremos que o laço cubra — é 6.
3.  Para cada item, imprima no console do navegador com  [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/console/log).

## [Alguns métodos úteis em array](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#alguns_m%C3%A9todos_%C3%BAteis_em_array)

Nesta seção vamos ver alguns métodos relacionados a array úteis que nos permitem dividir strings em itens de array e vice-versa, e adicionar novos itens em arrays.

### [Convertendo entre strings e arrays](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#convertendo_entre_strings_e_arrays)

Frequentemente você vai se deparar com alguns dados contidos em uma grande e longa string, e você pode querer separar os itens em uma forma mais útil e então manipular eles, como mostrar em uma tabela. Para fazer isto, nós podemos usar o método  [`split()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split). Nesta forma mais simples, ela pega um parâmetro solitário, o caracter que você deseja separar da string e retorna o restante antes e depois do item separado na array.

**Nota:**  Ok, isto é tecnicamente um método de string, não um método de array, mas nós podemos colocar em arrays já que cai bem.

1.  Vamos brincar com isto para ver como funciona. Primeiro, crie uma string no seu console:
    
    ```
    var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
    
    ```
    
  
    
2.  Agora vamos dividir isto em cada vírgula:
    
    ```
    var myArray = myData.split(',');
    myArray;
    
    ```
    
  
    
3.  Finalmente, tentamos encontrar o comprimento da sua nova array, e recuperar alguns itens dela:
    
    ```
    myArray.length;
    myArray[0]; // the first item in the array
    myArray[1]; // the second item in the array
    myArray[myArray.length-1]; // the last item in the array
    
    ```
    
  
    
4.  Você também pode ir no sentido oposto usando o método  [`join()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join). Tente o seguinte:
    
    ```
    var myNewString = myArray.join(',');
    myNewString;
    
    ```
    
  
    
5.  Outro jeito de converter uma array em uma string é usar o método  [`toString()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/toString).  `toString()`  é indiscutivelmente mais simples que o  `join()`  pois não necessita um parâmetro, mas mais limitado. Com  `join()`  você pode especificar diferentes separadores (tente o passo 4 com um caracter diferente da vírgula).
    
    ```
    var dogNames = ['Rocket','Flash','Bella','Slugger'];
    dogNames.toString(); //Rocket,Flash,Bella,Slugger
    
    ```
    
  
    

### [Adicionando e removendo itens de arrays](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#adicionando_e_removendo_itens_de_arrays)

Nós ainda não falamos sobre adicionar e remover itens de uma array — vamos dar uma olhada agora. Nós vamos usar a array  `myArray`  que acabamos de criar na última seção. Se você não viu a última seção, primeiro crie a array no seu console:

```
var myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];

```


Antes de tudo, para adicionar ou remover um item no final de uma array, nós podemos usar  [`push()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push)  e  [`pop()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)  respectivamente.

1.  note que você precisa para incluir um ou mais itens ao final da sua array. Tente isto:
    
    ```
    myArray.push('Cardiff');
    myArray;
    myArray.push('Bradford', 'Brighton');
    myArray;
    
    ```
    
  
    
2.  O novo comprimento da array é retornado quando a chamada do método completa. Se você quer armazenar o novo comprimento da array em uma variável, você poderia fazer algo como isto:
    
    ```
    var newLength = myArray.push('Bristol');
    myArray;
    newLength;
    
    ```
    
  
    
3.  Removendo o último item da array é tão simples como um  `pop()`  nele. Tente isto:
    
    ```
    myArray.pop();
    
    ```
    
  
    
4.  O item que foi removido é retornado quando a chamada do método completa. Para salvar o item em uma nova variável, você poderia fazer isto:
    
    ```
    var removedItem = myArray.pop();
    myArray;
    removedItem;
    
    ```
    
  
    

[`unshift()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)  e  [`shift()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)  funciona exatamente do mesmo modo que  `push()`  e  `pop()`, respectivamente, exceto que eles funcionam no começo da array, não no final.

1.  Primeiro  `unshift()`  — tente os seguintes comandos:
    
    ```
    myArray.unshift('Edinburgh');
    myArray;
    
    ```
    
  
    
2.  Agora  `shift()`;Tente estes!
    
    ```
    var removedItem = myArray.shift();
    myArray;
    removedItem;
    
    ```
    
  
    

## [Aprendizado ativo: Imprimindo aqueles produtos!](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#aprendizado_ativo_imprimindo_aqueles_produtos!)

Vamos retornar ao exemplo que descrevemos antes — imprimindo nomes de produtos e preços em uma fatura, então totalizando os preços e imprindindo eles ao final. No exemplo editável abaixo há comentários contendo números — cada um deles marcam um lugar onde você tem que acidionar algo ao código. Eles são como segue:

1.  Abaixo do comentário  `// number 1`  está um número de strings, cada uma contendo um nome de produto e preço separado por uma vírgula. Nós gostaríamos que você colocasse eles dentro de uma array e armazenasse eles na array chamada  `products`.
2.  Na mesma linha o comentário  `// number 2`  está no começo de um laço for. Nesta linha nós temos  `i<=0`, o qual é um teste condicional que faz o  [laço for](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash#loops)  parar imediatamente, porque está dizendo "pare quando  `i`  for menor ou igual a 0", e  `i`  começa em 0. Nós gostaríamos de substituir isto com um teste condicional que termina o laço quando o  `i`for menor que o tamanho da array  `products`.
3.  Logo abaixo do comentário  `// number 3`  nós queremos que você escreva uma linha de código que divide o item da array (`name:price`) em dois itens separados, um contendo somente o nome e outro só com o preço. Se você não tem certeza de como fazer isto, consulte o artigo  [Métodos úteis em string](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods)para alguma ajuda, ou ainda melhor, veja a seção  [Converting between strings and arrays](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#converting_between_strings_and_arrays)  neste artigo.
4.  Como parte da linha de código acima, você também quer converter o preço de string para número. Se você não se lembra como fazer isto, veja o  [artigo primeiras strings](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#numbers_versus_strings).
5.  Há uma variável chamada  `total`  que é criada e atribuída o valor 0 no começo do código. Dentro do loop (abaixo  `// number 4`) nós queremos que você escreva uma linha que adicione o preço atual ao total em cada iteração do laço, então ao final do código o preço total é impresso na fatura. Você pode precisar de um  [operador aritiméticos](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#assignment_operators)  para isto.
6.  Nós queremos que você mude a linha logo abaixo de  `// number 5`  para que a variável  `itemText`  seja igual a "nome do item atual - $preço do item atual", por exemplo "Shoes - $23.99" em cada caso, então a informação correta para cada item é impressa na fatura. Esta é uma simples concatenação de string, a qual deveria ser familiar para você.

## [Aprendizado ativo: Top 5 buscadores](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#aprendizado_ativo_top_5_buscadores)

Um bom uso para os métodos de array como  [`push()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push)  e  [`pop()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)  está quando você está mantendo um registro de itens atuais ativos em um aplicativo web. Em uma cena animada, por exemplo, você pode ter uma array de objetos representando o gráfico de fundo mostrado atualmente, e você pode querer somente mostrar 50 por vez, para performace ou alguma razão de ordem. Como novos objetos são criados e adicionados na array, os antigos podem ser deletados da array para manter o número desejado.

Neste exemplo nós vamos mostrar um uso bem mais simples — aqui nós estamos dando a você um falso site de busca, com uma caixa de busca. A idéia é que quando termos são digitados na caixa de busca, os 5 principais termos de busca anterior sejam mostrados na lista. Quando o número de termos passar de 5, o último termo começa sendo deletado. A cada vez um novo termo é adicionado ao topo, então os 5 termos anteriores são sempre mostrados.

**Nota:**  Em um aplicativo de busca real, você seria, provavelmente, habilitado a clicar nos termos anteriores para retornar às pesquisas, e isto iria mostrar o reusltado atual! Nós estamos só mantendo simples, por agora.

Para completar o aplicativo, nós precisamos que você:

1.  Adicione uma linha abaixo do comentário  `// number 1`  que adicione o valor digitado atual na busca ao começo da array. Isto pode ser recuperado usando  `searchInput.value`.
2.  Adicione uma linha abaixo do comentário  `// number 2`  que remova o último valor no fim da array.

## [Conclusão](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#conclus%C3%A3o)

Depois de ler este artigo, nós temos certeza que você concordará que arrays parecem muito úteis; você verá elas surgirem em todo lugar em JavaScript, frequentemente associadas com laços para fazer a mesma coisa para cada item de uma array. Nós estaremos ensinando a você todo o básico que há para saber sobre laços no próximo módulo, mas por agora você deve se dar uma palmada de incentivo e dar uma bem merecida parada; você trabalhou durante todo os artigos neste módulo!

A única coisa que resta a fazer é trabalhar na avaliação deste módulo, a qual vai testar seu entendimento dos artigos anteriores a este.

## [Veja também](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#veja_tamb%C3%A9m)

-   [Coleções indexadas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections)  — um guia avançado guia de arrays e seus primos,  _typed arrays_.
-   [`Array`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)  — a página de referência  `Array`  — para um guia de referência detalhado para as funcionalidades discutidas nesta página e muito mais.

## DESAFIO

## [Ponto de partida](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Silly_story_generator#ponto_de_partida)

Para começar esta avaliação, você deve:

-   [Pegue o arquivo HTML](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html)  para o exemplo e salve uma cópia local deste arquivo como index.html em um novo diretório em algum local do seu computador. Este arquivo ainda contém o CSS para estilizar o exemplo contido no arquivo.
-   Vá para a  [página que contém o texto bruto](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt)  e matenha-a aberta em uma aba separada do navegador em algum lugar. Você precisará dela mais tarde.

**Nota:**  Alternativamente, você pode utilizar um site como  [JSBin](http://jsbin.com/)  ou  [Thimble](https://thimble.mozilla.org/)  para fazer a sua avaliação. Você pode colar o HTML, CSS e javaScript em um desses editores online. Se o editor online que você estiver utilizando não possuir um painel separado para javaScript, sinta-se a vontade para inseri-lo em um elemento <script> dentro da página HTML.

## [Resumo do projeto](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Silly_story_generator#resumo_do_projeto)

Você recebeu algum HTML/CSS em bruto e algumas strings de texto e funções de JavaScript; Você precisa escrever o JavaScript necessário para transformar este em um programa funcional, que faz o seguinte:

-   Gera uma história boba quando o botão "Gerar história aleatória" é pressionado.
-   Substitui o nome padrão "Bob" na história com um nome personalizado, somente se um nome personalizado for inserido no campo de texto "Inserir nome personalizado" antes que o botão de geração seja pressionado.
-   Gera outra história boba aleatória se você pressionar novamente o botão (e novamente...)

A seguinte captura de tela mostra um exemplo do que o programa concluído deve produzir:

![](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Silly_story_generator/assessment-1.png)

Para dar-lhe mais uma ideia,  [dê uma olhada no exemplo concluído](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/)  (sem espreitar o código fonte!)

## [Passos para completar](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Silly_story_generator#passos_para_completar)

As seções a seguir descrevem o que você precisa fazer.

Configuração básica:

1.  Crie um novo arquivo chamado main.js, no mesmo diretório que o arquivo index.html.
2.  Aplique o arquivo JavaScript externo ao seu HTML inserindo um elemento  [`<script>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/script)  no seu HTML referenciando o main.js. Coloque-o antes da etiqueta de fechamento  [`<body>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/body).

Variáveis e funções iniciais:

1.  No arquivo de texto cru, copie todo o código abaixo do cabeçalho "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" e cole-o no topo do arquivo main.js. Isso dá a você três variáveis que armazenam referências ao campo de texto "Inserir nome personalizado" (customName), o botão "Gerar história aleatória" (randomizar), E o elemento  [`<p>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/p)  na parte inferior do corpo HTML para onde a história será copiada (história), respectivamente. Além disso, você tem uma função chamada randomValueFromArray () que recebe um vetor e retorna um dos itens armazenados dentro do vetor aleatoriamente.
2.  Agora, veja a segunda seção do arquivo de texto bruto - "2. RAW TEXT STRINGS". Ele contém strings de texto que atuarão como entrada em nosso programa. Gostaríamos que você armazenasse essas strings dentro de variáveis no main.js:
    1.  Armazene a primeira, grande e longa linha de texto dentro de uma variável chamada storyText.
    2.  Armazene o primeiro conjunto de três strings dentro de um vetor chamado insertX.
    3.  Armazene o segundo conjunto de três strings dentro de um vetor chamado insertY.
    4.  Armazene o terceiro conjunto de três strings dentro de um vetor chamado insertZ.

Colocando o manipulador de eventos e a função incompleta:

1.  Agora volte ao arquivo de texto bruto.
2.  Copie o código encontrado abaixo do cabeçalho "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" E cole ele na parte inferior do arquivo main.js. Isto:
    -   Adicione um ouvinte de evento de clique à variável randomize para que, quando o botão que ele representa, for clicado, a função  `result()`  seja executada.
    -   Adicione a função  `result()`  parcialmente concluída ao seu código. Para o restante da avaliação, você estará preenchendo linhas dentro desta função para completá-la e fazê-la funcionar corretamente.

Completando a função  `result()`:

1.  Crie uma nova variável chamada  `newStory`, e defina seu valor como igual a  `storyText`. Isso é necessário para que possamos criar uma nova história aleatória toda vez que o botão for pressionado e a função for executada. Se fizermos alterações diretamente no  `storyText`, só poderemos gerar uma nova história uma vez.
2.  Crie três novas variáveis chamadas  `xItem`,  `yItem`, e  `zItem`, e torne-as iguais ao resultado da chamada da função  `randomValueFromArray()`  em seus três arrays (o resultado em cada caso será um item aleatório de cada array em que é chamado). Por exemplo, você pode chamar a função e fazer com que ela retorne uma string aleatória de  `insertX`  escrevendo  `randomValueFromArray(insertX)`.
3.  Em seguida, queremos substituir os três espaços reservados na variável  `newStory`  —  `:insertx:`,  `:inserty:`, e  `:insertz:`  — com strings armazenadas em  `xItem`,  `yItem`, e  `zItem`. Existe um método de string específico que irá ajudá-lo aqui - em cada caso, faça a chamada para o método igual a  `newStory`,então cada vez que é chamado, newStory é igual a si mesmo, mas com substituições feitas. Assim, cada vez que o botão é pressionado, esses espaços reservados são substituídos por uma string boba aleatória. Como uma dica adicional, o método em questão substitui apenas a primeira ocorrência da subseqüência de caracteres encontrada, portanto, talvez seja necessário fazer uma das chamadas duas vezes.
4.  Dentro do primeiro bloco  `if`, adicione outra chamada de método de substituição de string para substituir o nome 'Bob' encontrado na string  `newStory`  pela variável  `name`. Neste bloco estamos dizendo "Se um valor foi inserido na entrada de texto  `customName`, substitua Bob na história por esse nome personalizado ".
5.  Dentro do segundo bloco  `if`, estamos verificando se o botão de opção  `uk`  foi selecionado. Se assim for, converteremos os valores de peso e temperatura na história de libras e Fahrenheit em graus centígrados. O que você precisa fazer é o seguinte:
    1.  Procure as fórmulas para converter libras em pedras e Fahrenheit em centígrados.
    2.  Dentro da linha que define a variável  `weight`, substitua 300 por um cálculo que converta 300 libras em pedras. Concatene  `' stone'`  no final do resultado da chamada geral  `Math.round()`.
    3.  Dentro da linha que define a variável  `temperature`, substitua 94 por um cálculo que converta 94 graus Fahrenheit em graus centígrados. Concatene  `' centigrade'`  no resultado da chamada geral  `Math.round()`.
    4.  Apenas sob as duas definições de variáveis, adicione mais duas linhas de substituição de string que substituem '94 fahrenheit' pelo conteúdo da variável  `temperature`, e '300 libras' com o conteúdo da variável  `weight`.
6.  Finalmente, na segunda e última linha da função, torne a propriedade`textContent`  da variável  `story`  (que faz referência ao parágrafo) igual a  `newStory`.

## [Dicas e sugestões](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Silly_story_generator#dicas_e_sugest%C3%B5es)

-   Você não precisa editar o HTML de nenhuma maneira, exceto para adicionar o JavaScript ao seu HTML.
-   Se você não tiver certeza se o JavaScript é aplicado ao seu HTML corretamente, tente remover todo o restante do arquivo JavaScript temporariamente, adicionando um pouco de JavaScript que você sabe que criará um efeito óbvio, salvando e atualizando. Por exemplo, o seguinte transforma o plano de fundo do elemento  [`<html>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/html)  em vermelho - para que a janela inteira do navegador fique vermelha se o JavaScript for aplicado corretamente:
    
    ```
    document.querySelector('html').style.backgroundColor = 'red';
    
    ```
    
  
    
-   [Math.round()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round)  é um método JavaScript integrado que simplesmente arredonda o resultado de um cálculo para o número inteiro mais próximo.