const Rock = document.querySelector('.Rock')
const Paper = document.querySelector('.Paper')
const Scissors = document.querySelector('.Scissors')
const RockPaperScissors = ['Rock', 'Paper', 'Scissors'];
const randomIndex = Math.floor(Math.random() * RockPaperScissors.length);
let ComputerChoice = RockPaperScissors[randomIndex]
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
location.reload();

}
Rock.addEventListener('click', function(){
UserChoice = 'Rock'
DecideWhoWin()
})
Paper.addEventListener('click', function(){
UserChoice = 'Paper'
DecideWhoWin()
})
Scissors.addEventListener('click', function(){
UserChoice = 'Scissors'
DecideWhoWin()
})
console.log(ComputerChoice)