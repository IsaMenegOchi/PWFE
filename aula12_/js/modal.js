"use strict";


const openModal = () =>
    document.getElementById('modal').classList.add('active');

const closeModal = () =>
    document.getElementById('modal').classList.remove('active');

    //cria um objeto com valores
export{openModal, closeModal}