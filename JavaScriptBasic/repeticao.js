// Configuração
const myArray = [];

// Altere apenas o código abaixo desta linha
for(let i = 0; i <= 5; i++ ){

  myArray.push(i)
}

for(let i = 9; i >= 1; i--){

    myArray.push(i)
    console.log(myArray)
}



const myArr = [2, 3, 4, 5, 6];

// Altere apenas o código abaixo desta linha
let total = 0
for(let i = 0; i < myArr.length ;i++){

  total += myArr[i]
  console.log(total)
}

//Se você possui um array multidimensional, você pode usar a mesma lógica no ponto de passagem anterior para iterar através
//de arrays e de qualquer sub-array. Exemplo:

const arr = [
  [1, 2], [3, 4], [5, 6]
];


for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length;j++){
        console.log(arr[i][j])
    }
}

// um laço do...while garante que o código dentro do laço será executado pelo menos uma vez.

// Configuração
const Array = [];
let i = 10;

// Altere apenas o código abaixo desta linha
do { Array.push(i)
    i++
} while (i < 5)

console.log(Array)