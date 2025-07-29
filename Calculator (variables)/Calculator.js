const One = document.querySelector(".One")
const Two = document.querySelector(".Two")
const Three = document.querySelector(".Three")
const Plus = document.querySelector(".Plus")
const Equal = document.querySelector(".Equal")
let Calculation = localStorage.getItem("Calculation")
if(Calculation === null){
    Calculation=''
}
let Answer = 0
let Calculate = document.createElement("li")
One.addEventListener('click', function(){
Calculation = `${Calculation}1`
//Calculate.remove()
Calculate.innerHTML = `<h2>${Calculation}</h2>` 
//console.log(Calculation)
console.log(Calculate)
localStorage.setItem("Calculation", Calculation)
})
Two.addEventListener('click', function(){
Calculation = `${Calculation}2`
//Calculate.remove()
Calculate.innerHTML = `<h2>${Calculation}</h2>`
//console.log(Calculation)
console.log(Calculate)
localStorage.setItem("Calculation", Calculation)
})
Three.addEventListener('click', function(){
Calculation = `${Calculation}3`
//Calculate.remove()
Calculate.innerHTML = `<h2>${Calculation}</h2>`
//console.log(Calculation)
console.log(Calculate)
localStorage.setItem("Calculation", Calculation)
})
Plus.addEventListener('click', function(){
Calculation = `${Calculation}+`
//Calculate.remove()
Calculate.innerHTML = `<h2>${Calculation}</h2>`
//console.log(Calculation)
console.log(Calculate)
localStorage.setItem("Calculation", Calculation)
})
Equal.addEventListener('click', function(){
Answer = eval(Calculation)
//Calculate.remove()
Calculate.innerHTML = `<h2>${Calculation}=${Answer}</h2>` 
alert(Answer)
Calculation = ''
Answer = 0
localStorage.setItem("Calculation", '')
})