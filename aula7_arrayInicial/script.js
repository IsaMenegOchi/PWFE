"use strict"


    //map - função que percorre todo o array, retorna novo array do mesmo tamanho que o original
        //ele passa 3 argumentos
        //1°  - elemento
        //2° - indice
        //3° - array
        //podemos ter o acomulador
    //filter - percorre todo o array e filtra
    //reduce - reduz a um resultado so

const numeros = [2, 27, 8, 13 , 100, 12, 73]


//1- Adicionando 100 a cada elemento
   
    //utilizando o map
    const adicionar100 = (numero) => numero + 100
    const numeros100 = numeros.map(adicionar100)

    //função normal com for
    // function adicionar100(array){
    //     var length = array.length;
    //     for (var i = 0; i < length; i++) {
    //     array[i] += 100;
    //     }
    //     return array
    // }
    // console.log(adicionar100(numeros))

    console.log(numeros100)



//2- aparecer somente menores que 20

    //utilizando o filter
    const numeroMenor20 = (numero) => numero <= 20
    const menores20 = numeros.filter(numeroMenor20)

    //função normal com while
    // function até20(array){
    //     var length = array.length;
    //     var max = 20
    //     var count = 0
    //     while(length >= max){
    //         array[count] += array[count]+array[count]
    //     }

    //     return array
    // }
    // console.log(até20(numeros))

    console.log(menores20)


//3- soma de todos os elementos

    //utilizando o reduce
    const numerosSoma = (a, b) => a + b
    const somarElementos = numeros.reduce(numerosSoma)
   
    //função normal com while
    // function somaElementos(array){
    //     var length = array.length;
    //     for(var i = 0; i < length; i++){
    //         array[i] += array[]
    //     }
    // }
    
    console.log(somarElementos)



//Dando desconto de 50%
    const desconto50 = (numero) => numero*(50/100)
    const numeros50= numeros.map(desconto50)
    
    console.log(numeros50)

    
//numeros pares
    const par = (numero) => numero % 2 == 0
    const numeroPares = numeros.filter(par)
    
    console.log(numeroPares)


//juntando as funções
    const paresMenor20 = numeros.filter(par).filter(numeroMenor20).reduce(numerosSoma)
    
    console.log(paresMenor20)


//grasshopper

for (var letter of 'grasshopper') {
  console.log(letter)}

 