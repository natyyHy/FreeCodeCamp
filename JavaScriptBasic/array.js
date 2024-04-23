// array com strings ou numeros --> ["String" , 10]
//array multidimensional --> [["Jose" , 34] , ["Lucas" , 18]]

const myArray = ["String" , 10]
console.log(myArray[0], myArray[1])

const myArray2 = [["Jose", 34] , ["Lucas" , 18]]
console.log("Aluno: " + myArray2[0][0] + " / Idade: " + myArray2[0][1] + " anos")

//modificar dados de array

const array = [98,65,43]
array[0] = 100
console.log(array[0])

//acessar array multidimencionais 

/*Quando você usa colchetes para acessar seu array, o primeiro conjunto de colchetes se
refere às entradas no array mais exterior (o primeiro nível), e cada par adicional de
colchetes refere-se ao próximo nível de entradas interno*/


const array_2 = [[12 , 13 , 14] , [17 , 18 ,19] , [[23, 24] , 28 ,29]]
console.log(array_2[2][0])