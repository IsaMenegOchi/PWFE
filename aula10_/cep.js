"use strict";

//expressão regular em que no inicio deve hazer os numeros de 0 a 9 e ter 8 caracteres
const cepValido = (cep) => /^[0-9]{8}$/.test(cep);

const limparFormulario = () => {
    document.getElementById("endereco").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("estado").value = "";
};

const preencherFomulario = async () => {
    const cep = document.getElementById("cep").value;

    if (cepValido(cep)) {
        const endereco = await pesquisarCep(cep);
        document.getElementById("endereco").value = endereco.logradouro;
        document.getElementById("cidade").value = endereco.localidade;
        document.getElementById("bairro").value = endereco.bairro;
        document.getElementById("estado").value = endereco.uf;

        console.log(endereco);
    } else {
        limparFormulario();
        alert("CEP inválido");
    }
};

const pesquisarCep = async (cep) => {
    //const cep = document.getElementById("cep").nodeValue
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const enderecoResposta = await fetch(url);
    const endereco = await enderecoResposta.json();

    return endereco;
};

document.getElementById("cep").addEventListener("focusout", preencherFomulario);
