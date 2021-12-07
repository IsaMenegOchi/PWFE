"use strict";

//recevemos
const imagemPreview = (idFile, idImagem) => {
    //temos a tag de input do tipo file
    //pegamos apenas a primeira imagem caso haja a seleção de amis de uma imagem
    const file = document.getElementById(idFile).files[0];
    const preview = document.getElementById(idImagem);
    //le imagens
    const fileReader = new FileReader();


    if(file){
        fileReader.readAsDataURL(file)
    } else{
        preview.src = "./img/foto.png"
    }

    //quando temrinar de carregar
    fileReader.onloadend = () => preview.src = fileReader.result
} 

export{imagemPreview}

