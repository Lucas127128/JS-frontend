const Rock = document.querySelector('.Rock')
const Paper = document.querySelector('.Paper')
const Scissors = document.querySelector('.Scissors')
const Reset = document.querySelector('.Reset')
const AutoPlay = document.querySelector('.AutoPlay')
const DisplayScore1 = document.querySelector('.DisplayScore1')
const DisplayScore2 = document.querySelector('.DisplayScore2')
const DisplayScore3 = document.querySelector('.DisplayScore3')
const DisplayResult = document.querySelector('.DisplayResult')
const DisplayComputerMove = document.querySelector('.DisplayComputerMove')
const ResetConfirm = document.querySelector('.ResetConfirm')
const ConfirmReset = document.querySelector('.ConfirmReset')
const DeclineReset = document.querySelector('.DeclineReset')
const ResetConfirmMessage = document.querySelector('.ResetConfirmMessage')
let RockPaperScissors = ""
let randomIndex = 0
let ComputerChoice = ''
let IsAutoPlaying = false
let IntervalId;
const GenerateRandomChoice=()=> {
    RockPaperScissors = ['Rock', 'Paper', 'Scissors'];
    randomIndex = Math.floor(Math.random() * RockPaperScissors.length);
    ComputerChoice = RockPaperScissors[randomIndex]
}
const GenerateUserRandomChoice=()=>{
    RockPaperScissors = ['Rock', 'Paper', 'Scissors'];
    randomIndex = Math.floor(Math.random() * RockPaperScissors.length);
    UserChoice = RockPaperScissors[randomIndex]
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

const DecideWhoWin=(PlayerMove = UserChoice)=>{
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
    }

const SetLocalStorageAndDisplayScore=()=>{
    localStorage.setItem('Score', JSON.stringify(Score))
    console.log(localStorage.getItem('Score'))
    DisplayResult.innerHTML=`${Result}`
    if(ComputerChoice==='Rock'){
        DisplayComputerMove.innerHTML = `The computer move is ✊`
    }else if (ComputerChoice==='Paper'){
        DisplayComputerMove.innerHTML = `The computer move is 🖐️`
    }else if (ComputerChoice==='Scissors'){
        DisplayComputerMove.innerHTML = `The computer move is ✌️`
    }

    DisplayScore1.innerHTML = `Wins:${Score.wins}`                   
    DisplayScore2.innerHTML = `Losses:${Score.losses}`                        
    DisplayScore3.innerHTML = `Ties:${Score.ties}`
}
const RemoveConfirmMessage=()=>{
    ResetConfirm.innerHTML = ``
    ResetConfirmMessage.innerHTML=``
    ConfirmReset.innerHTML=``
    DeclineReset.innerHTML=``
}
Rock.addEventListener('click', function(){
    UserChoice = 'Rock'
    DecideWhoWin()
    GenerateRandomChoice()
    console.log(ComputerChoice)
    SetLocalStorageAndDisplayScore()
})
Paper.addEventListener('click', function(){
    UserChoice = 'Paper'
    DecideWhoWin()
    GenerateRandomChoice()
    console.log(ComputerChoice)
    SetLocalStorageAndDisplayScore()
})
Scissors.addEventListener('click', function(){
    UserChoice = 'Scissors'
    DecideWhoWin()
    GenerateRandomChoice()
    console.log(ComputerChoice)
    SetLocalStorageAndDisplayScore()
})
Reset.addEventListener('click', function(){
    ConfirmReset.innerHTML=`<button class = "ConfirmReset" style="background-color: white;">Yes</button>`
    DeclineReset.innerHTML=`<button class = "DeclineReset" style="background-color:#f2762e;">No</button>`
    ResetConfirmMessage.innerHTML=`
    Are you sure you want to reset the scores?`
})
ConfirmReset.addEventListener('click', function(){
    Score.wins = 0
    Score.ties = 0
    Score.losses = 0
    RemoveConfirmMessage()
    SetLocalStorageAndDisplayScore()
})
DeclineReset.addEventListener('click', function(){
    RemoveConfirmMessage()
})
AutoPlay.addEventListener('click', function(){
    if(!IsAutoPlaying){
        IntervalId = setInterval(function(){
        GenerateUserRandomChoice()
        DecideWhoWin()
        GenerateRandomChoice()
        console.log(ComputerChoice)
        SetLocalStorageAndDisplayScore()
        AutoPlay.innerHTML='Stop auto play'
        },1000)
        IsAutoPlaying = true
    }else{
        AutoPlay.innerHTML='Auto play'
        clearInterval(IntervalId)
        IsAutoPlaying = false
    }
})
console.log(ComputerChoice)
localStorage.setItem('Score', JSON.stringify(Score))
console.log(localStorage.getItem('Score'))