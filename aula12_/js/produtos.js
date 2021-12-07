"use strict"

const url = "http://10.107.131.29:8080/produtos";

//sempre que trabalhamos com 
//requisição devemos fazer uma função assincrona
//?para que o await funcione, precisamos de uma função assincrona
const getProdutos = async () => {
    //?o fetch é uma requisição, para isso precisamos esperar (await)
    const response = await fetch(url);
    return response.json();
}

const postProduto = (produto) => {
    const options ={
        method: 'POST',
        //tranforma jason em string
        body: JSON.stringify(produto),
        headers: {
            'content-type' : 'application/json',
        }
    }
    fetch(url, options)
}

const deleteProdutos = (idProduto) => {
    const options = {
        method: 'DELETE',
        header: { 
            'content-Type' : 'application/json',
        },
    }

    fetch(`${url}/${idProduto}`, options)
}

export{getProdutos, postProduto, deleteProdutos}