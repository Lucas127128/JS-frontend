const Button = document.querySelector(".Button")
const DueDate =document.querySelector(".DueDate")
const ToDoItem =document.querySelector(".TodoItem")

let TodoItemAndDate = [
    //{TodoDate: "",ToDoItem: ""}
    ]
Button.addEventListener('click' ,function(){
    if(ToDoItem.value===''){
        alert('Please type todo items.')
        return;
    }
    TodoItemAndDate.push(
        {TodoDate: DueDate.value ,ToDoItem: ToDoItem.value}
    )
    ToDoItem.value=''
    console.log(TodoItemAndDate)
})
console.log(TodoItemAndDate)