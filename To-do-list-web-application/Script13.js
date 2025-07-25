const TextInput = document.querySelector('.TextInput')
const Lists = document.querySelector('.Lists')
const Button = document.querySelector('.Button')

function NewTasks() {
if(TextInput.value===''){
    return
}
const Tasks = document.createElement('li')
Tasks.innerHTML = ` <input type = 'checkbox' class='Checkbox'>
<lable><span>${TextInput.value}</span></lable>
<button class = 'Trash'>🗑️</button>
`
const Trash = Tasks.querySelector('.Trash')
const Checkbox = Tasks.querySelector('.Checkbox')
Trash.addEventListener('click', function(){
Tasks.remove()
})
Checkbox.addEventListener('change', function(){
if(Checkbox.checked){
    Tasks.style.textDecoration = 'line-through'
    Tasks.style.color = '#999'
    Lists.append(Tasks)
}else{
    Tasks.style.textDecoration = 'none'
    Tasks.style.color = ''
    Lists.prepend(Tasks)
}
})
Lists.append(Tasks)
TextInput.value = ''
} 

Button.addEventListener('click', NewTasks)

TextInput.addEventListener('keyup', function(e)  {
    if (e.key === 'Enter' ){
        NewTasks()
    }
})