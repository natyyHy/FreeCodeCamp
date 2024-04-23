function countdown(n){
    if(n < 1){
  
      return []
    } else {
  
      const array = countdown(n - 1)
      array.unshift(n)
      return array
    }
    
}

countdown(10)

function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){
        return []
    } else {
        const arr = rangeOfNumbers(startNum + 1, endNum)
        arr.unshift(startNum)
        return arr

    }
  };

  console.log(rangeOfNumbers(10, 10))