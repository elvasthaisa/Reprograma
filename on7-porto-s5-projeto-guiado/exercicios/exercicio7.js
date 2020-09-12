// 7. Some somente os valores ímpares de uma lista

const valores = [2, 34, 56, 3, 9, 6, 55, 106];

function filtrarImpares(arr) {
    const arrImpar = arr.filter(num => num % 2 !== 0)
    return arrImpar
}

console.log(filtrarImpares(valores))