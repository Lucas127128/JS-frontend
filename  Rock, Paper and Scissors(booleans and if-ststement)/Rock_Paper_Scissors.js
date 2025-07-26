const Rock = document.querySelector('.Rock')
const Paper = document.querySelector('.Paper')
const Scissors = document.querySelector('.Scissors')
let RockPaperScissors = ""
let randomIndex = 0
let ComputerChoice = ''
function GenerateRandomChoice() {
    RockPaperScissors = ['Rock', 'Paper', 'Scissors'];
    randomIndex = Math.floor(Math.random() * RockPaperScissors.length);
    ComputerChoice = RockPaperScissors[randomIndex]
}
GenerateRandomChoice()
let UserChoice = ''
let Result = ''
function DecideWhoWin(){
    if(ComputerChoice===UserChoice){
        Result = "Tie!"
    }else if(ComputerChoice==='Rock' && UserChoice==='Scissors'){
        Result = 'You lose!'
    }else if(ComputerChoice==='Rock' && UserChoice==='Paper'){
        Result = 'You win!'
    }else if(ComputerChoice==='Scissors' && UserChoice==='Paper'){
        Result = 'You lose!'
    }else if(ComputerChoice==='Scissors' && UserChoice==='Rock'){
        Result = 'You win!'
    }else if(ComputerChoice==='Paper' && UserChoice==='Rock'){
        Result = 'You lose!'
    }else if(ComputerChoice==='Paper' && UserChoice==='Scissors'){
        Result = 'You win!'
    }
    window.alert(`${Result}
The computer choice is ${ComputerChoice}.`)

}
Rock.addEventListener('click', function(){
UserChoice = 'Rock'
DecideWhoWin()
GenerateRandomChoice()
console.log(ComputerChoice)
})
Paper.addEventListener('click', function(){
UserChoice = 'Paper'
DecideWhoWin()
GenerateRandomChoice()
console.log(ComputerChoice)
})
Scissors.addEventListener('click', function(){
UserChoice = 'Scissors'
DecideWhoWin()
GenerateRandomChoice()
console.log(ComputerChoice)
})
console.log(ComputerChoice)