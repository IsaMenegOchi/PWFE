"use strict"

const imagens = [
    "./img/demon-slayer.jpg",
    "./img/giyu-tomioka.png",
    "./img/inosuke-hashibira.jpg",
    "./img/luas-superiores.jpg",
    "./img/muzan-kibutsuji.png",
    "./img/nezuko-kamado.jpg",
    "./img/tanjiro-kamado.png",
    "./img/zenitsu-agatsuma.jpg",
]

//pega uma string e tranforma em array
const limparId = (urlImage) => urlImage.split("/")[2].split(".")[0].replace(" ", "-").toLowerCase()

const criarItem = (urlImage) => {
    const container = document.querySelector(".galeria-container")

    //*ele esta na memória, ou seja, é uma variave, e não modifica o documento diretamente (e cria o "a")
    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImage)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImage}" alt="">`
    container.appendChild(novoLink)
}

const criarSlide = (urlImage, indice, arr) => {
    const containerSlide = document.querySelector(".slide-container")
    

    const indiceAnterior = indice -1
    if (indice > 0){
        indiceAnterior = indice -1
    }
    else{
        indiceAnterior = arr.length -1
    }

    
    const idAnterior = limparId(arr[indiceAnterior])

    const idProximo = indice +1

    const novaDivSlide = document.createElement("div")
    novaDivSlide.id = `${limparId(urlImage)}`
    novaDivSlide.classList.add("slide")
    
    novaDivSlide.innerHTML = `
    <div class="imagem-container">
        <a href="" class="fechar">&#10006;</a>
        <a href="#zenitsu-agatsuma" class="navegacao anterior">&#171;</a>
        <img src="${urlImage}" alt="">
        <a href="#giyu-tomioka" class="navegacao proximo">&#187;</a>
    </div>`


   

    //     const novaDivImage = document.createElement("div")
    //     novaDivImage.classList.add("imagem-container")

    //         const novoLinkFechar = document.createElement("a")
    //         novoLinkFechar.classList.add("fechar")
    //         novoLinkFechar.innerHTML = "&#10006;"

    //         const novoLinkAnterior = document.createElement("a")
    //         novoLinkAnterior.href = idImageAnterior
    //         novoLinkAnterior.classList.add("navegacao")
    //         novoLinkAnterior.classList.add("anterior")
    //         novoLinkAnterior.innerHTML = "&#171;"

    //         const imagem = document.createElement("img")
    //         imagem.src = urlImage
            
    //         const novoLinkProximo = document.createElement("a")
    //         novoLinkAnterior.href = idImageProxima
    //         novoLinkAnterior.classList.add("navegacao")
    //         novoLinkAnterior.classList.add("proximo")
    //         novoLinkAnterior.innerHTML = "&#187;"

    //     novaDivImage.innerHTML = novoLinkFechar + novoLinkAnterior + imagem + novoLinkProximo

    // novaDivSlide.innerHTML = novaDivImage

    containerSlide.appendChild(novaDivSlide)

}

const carregarImagens = () => imagens.forEach(criarItem)
const carregarSlide = () => imagens.forEach(criarSlide)


carregarImagens()
carregarSlide()