let myInput = document.getElementById("myInput");
myInput.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        Buscar()
    }
})
function Buscar(){
    let myInput = document.getElementById("myInput")
    if (myInput.value === "Metodo Burbuja"){
         alert("El metodo burbuja es un algoritmo de ordenamiento por menor a mayor, en el se unsan dos for donde al encontrar un nuemero mayor o menor que otro lo mueven, hasta terminar por tener todo el array ordenado")
    }
    if (myInput.value === "¿Que es JavaScript?"){
        alert("JavaScript es una herramienta muy generalmente usada para crear la logica de paginas web ")
    }
    if (myInput.value === "¿Para que sirve JavaScript?"){
        alert("JavaScript sirve para darle la logica a tu proyecto, puede ser usado para algoritmos matematicos o para simplemente usarlo para cosas mas sensillas como alert, functiones, if...etc")
    }
    if (myInput.value === "Button") {
        alert("El button es un Elemento el cual se puede presionar y activar funciones al tocarlo, aun que la funcion onclick() se puede usar para otras cosas, generalmente es usado en los button")
    }
}
function Salir() {
    let Texto = document.getElementById("Textos")
    Texto.style.display = "none"
}
function CambiarColorSelect(){
    let fondo = document.getElementById("fondo")
    let span = document.getElementById("span")
    let CambiarColor = document.getElementById("CambiarColor")
    if (CambiarColor.value === "Normal"){
        fondo.style.background = "rgb(26,26,26)"
        span.style.background = "rgb(26,26,26)"
    }
    if (CambiarColor.value === "Claro"){
        fondo.style.background = "rgb(73,73,73)"
        span.style.background = "rgb(73,73,73)"
    }
}
function PantallaInscribirse(){
    let InscribirseAnimacion = document.getElementById("InscribirseAnimacion")
    let InscribirseReal = document.getElementById("InscribirseReal")    
    if(InscribirseReal.style.display === "block"){
        InscribirseReal.style.display = "none"
        InscribirseAnimacion.style.display = "none"
    }else{

    InscribirseAnimacion.style.display = "block"
    function tiempo(){
        InscribirseReal.style.display = "block"
    }
    setTimeout(tiempo,1998)

    }

}
function InforPagina(){
}
function CambiarColorBoton(){
   let inputBuscar = document.getElementById("InputBuscar")
    inputBuscar.style.background = "white"
    inputBuscar.style.color = "rgb(105, 79, 255)"
    inputBuscar.style.borderBlockColor = "rgb(105,79,255)"
}
function QuitarColorBoton(){
    let inputBuscar = document.getElementById("InputBuscar")
    inputBuscar.style.background = "rgb(105, 79, 255)"
    inputBuscar.style.color = "white"
}
function CambiarColorALL(){
    let ALL = document.getElementById("ALL")
    ALL.style.color = "rgb(105,79,255)"    
}
function QuitarColorALL(){
    let ALL = document.getElementById("ALL")
    ALL.style.color = "white"    
}
//FlexBox es una forma mas eficiente de poder aliniar distribuir y ordenar elementos dentro de un contenedor, primero se declara el flex, con un display:flex;
//Despues puedes manipular a tu gusto como estaran posicionados los elementos dentro del contenedor en el cual pusiste display:flex;
//eso se puede hacer de varias moneras algunas de ellas son: aling-items:; justify-contenet:; flex-direcction:; que son faciles de entender y ayudan bastante 

//Este tiene la misma finalidad que el flexBox hacer mas facil y eficiente el ordenamiento de los elementos dentro de un contenedor
//El grid aun que un poco mas complejo que el flex igual es facil de entender primero indicas a tu div el grid con un display:grid;
//Luego hay bastantes cosas asi que nombrare algunas y dire un poco para que sirven
// grid-template-colums:; este sirve para indicar la cantidad de espacios que hay, por ejemplo si tenemos 4 items dentro de un div con esta propiedad (para nombrar la cantidad de columnas se indica poniendo auto)
// si ponemos 1 solo auto dentro de ella  grid-template-colums:auto;  seria haci:
// por cierto el grid-template-colums:; puede configurarse con otras medidas como  grid-teplate-colums:20px 30px auto; pero aun no lo entendi muy bien como funciona lo de los px
//1
//2
//3
//4
// en cambio al poner 2 auto grid-template-colums:auto auto; seria haci:
//1 2
//3 4

//Tambien hay otros que van a los items en si, por ejemplo el grid-colum-star:; y el grid-colum-end:; los cuales indican hasta donde llegara un item
// por ejemplo imaginemos que le damos una id al item 1 de nuestro contenedor, y le ponemos un grid-colum-star:1; grid-colum-end:2; sera algo asi:
//  1 
// 2 3
// 4

// El gap, es una propiedad para separar tus elementos unos de otros, seria como el margin y paddin, solo que en esta ocacion es para todos los extremos y para todos los elementos dentro de el contenedor
//tambien esta el grid-template-rows:; la cual mide la anchura de las columnas, no las mide en horisontal si no en vertical, osea si pongo grid-template-rows:20px 20px; y asumamos que hay 2 numeros arriba y otros 2 numeros abajo, osea 2 columnas hacia abajo la primera sera de 20px y la de abajo seria tambien de 20px
//Tambien sirve el aling-content:; y justifi-content:; para centrar o poner al final o al princiopio todos los elementos 

