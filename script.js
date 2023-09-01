//Disparando eventos no JS
function toggleMode() {
  const html = document.documentElement
  // função toggle faz a verificação de class no html
  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //pegar a tag img usando o emsmo seletor do CSS
  const img = document.querySelector("#profile img")
  //substituir a img, se tiver light mode, passar a img light, se não tiver manter a oiginal

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Adriano Rodrigues tomando uma taça de vinho, usando camisa azul com fundo misto."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Adriano Rodrigues sorrindo com uma camisa de botão azul e fundo misto."
    )
  }
}
