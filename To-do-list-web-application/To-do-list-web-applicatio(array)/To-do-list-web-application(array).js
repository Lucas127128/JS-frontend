const Button = document.querySelector(".Button")
const DueDate =document.querySelector(".DueDate")
const ToDoItem =document.querySelector(".TodoItem")
const DisplayTheTodoList = document.querySelector('.DisplayTheTodoList')
let TodoItems =''
let DueDates = ''
let TodoItemAndDate = [
    //{TodoDate: "",TheTodoItems: ""}
]
function DisplayTodoItems() {
    DisplayTheTodoList.innerHTML = ''
    for(let i =0; i<TodoItemAndDate.length; i++) {
         TodoItems = TodoItemAndDate[i].TheTodoItems
         DueDates = TodoItemAndDate[i].TodoDate
         DisplayTheTodoList.innerHTML += `
        <div>
            <div>${TodoItems}</div>
            <div>${DueDates}</div>
            <button class="DeleteTodoItems" onclick = "
            DeleteTodoItems(${i})
            ">
            Delete
            </button>
        </div>
        `
    }

}
function DeleteTodoItems(index){
    TodoItemAndDate.splice(index, 1);
    DisplayTodoItems();
}   
Button.addEventListener('click' ,function(){
    if(ToDoItem.value===''){
        alert('Please type todo items.')
        return;
    }
    TodoItemAndDate.push(
        {TodoDate: DueDate.value ,TheTodoItems: ToDoItem.value}
    )
    DisplayTodoItems()
    ToDoItem.value=''
    DueDate.value = ''
    console.log(TodoItemAndDate)
})
console.log(TodoItemAndDate)