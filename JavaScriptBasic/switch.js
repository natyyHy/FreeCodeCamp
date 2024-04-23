// switch é uma forma mais rapida de comparar se um valor é (===) ao outro valor
// o case é testado com o operador de igualdade estrito

function caseInSwitch(val) {
    let answer = "";
    
    switch (val){
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;
    }
    return answer;
  }
  
  console.log(caseInSwitch(1))

  //default, que será executada se nenhuma instrução case correspondente for encontrada.
  //Pense nisso como a instrução final else em uma cadeia de if/else

  function switchOfStuff(val) {
    let answer = "";
    
    switch(val){

        case "a":
            answer = "apple"
            break;
        case "b":
            answer = "bird"
            break;
        case "c":
            answer = "cat"
            break;
        default:
            answer = "stuff"
            break;
    }

    return answer;
  }
  
  switchOfStuff(1);

  //posso usar o swith com varias entradas e sai com uma saida

  function sequentialSizes(val) {
    let answer = "";
    
    switch (val){

        case 1:
        case 2:
        case 3:
            answer = "Low"
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
    }
    return answer;
  }
  
  sequentialSizes(1);

  //teste
  let answer = "";
  switch(val){

    case "bob":
        answer = "Marley"
        break;
    case 42:
        answer = "The Answer"
        break;
    case 1:
        answer = "There is no #1"
        break
    case 99:
        answer = "Missed me by this much!"
        break
    case 7:
        answer = "Ate Nine"
        break
    default:
        answer = ""
  }