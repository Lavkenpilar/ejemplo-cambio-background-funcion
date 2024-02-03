const elemento = document.querySelector ("body")

/*function pintar_negro (){
   elemento.style.backgroundColor = "black"
}*/

/*se puede escribir de ambas formas pero la segunda es más actualizada*/

/*const pintar_negro = () => {
elemento.style.backgroundColor = "black"
}
pintar_negro ()*/

const pintar_negro = (color) => {
    elemento.style.backgroundColor = color

}

pintar_negro ("black")
