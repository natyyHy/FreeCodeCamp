function nextInLine(arr, item) {

    arr.push(item)
    const elemento = arr.shift()
    return elemento;
  }
  
  // Configuração
  let testArr = [1, 2, 3, 4, 5];
  
  // Exibir o código
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

