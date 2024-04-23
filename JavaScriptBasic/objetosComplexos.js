/* Estrutura de Dados flexível. Um objeto JavaScript é uma forma de lidar com dados flexíveis.
Eles permitem combinações arbitrárias de strings, numbers, booleans, arrays, functions e objects.*/

//Aqui está um exemplo de estrutura de dados complexas:

const ourMusic = [
    {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": [ 
        "CD", 
        "Cassette", 
        "LP"
      ],
      "gold": true
    }
  ];

//CRIANDO UM OBJETO COM DOIS DADOS (DOIS ALBUM)

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": ["CD","8T","LP"],
      "gold": true
    },
    //novo album
    {
      "artist": "Billie Eilish",
      "title": "Your Power",
      "release_year": 2020,
      "formats": ["CD","8T","LP"]
    }
  ]

  //SUBPROPRIEDADES 

  const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  
  ourStorage.cabinet["top drawer"].folder2;
  ourStorage.desk.drawer;

  //atribuindo a variavel o valor "maps"
  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"]
  console.log(gloveBoxContents)
 
//Semelhante ao acesso de objetos aninhados, a notação de colchetes pode ser encadeada para se acessar arrays aninhados.

//como se acessar um array aninhado:

const ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];
  
  ourPets[0].names[1]
  ourPets[1].names[0];

  //TESTE COMO ACESSAR 

  const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1]
  console.log(secondTree)
