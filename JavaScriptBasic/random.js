//JavaScript tem a função Math.random() que gera
//um número decimal aleatório entre 0 (incluso) e 1 (excluso). Assim, Math.random() pode retornar um 0 mas nunca retornará 1.

function randomFraction() {

    return console.log(Math.random(10))
  }

randomFraction()

// gerar e retornar um número natural aleatório entre 0 e 9

function random0Ate9(){

    return Math.floor(Math.random() * 10)
}

console.log(random0Ate9())

//função chamada randomRange que recebe um intervalo de myMin a myMax e retorne um número 
//natural aleatório que é maior ou igual a myMin e menor ou igual a myMax.

function randomRange(myMin, myMax) {

    const numero = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
    return console.log("RANDOM (MIN E MAX) " + numero)
}

randomRange(1,40)