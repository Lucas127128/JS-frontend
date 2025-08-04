const Button = document.querySelector(".Button")
const DueDate =document.querySelector(".DueDate")
const ToDoItem =document.querySelector(".TodoItem")
let TodoItems =''
let DueDates = ''
const Tasks = document.createElement('li')
let TodoItemAndDate = [
    //{TodoDate: "",ToDoItem: ""}
    ]

function DisplayTodoItems() {
    for(let i =0; i<TodoItemAndDate.length; i++) {
         TodoItems = TodoItemAndDate[i].ToDoItem
         DueDates = TodoItemAndDate[i].TodoDate
    }
     Tasks.innerHTML = `
     <div class="todo-row">
        <div>${ToDoItem}</div>
        <div>${DueDates}</div>
        <button class="DeleteTodoItems" onclick="
        TodoItemAndDate.splice(i, 1);
        DisplayTodoItems();
        ">
        Delete
        </button>
      </div>
     `
     

}
    
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