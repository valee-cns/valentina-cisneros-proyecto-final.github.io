addEventListener("DOMContentLoaded", () =>{
    const boton_menu = document.querySelector(".boton-menu")
    if(boton_menu){
        boton_menu.addEventListener('click', () =>{
            const barra_nav = document.querySelector(".barra-nav")
            barra_nav.classList.toggle('show')
        })
    }
})


let verMas = document.getElementById('verMas')
let ocultar = document.getElementById('ocultar')
let verMenos = document.getElementById('verMenos')

verMas.addEventListener('click', mostrar);

 function mostrar(){
    ocultar.classList.add('mostrar')
 }

 verMenos.addEventListener('click', ocultamos);

 function ocultamos(){
    ocultar.classList.remove('mostrar')
 }
