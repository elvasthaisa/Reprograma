// 8. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'

const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

function filtrarNome(arr) {
    const listaDeA = arr.filter(name => name.startsWith('A'))
    return listaDeA
}

console.log(filtrarNome(nomes))