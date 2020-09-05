// Exercícios práticos com for e arrays!

// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"

const arrayNomes = ['Thaísa', 'Magalhães', 'Elvas']

function imprimeNome(array) {
  for(let i=0; i < array.length; i++) {
    console.log(`índice ${i}, elemento '${array[i]}'`)
  }
}

imprimeNome(arrayNomes)

// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

function somaArray(arr) {
  let soma = 0
  for(let i = 0; i < arr.length; i++) {
    soma += arr[i]
  }
  return soma
}

console.log(somaArray([3,50,7]))

// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

function maiorCinco(arr) {
  const newArr = arr.filter(item => item > 5)
  return newArr
}

console.log(maiorCinco([88,15,0,2,5,1,4,12]))

// 4) Modifique a função anterior para que receba, além da array, o número para comparação (não deixar mais fixo como número 5).
// Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

function maiorNum(arr, num) {
  const novaArr = arr.filter(item => item > num)
  return novaArr
}

console.log(maiorNum([88,55,0,2,85,81,24,12], 80))

// 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
// Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
// EXTRA: Pesquisar uma maneira de iniciar com o menor número possível (dica: não é zero)

array = [56, 12, 168, 66]

function biggestNumber(arr) {
  let max = arr[0]
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i]
    }
  }
  console.log(max)
}

biggestNumber(array)

// 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: "o menor número é X e o maior número é Y".
// Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior número é 59 e o menor número é -5"

//Forma 1:
lista = [5, 37, 18, 59, 12, -5]

function retornaMaxMin(arr) {
  let max = arr[0]
  let min = arr[0]
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i]
    } 
  } 
  console.log(max)

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i]
    } 
  }
  console.log(min)
  console.log(`O maior número da lista é ${max} e o menor número é ${min}`)
}

retornaMaxMin(lista)


//Forma 2:
lista = [5, 37, 18, 59, 12, -5]

function reordenaArr(arr) {
  const newArr = arr.sort((a,b) => a-b) 
  let max = arr[0]

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      arr[i] = max
    }
  }
  return `O maior número da lista é ${max} e o menor número é ${arr[0]}`
}

console.log(reordenaArr(lista))