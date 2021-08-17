// FUNÇÃO CALCULAR IMC

function calcularIMC (peso, altura){
    return (peso / (altura * altura)).toFixed(1)
}

// FUNÇÃO CLASSIFICAR IMC

function classificarIMC(imc){
    let classificacao = ""

    if(imc < 18.5){
        classificacao = "abaixo do peso ideal";
    }
    else if(imc >= 18.5 && imc <= 29.9 ){
        classificacao =  "peso ideal. Parabéns!!!";
    }
    else if(imc >= 25 && imc <= 29.9 ){
        classificacao = "acima peso ideal";
    }
    else if(imc >= 30 && imc <= 34.9){
        classificacao = "obesidade grau I";
    }
    else if(resultado >= 35 && imc <= 39.9){
        classificacao =  "com obesidade grau II"; 
    }
    else{
        classificacao = "obesidade grau III";
    }

    return classificacao
}
function camposValidos(){
    const nome = document.getElementById("nome").value
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)
    
    return  (nome.trim()/*retira os espaços que for dado*/ 
    !== "" && !isNaN(peso) && altura.value !== NaN)

}


function exibirIMC (){
    const nome = document.getElementById("nome").value
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)
    const resultado = document.getElementById("resultado")
    
    if(camposValidos){

        
        const imc = calcularIMC(peso, altura)

        const classificacao = classificarIMC(imc)
        
        resultado.textContent = `${nome} seu IMC é ${imc} e você está ${classificacao}` //apenas conseguimos com crase fazer o templete string
    } 

    else{
        resultado.textContent = "Preencha todos os campos"

    }
}

document.getElementById("calcular")
    .addEventListener("click", exibirIMC)