const randomNumber = Math.random();
const Result = randomNumber < 0.5 ? 'Heads' : 'Tails';
const Tails = document.querySelector('.Tails')
const Heads = document.querySelector('.Heads')
let Guess = '';
Tails.addEventListener('click', function(){
Guess = 'Tails'
console.log(Guess === Result ? 'You win!' : 'You lose!');
console.log(Guess)
console.log(Result)
})
Heads.addEventListener('click', function(){
Guess = 'Heads'
console.log(Guess === Result ? 'You win!' : 'You lose!');
console.log(Guess)
console.log(Result)
})
