const randomNumber = Math.random();
const Result = randomNumber < 0.5 ? 'Heads' : 'Tails';
const Tails = document.querySelector('.Tails')
const Heads = document.querySelector('.Heads')
let Guess = '';
localStorage.getItem('Score')
let Score = JSON.parse(
localStorage.getItem('Score')
)
if (Score === null){
        let Score = {
        Wins: 0,
        Losses: 0
    }
}
function DecideWhoWin(){
    console.log(Guess === Result ? 'You win!' : 'You lose!');
    console.log(Guess)
    console.log(Result)
    if (Result === Guess){
        Score.Wins += 1
    }else {
        Score.Losses += 1
    }
    localStorage.setItem('Score', JSON.stringify(Score))
    //console.log(localStorage.getItem('Score'))
    console.log(Score)
}
Tails.addEventListener('click', function(){
Guess = 'Tails'
DecideWhoWin()
})
Heads.addEventListener('click', function(){
Guess = 'Heads'
DecideWhoWin()
})
