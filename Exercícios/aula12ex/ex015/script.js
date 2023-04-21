function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById("txtano")
  var res = document.getElementById("res")
  if (fano.value.length == 0 || fano.value >= ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!")
  } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var gênero = ""
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    if (fsex[0].checked) {
      gênero = "homem"
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "crianca-m.jpg")
      } else if (idade < 22) {
        //Jovem
        img.setAttribute("src", "adolescente-m.jpg")
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "adulto-m.jpg")
      } else {
        //Idoso
        img.setAttribute("src", "idoso-m.jpg")
      }
    } else if (fsex[1].checked) {
      gênero = "mulher"
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "crianca-f.jpg")
      } else if (idade < 22) {
        //Jovem
        img.setAttribute("src", "adolescente-f.jpg")
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "adulta-f.jpg")
      } else {
        //Idoso
        img.setAttribute("src", "idosa-f.jpg")
      }
    }
    res.style.textAlign = "center" //Centralizar com JS (sem CSS)
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}
