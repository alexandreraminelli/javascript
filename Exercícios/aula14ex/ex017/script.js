function tabuada() {
  let num = document.getElementById("txtn")
  let tab = document.getElementById("seltab")
  if (num.value.length == 0) {
    window.alert("Por favor, digite um número!")
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = "" //apagar tabuadas anteriores
    while (c <= 10) {
      let item = document.createElement("option") //criar elemento <option> dentro de <select>
      item.text = `${n} x ${c} = ${n * c}`
      item.value = `tab ${c}`
      tab.appendChild(item) //add elemento filho
      c++
    }
  }
}
