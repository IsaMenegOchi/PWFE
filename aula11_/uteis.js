// devemos sempre tentar criar funções limpas, ou que fazem coisas unicas
const soma = (...numeros) => numeros.reduce((soma, numero) => soma + numero, 0);

//exportar a função direto
export const ePar = (numero) => numero % 2 === 0;

export const fatorial = (numero) => (numero <= 1 ? 1 : numero * fatorial(numero - 1));


//Exporta uma função
export default ePar;

//Exporta varias funções
export {
    soma as somar,
    fatorial
}