
  var msg = window.document.getElementById("msg");
  var txt = window.document.getElementById("txt");
  var data = new Date();
  var hora = data.getHours();
  // Esse código captura as informacoes do sistema
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) { 
    txt.innerHTML = 'Bom dia!'
    document.body.style.background = 'yellow'

  } 
  else if ( hora > 12 && hora < 16) {
    txt.innerHTML = 'Boa tarde!'
    document.body.style.background = 'orange'
  }
  else {
    txt.innerHTML = 'Boa noite!'
    document.body.style.background = 'darkblue'

}

