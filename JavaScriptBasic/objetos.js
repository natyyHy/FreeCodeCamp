import { question } from "readline-sync"

const myDog = {
    // Altere apenas o código abaixo desta linha
    name: "Elizabeth",
    legs: 5,
    tails: 1,
    enemy: ["Mimia","lika"]
  
    // Altere apenas o código acima desta linha
  };

//acessar propriedades de objetos usando (.)

// Configuração
const testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
  };
  
  const hatValue = testObj.hat
  const shirtValue = testObj.shirt

//acessar propriedades de objetos usando []
//Se a propriedade do objeto que você está tentando acessar possui um espaço no seu nome, você precisará usar a notação de colchetes.

// Configuração
const test2Obj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  const entreeValue = test2Obj["an entree"]   
  const drinkValue = test2Obj['the drink']

///Outro uso de notação de colchetes em objetos é para acessar a propriedade a qual está armazenada como o valor de uma variável

//exemplo

const compras = {
    1: "Arroz",
    2:'Feijao',
    3:'Milho',
    precoArroz: 12
}

const pergunta = Number(question(`Escolha o numero (1)-Arroz (2)-Feijao (3)-Milho : `))

const escolha = compras[pergunta]
console.log("voce escolheu " + escolha)

//para atualizar uma propriedade, basta usar o (.) ou [] e atribuir o novo valor

compras[1] = 'Oleo'
compras.precoArroz = 9
console.log(compras[1])
console.log(compras.precoArroz)

//Para adicionar uma nova propriedade, segue o mesmo metodo de atualizar uma propriedade

const Dog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

Dog.enemy = "Lika"
console.log(Dog.enemy)

//para deletar uma propriedade, segue e se assemelhar aos metodos anteriores, mas comecando com o comando Delete

delete Dog.legs
console.log(Dog)

// o metodo .hasOwnProperty() serve para verificar se uma propriedade existe, ele retorna true quando existe ou false quando nao existe

function checkPropriedade(object,prop){

  return object.hasOwnProperty(prop)

}

console.log(checkPropriedade( { top: 'hat', bottom: 'pants' }, "midlle")) //false
console.log(checkPropriedade({top: 'hat', bottom: 'pants'}, 'top')) //true

//Podemos usar o metodo .hasOwnProperty() como uma expressao booleana , já que ele retorna True ou False

function checkObj(obj, checkProp) {
  
  if(obj.hasOwnProperty(checkProp)) return obj[checkProp] //se for verdade, vai retorna o valor verificado
  return "Not Found";  //Se for falso , vai retorna a string nao encontrado
  
}

console.log(checkObj({top:"Ovo" , bottom : 'Milho'}, 'top')) 
