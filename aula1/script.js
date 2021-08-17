const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")

const somar = document.getElementById("somar")
const dividir = document.getElementById("dividir")
const multiplicar = document.getElementById("multiplicar")
const subtrair = document.getElementById("subtrair")

const formulario = document.getElementById("formulario")

function somando() {
    if(numero1.value !== "" && numero2.value !== ""){
        resultado.value = parseInt(numero1.value) + parseInt(numero2.value) //conversão de string para número
        //mesmo que coloquemos o input como number, devemos colocar o parse para a conversão de String para numero    
        formulario.classList.add("somar")
        formulario.classList.remove("dividir")
        formulario.classList.remove("subtrair")
        formulario.classList.remove("multiplicar")
    }
    else{
        alert("Preencha todos os campos")
    }
}

function dividindo() {
    if(numero1.value !== "" && numero2.value !== ""){
        resultado.value = parseInt(numero1.value) / parseInt(numero2.value)
        formulario.classList.add("dividir")
        formulario.classList.remove("somar")
        formulario.classList.remove("subtrair")
        formulario.classList.remove("multiplicar")
    }
    else{
        alert("Preencha todos os campos")
    }
}

function multiplicando() {
    if(numero1.value !== "" && numero2.value !== ""){
        resultado.value = parseInt(numero1.value) * parseInt(numero2.value)
        formulario.classList.add("multiplicar")
        formulario.classList.remove("somar")
        formulario.classList.remove("subtrair")
        formulario.classList.remove("dividir")
    }
    else{
        alert("Preencha todos os campos")
    }
}

function subtraindo() {
    if(numero1.value !== "" && numero2.value !== ""){
        resultado.value = parseInt(numero1.value) - parseInt(numero2.value) 
        formulario.classList.add("subtrair")
        //ou podemos colocar desse jeito ao inves de remover um por um
        
         // formulario.classList.remove = []
        formulario.classList.remove("somar")
        formulario.classList.remove("dividir")
        formulario.classList.remove("multiplicar")
       
    }
    else{
        alert("Preencha todos os campos")
    }
}


somar.addEventListener("click", somando) //dois parametros/argumento 1. 2. call back (função/método)
subtrair.addEventListener("click", subtraindo)
dividir.addEventListener("click", dividindo)
multiplicar.addEventListener("click", multiplicando)
