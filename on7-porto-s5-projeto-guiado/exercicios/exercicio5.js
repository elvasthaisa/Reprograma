// 5. Some uma lista de notas de escola

const notas = [5, 4, 3, 0, 10]

function somaNotas(arr) {
    const total = arr.reduce((acc, curr) => acc + curr, 0)
    return total
}

console.log(somaNotas(notas))
