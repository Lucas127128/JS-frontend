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
    TodoItemAndDate.forEach((TodoThings,index)=>{
        TodoItems = TodoItemAndDate[index].TheTodoItems
         DueDates = TodoItemAndDate[index].TodoDate
         DisplayTheTodoList.innerHTML += `
        <div class = "Todo-Row">
            <p>
                <span class = "Todo-items">${TodoItems}</span>
                <span class = "Due-Dates">${DueDates}</span>
                <button class="DeleteTodoItems" onclick = "
                DeleteTodoItems(${index})
                ">
                <span>Delete</span> 
                </button>
            </p>
        </div>
        `
    }
    )

}
function DeleteTodoItems(index){
    TodoItemAndDate.splice(index, 1);
    DisplayTodoItems();
}   
function NewTasks(){
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
}
Button.addEventListener('click' ,function(){
    NewTasks()
})
ToDoItem.addEventListener("keyup", function(e){
    if(e.key==="Enter"){
        NewTasks()
    }
})
DueDate.addEventListener("keyup", function(e){
    if(e.key==="Enter"){
        NewTasks()
    }
})
console.log(TodoItemAndDate)