// Retrive todo from local storage and initialize an empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todoList')
const todoCount = document.getElementById('todoCount')
const addButton = document.querySelector('.btn')
const deleteButton = document.getElementById('deleteButton')


//Initialize

document.addEventListener('DOMContentLoaded', () => {
  addButton.addEventListener('click', addTask)
  todoInput.addEventListener('keydown',function (event) {
    if(event.key === "Enter"){
      event.preventDefault()
      addTask()

    }
  });
  deleteButton.addEventListener('click',deleteAllTask)
  displayTask();
})
 


function addTask() {
  const newTask = todoInput.value.trim()
  if(newTask !== "" ){
    todo.push({
      text:newTask,
      disabled:false
    });
    saveToLocalStorage()
    todoInput.value = ""
    displayTask()
  }
}

function deleteAllTask() {
  
}

function displayTask() {
  todoList.innerHTML = "";
  todo.foreach((item,index) =>{
    const p = document.createAttribute("p")
    p.innerHTML = `
      <div class="todo-container">
      <input type="checkbox" class="todo-checkbox" id="input-${index}">
      </div>
    `
  })
}
function saveToLocalStorage() {
  localStorage.setItem("todo",JSON.stringify(todo))
}