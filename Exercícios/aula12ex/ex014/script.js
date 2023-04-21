function carregar() {
  var msg = window.document.getElementById("msg")
  var img = window.document.getElementById("imagem")
  var date = new Date()
  var hora = date.getHours()

  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = "manha.png"
    document.body.style.backgroundColor = "#e2cd9f"
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = "tarde.png"
    document.body.style.backgroundColor = "#b9846f"
  } else {
    //Boa noite
    img.src = "noite.png"
    document.body.style.backgroundColor = "#515154"
  }
}
