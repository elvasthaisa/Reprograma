// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado

function soma(numero1, numero2) {
  return numero1 + numero2
}

function subtracao(numero1, numero2) {
  return numero1 - numero2

function multiplicacao(numero1, numero2, numero3) {
  return numero1 * numero2 * numero3
}

function divisao(numero1, numero2) {
  return numero1 / numero2
}

function operacoes(num1, num2, operacao) {
  switch (operacao) {
    case "soma":
      return num1 + num2
    case "subtracao":
      return num1 - num2
    case "multiplicacao":
      return num1 * num2
    case "divisao":
      return num1 / num2
    }
}

console.log(soma(2, 2))
console.log(subtracao(4, 2))
console.log(multiplicacao(4, 4))
console.log(divisao(4, 2))
console.log("CONSOLE LOG DA FUNCAO OPERAÇÕES", operacoes(2, 2, "subtracao"))

// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.

function multiplicaSemZero(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return `não queremos zero`
  }
  return num1 * num2
}

console.log(multiplicaSemZero(4, 3))


function divideSemZero(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return `não queremos zero`
  }
  return num1 / num2
}

console.log(divideSemZero(10, 2))

// 3) crie uma função que chame internamente qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function imprimeFrase() {
  console.log(`O resultado da operação é ${divideSemZero(100,2)}`)
}

imprimeFrase()


// 4) utilizando as funções de soma e multiplicação já feitas nos exercícios anteriores, crie uma nova função que chame essas funções e resolva a conta 36325 * (9824 + 777).

function calculo() {
  const somaNumeros = soma(9824, 777)
  const produtoNumeros = multiplicacao(36325, somaNumeros)
  console.log(produtoNumeros)
}

calculo()

// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100 (por exemplo, 54 e 12). Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.

const input = require('readline-sync')

function geraNumeros(num1, num2) {
  const input1 = input.question('Insira um numero: ')
  const input2 = input.question('Insira outro numero: ')
  
  if(parseInt(input1) < parseInt(input2)) {
    min = parseInt(input1)
    max = parseInt(input2)
  } else {
    min = parseInt(input2)
    max = parseInt(input1)
  }

  num1 = Math.floor(Math.random() * max) + min
  num2 = Math.floor(Math.random() * max) + min

  console.log(`A soma de ${num1} e ${num2} é ${soma(num1, num2)}`)
}

geraNumeros()

// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 números
// 2. Se qualquer um dos três números não forem informados, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 números, somando `2` ao resultado da multiplicação. DICA: pesquise o que aparece no console.log caso uma função precise de um parâmetro, mas não receba nenhum.  

const input = require('readline-sync')

const input1 = input.question('Informe um numero: ')
const input2 = input.question('Informe outro numero: ')
const input3 = input.question('Informe um outro numero: ')

if (input1 == '' || input2 == '' || input3 == '') {
  console.log('Preencha todos os valores corretamente!')
} else {
  const produto = multiplicacao(parseFloat(input1), parseFloat(input2), parseFloat(input3))
  const resultado = produto + 2
  console.log(resultado)
}

// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um parâmetro for passado, retorne o valor do parâmetro.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum parâmetro for passado, retorne "não recebeu parâmetro"

function imprimeResultado(par1, par2, par3) {
  if(par1 != undefined && par2 === undefined && par3 === undefined) {
    return par1
  } else if(par1 != undefined && par2 != undefined && par3 === undefined) {
    return par1 + par2
  } else if(par1 != undefined && par2 != undefined && par3 > 0) {
    return (par1 + par2)/par3
  }
}

console.log(imprimeResultado(2, 7, 9))

// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.

function converteString(str) {
  return str.split("").reverse().join("")
}

console.log(converteString("Thaísa"))

// 9) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

function isPalindrome(str) {
  if(str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('arara'))
console.log(isPalindrome('amor'))

// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"

function retornaMaiorCaracter(str1, str2) {
  if(str1.length < str2.length) {
    return str2
  } else {
    return str1
  }
}

console.log(retornaMaiorCaracter('onomatopeia', 'inconsciente'))