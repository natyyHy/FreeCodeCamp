//ParseInt

//A função acima converte a string 007 para o inteiro 7.
//Se o primeiro caractere na string não pode ser convertido em um número, então ele retorna NaN.

function convertToInteger(str) {

    return console.log(parseInt(str))
  }
  
  convertToInteger("56") // 56
  convertToInteger("a56") //Nan

//A função parseInt() analisa uma string e retorna um inteiro. É preciso um segundo argumento para o radix,
//que especifica a base do número na string. O radix pode ser um inteiro entre 2 e 36.

// parseInt(string, radix)

function converterInt(str) {

    return console.log(parseInt(str, 2 ))
}

converterInt("10011")