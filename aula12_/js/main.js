'use strict';

//desestruturamos o objeto
import{openModal, closeModal} from "./modal.js";
import{getProdutos, postProduto, deleteProdutos} from "./produtos.js";
import{imagemPreview} from "./imagemPreview.js"

//podemos não desestruturar
//*import teste from "./modal.js"
//*teste{openModal, closeModal}


//deste modo desestruturamos os produtos
const criarLinha = ({id, nome, preco, categoria, foto}) => {
    
    const linha = document.createElement('tr');
    linha.innerHTML = `
    <td>
        <img src="${foto}" class="produto-image" />
    </td>
    <td>${nome}</td>
    <td>${preco}</td>
    <td>${categoria}</td>
    <td>
        <button type="button" class="button green" data-idproduto="${id}">
            editar
        </button>
        <button type="button" class="button red" data-idproduto="${id}">
            excluir
        </button>
    </td>`;
    return linha;
}


//lista os produtos
//?o await (de gete produtos) funciona apenas com função assincrona
const carregarTabela = async() => {
    const conteiner = document.querySelector(".records tbody");
    //pegar todos os produtos
    //?colocamos o await aq pois o getProdutos() devolve uma promessa
    const produtos = await getProdutos();
    //me devolve todas as linhas do jason
    const linhas = produtos.map(criarLinha);
    //os tres pontos espalhas os objetos e não precisamos fazer a mão
    conteiner.replaceChildren(...linhas)
}

//passamos onde vai estar a imagem, e a imagem
const handleFile = () => imagemPreview("inputFile", "imagePreview");

const salvarProduto = () => {
    const produto = {
        nome: document.getElementById('product').value,
        preco: document.getElementById('price').value,
        categoria: document.getElementById('category').value,
        foto: document.getElementById('imagePreview').src,
    };
    postProduto(produto);
    closeModal();
    carregarTabela();
}

//target - onde eu executei a ação
const handleClickTbody = ({target}) => {

    if(target.type === 'button'){
        const acaoBotao = target.textContent.trim();
        if (acaoBotao === 'excluir'){
            deleteProdutos(target.dataset.idproduto);
            carregarTabela();
        }

    }

}

carregarTabela();


//EVENTOS
document
    .getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);

document.getElementById('cancel').addEventListener('click', closeModal);

document.getElementById('inputFile').addEventListener('change', handleFile);

document.getElementById('save').addEventListener('click', salvarProduto);

document.getElementById('.records tbody').addEventListener('click', handleClickTbody);