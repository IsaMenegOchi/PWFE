"use strict"

const numero = 5;

//importa uma função
import ePar from './uteis.js'

//desestruturação - coloca entre chaves as funções que precisamos importar
import {somar, fatorial} from './uteis.js'

//podemos colocar funções de sites tambem
// import {soma, fatorial} from 'https://ww.meusite.com.br/matematica.js'

console.log(ePar(5))
console.log(fatorial(5))
console.log(somar(5, 4))