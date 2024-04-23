
//operador de igualdade (==) ele tambem mostrar igualdade mesmo que os tipos de dados sejam diferentes

function igualOuNaoIgual(val){

    if(val == 12 ){  // ou numero 12

        return "Igual"
    }

    return "NotIgual"
}

console.log(igualOuNaoIgual("12"))
console.log(igualOuNaoIgual(13))

//operador de igualdade estrita (===) é diferente , ele mostrar igualdade mas nao realizar a conversao de tipo(que nem o (==))

function equalOurNotEqual(val){

    if(val === 12){
        return "Equal"
    }

    return "Not Equal"
}

console.log(equalOurNotEqual(12))
console.log(equalOurNotEqual("12"))

//operador de desingualdade (!=) 

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

function desigualdade(val){

    if(val != "1"){
        return "Nao Iguais"
    }
    return "Iguais"
}
console.log(desigualdade(1))
console.log(desigualdade(2))

//operador de desigualdade estrito (!==) (nao convertir)

3 !==  3  // false
3 !== '3' // true
4 !==  3  // tru

function desigualdadeEstrito(val){

    if(val !== "1"){
        return "Nao Igual"
    }

    return "Igual"
}
console.log(desigualdadeEstrito(1))
console.log(desigualdadeEstrito("1"))

//operador (>) de maior alem de comparar ,tambem convertir o tipo de dados

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

//operador (>=) maior que ou igual tambem convertir os tipos de dados

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

//operador menor que (<) tambem convetir os tipos de dados

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false

//operador menor que ou igal (<=) tambem convetir os tipos de dados

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false

