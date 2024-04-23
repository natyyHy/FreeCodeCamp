// o metodo .push() facilita para atribuir novos valores em uma array // ele insere no final dessa array

// Configuração
const myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3])
console.log(myArray)

//metodo .pop() é usado para remorer um valor final de um array e podemos atribuir uma variavel com o valor removido
//pode ser removido com strings,numbers, e array multidimensionais/aninhados

myArray.pop()
console.log(myArray)

//metodo .shift() é semelhante do .pop() , mas inves de tirar o ultimo array , ele tira o PRIMEIRO

const removedFromOurArray = myArray.shift()
console.log(removedFromOurArray)

//medoto .unshift() adicionar uma novo valor em uma array

myArray.unshift(["Jiji", 29])
console.log(myArray)