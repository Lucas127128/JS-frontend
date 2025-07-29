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
const Score = {
    wins:0,
    losses:0,
    ties:0
}
function DecideWhoWin(PlayerMove = UserChoice){
    if(ComputerChoice===PlayerMove){
        Result = "Tie!"
    } else if(ComputerChoice==='Rock' && PlayerMove==='Scissors'){
        Result = 'You lose!'
    }else if(ComputerChoice==='Rock' && PlayerMove==='Paper'){
        Result = 'You win!'
    }else if(ComputerChoice==='Scissors' && PlayerMove==='Paper'){
        Result = 'You lose!'
    }else if(ComputerChoice==='Scissors' && PlayerMove==='Rock'){
        Result = 'You win!'
    }else if(ComputerChoice==='Paper' && PlayerMove==='Rock'){
        Result = 'You lose!'
    }else if(ComputerChoice==='Paper' && PlayerMove==='Scissors'){
        Result = 'You win!'
    }

    if(Result === 'You win!'){
        Score.wins +=1
    }else if(Result === 'You lose!'){
        Score.losses +=1
    }else if(Result === "Tie!"){
        Score.ties +=1
    }
    window.alert(`${Result}
The computer choice is ${ComputerChoice}.
Wins: ${Score.wins}     Losses: ${Score.losses}     Ties: ${Score.ties}
`)

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
