"use strict" //fica vigiando o que faço de errado


//FUNÇÕES

function buttonOnOff (ligarState, desligarState) {
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")
    
    desligar.disabled = ligarState
    ligar.disabled = desligarState
}

function lampadaQuebrada() {
    return document.getElementById("lampada").
    src.indexOf("quebrada") !== -1
}

function ligarLampada() {
    const lampada = document.getElementById("lampada")

    if(!lampadaQuebrada()){
        lampada.src = "img/ligada.jpg"
        buttonOnOff(false, true)
    }
}

function desligarLampada() {
    const lampada = document.getElementById("lampada")


    if(!lampadaQuebrada()){

        lampada.src = "img/desligada.jpg"
        buttonOnOff(true, false)
    }
}

function quebrarLampada() {
    const lampada = document.getElementById("lampada")
    
    lampada.src = "img/quebrada.jpg"
    buttonOnOff(true, true)
}



//EVENTO
document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)

document.getElementById("lampada").addEventListener("dblclick", quebrarLampada)
document.getElementById("lampada").addEventListener("mouseover", ligarLampada)
document.getElementById("lampada").addEventListener("mouseleave", desligarLampada)

