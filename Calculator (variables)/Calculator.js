const One = document.querySelector(".One")
const Two = document.querySelector(".Two")
const Three = document.querySelector(".Three")
const Plus = document.querySelector(".Plus")
const Equal = document.querySelector(".Equal")
let DisplayCalculation = document.querySelector('.DispllayCalculation')
let Calculation = localStorage.getItem("Calculation")
if(Calculation === null){
    Calculation=''
}
DisplayCalculation.innerHTML = Calculation;

function localStorage_And_Display_Calculation(){
    console.log(DisplayCalculation)
    DisplayCalculation.innerHTML = Calculation;
    console.log(DisplayCalculation)
    console.log(Calculation)
    localStorage.setItem("Calculation", Calculation)
    console.log(localStorage.getItem("Calculation"))
}

console.log(typeof Calculation)
let Answer = 0

One.addEventListener('click', function(){
    Calculation = `${Calculation}1`
    localStorage_And_Display_Calculation()
})

Two.addEventListener('click', function(){
    Calculation = `${Calculation}2`
    localStorage_And_Display_Calculation()
})

Three.addEventListener('click', function(){
    Calculation = `${Calculation}3`
    localStorage_And_Display_Calculation()
})

Plus.addEventListener('click', function(){
    Calculation = `${Calculation}+`
    localStorage_And_Display_Calculation()
})

Equal.addEventListener('click', function(){
    Answer = eval(Calculation)
    //Calculate.remove()
    DisplayCalculation.innerHTML = `${Calculation}=${Answer}` 
    alert(Answer)
    Calculation = ''
    Answer = 0
    localStorage.setItem("Calculation", '')
})