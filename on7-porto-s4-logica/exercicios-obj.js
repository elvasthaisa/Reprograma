// 1) Crie uma função que receba 3 parâmetros: o nome de um livro, a quantidade de páginas e a autoria. Retorne um objeto no formato: {titulo: "nome do livro", paginas: "número de páginas", autoria: "nome da pessoa"}

// Exemplo: 
// objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles') 

function livroFavorito(titulo, autoria, paginas) {
    return ({
    titulo, // mesma coisa que titulo: titulo
    autoria,
    paginas
    }) // parênteses para retornar o objeto diretamente
}

console.log(livroFavorito('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 80))

// 2) Aproveite a função acima em outra função, que deve retornar a seguinte frase: "O livro XXXX foi escrito por XXX e tem XXX páginas". Você deve utilizar a função que já está pronta, e não reescrever a lógica dela dentro dessa nova função.

function imprimeFrase() {
    const newObj = livroFavorito('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 80)
    console.log(`O livro ${newObj.titulo} foi escrito por ${newObj.autoria} e tem ${newObj.paginas} páginas`)
}

imprimeFrase()

// 3) Crie uma função que receba um objeto como o abaixo:

const pessoa = {
  nome: 'Nazaré',
  sobrenome: 'Tedesco',
}

// Dado um objeto que tem uma propriedade 'nome' e uma propriedade 'sobrenome', a função deve retornar um novo objeto com as mesmas propriedades que o objeto recebido e mais uma propriedade, chamada 'nomeCompleto', cujo valor é uma string com o nome e sobrenome separados por um espaço.

function returnName(obj) {
    obj.nomeCompleto = `${obj.nome} ${obj.sobrenome}`
    return obj
}

console.log(returnName(pessoa))

// 4) Crie uma função que receba o objeto abaixo e o nome de uma das chaves, e retorne a soma de todos os elementos do array que for selecionado através da chave.

const objetoArrays = {
    array1: [1, 2, 3],
    array2: [5, 6, 7, 8],
    array3: [9, 9, 9]
}

//Forma 1:
function somaArray(obj, arr) {
    let soma = 0

    for(let i = 0; i < obj[arr].length; i++) {
        soma += obj[arr][i]
    }
    return soma
}

console.log(somaArray(objetoArrays,'array2'))

//Forma 2: forEach não retorna nada
function somaArrayForEach(obj, chave) {
    let total = 0
    obj[chave].forEach( function(indice) {
        total += indice 
    })
    return total
}

console.log(somaArrayForEach(objetoArrays, 'array3'))

//Forma 3: map SEMPRE retorna uma array
function somaArrayMap(obj, chave) {
    let total = 0
    const arrResultado = obj[chave].map( function(indice) {
        total += indice 
        return total
    })
    return arrResultado
}

console.log(somaArrayMap(objetoArrays, 'array3'))
