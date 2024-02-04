const elemento = document.querySelector ("body")


/*function pintar_negro (){
   elemento.style.backgroundColor = "black"
}*/

/*se puede escribir de ambas formas pero la segunda es más actualizada*/

/*const pintar_negro = () => {
elemento.style.backgroundColor = "black"
}
pintar_negro ()*/


/*const pintar_negro = (color) => {
    elemento.style.backgroundColor = color

}

pintar_negro ("black") */

const button1 = document.querySelector ('#negro')
const button2 = document.querySelector ('#rojo')
const button3 = document.querySelector ('#verde')

const pintar = (color)=>{
    elemento.style.backgroundColor = color
}

button1.addEventListener ("click", () => {
    pintar ("black")
})

button2.addEventListener ("click",()=>{
    pintar ("red")
})
button3.addEventListener ("click", ()=>{
    pintar ("green")
})