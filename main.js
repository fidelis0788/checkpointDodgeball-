const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
          constructor(name,skillSet){
            this.name = name
            this.skillSet = skillSet
          }
   
     
    
   } 
  
  class Teammate extends Player {
    constructor(name,skillSet,team){
super(name,skillSet)
   this.team = team
   this.number = Math.floor((Math.random() * 10) + 1);


    }

  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {
        makePlayer(person)
      })
      li.appendChild(button)
      li.appendChild(document.createTextNode(`${person.name} : ${person.skillSet}`))
      listElement.append(li)
    })
   
  }
  
  const makePlayer = (person) => {
  let player = new Player(person.name,person.skillSet)
      const listElement = document.getElementById('players')
      const li = document.createElement("li")
      const buttonred = document.createElement("button")
      const buttonblue = document.createElement("button")
      buttonred.innerHTML = "RedTeam"
      buttonblue.innerHTML = "blueTeam"
      li.appendChild(buttonred)
      li.appendChild(buttonblue)
      li.appendChild(document.createTextNode(`${player.name} ${player.skillSet}`))
      listElement.append(li)

      buttonblue.addEventListener("click",function(){
        makeTeamate(player,"blue")
        listElement.removeChild(li)
      })
      buttonred.addEventListener("click",function(){
      makeTeamate(player,"red")
      listElement.removeChild(li)
   })
      
  }
 function makeTeamate(player,color){
   let teammate = new Teammate(player.name,player.skillSet,color)
  const listElement = document.getElementById(color)
  const li = document.createElement("li")
  listElement.appendChild(li)
  li.appendChild(document.createTextNode(`${player.name}   ${teammate.number}`))
  
 }
 