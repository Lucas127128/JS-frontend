const Rock = document.querySelector('.Rock')
const Paper = document.querySelector('.Paper')
const Scissors = document.querySelector('.Scissors')
const Reset = document.querySelector('.Reset')
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
let Score = JSON.parse(
localStorage.getItem('Score')
)
if(Score === null){
    Score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
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
localStorage.setItem('Score', JSON.stringify(Score))
console.log(localStorage.getItem('Score'))
})
Paper.addEventListener('click', function(){
UserChoice = 'Paper'
DecideWhoWin()
GenerateRandomChoice()
console.log(ComputerChoice)
localStorage.setItem('Score', JSON.stringify(Score))
console.log(localStorage.getItem('Score'))
})
Scissors.addEventListener('click', function(){
UserChoice = 'Scissors'
DecideWhoWin()
GenerateRandomChoice()
console.log(ComputerChoice)
localStorage.setItem('Score', JSON.stringify(Score))
console.log(localStorage.getItem('Score'))
})
Reset.addEventListener('click', function(){
Score.wins = 0
Score.ties = 0
Score.losses = 0
localStorage.setItem('Score', JSON.stringify(Score))
console.log(localStorage.getItem('Score'))
})
console.log(ComputerChoice)
localStorage.setItem('Score', JSON.stringify(Score))
console.log(localStorage.getItem('Score'))