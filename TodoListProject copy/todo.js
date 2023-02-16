
//Tüm Elementleri seçme.
const form = document.querySelector("#todo-form");

const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ //Tüm event listenerlar.
    form.addEventListener("submit", addTodo);
    todoInput.addEventListener("keyup",ControlTodos);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);

   
}
function clearAllTodos(e){
    if(confirm("Are you sure you want to delete all Todos?")){
       // todoList.innerHTML = "";Yavaş Çalışıyor.

       while(todoList.firstElementChild != null){

        todoList.removeChild(todoList.firstElementChild);
       }
       localStorage.removeItem("todos");
    }
    //Arayüzden Todoları Kaldır.



}

function filterTodos(e){

  const filterValue = e.target.value.toLowerCase();

  console.log(filterValue);
  const listItem = document.querySelectorAll(".list-group-item")

  listItem.forEach(function(listItem){
    const text =  listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1){

        //bulamadı. 
        listItem.setAttribute("style", "display: none !important");
    }
    else{
        listItem.setAttribute("style", "display: block");
    }
  })

}

function ControlTodos(e){
    const  controlValue = e.target.value.toLowerCase();
    const listItem = document.querySelectorAll(".list-group-item");

    listItem.forEach(function(listItem){
        const text =  listItem.textContent.toLowerCase();
        if (text.indexOf(controlValue) === -1){
    
            return false;
        }
        else{
           true
        }
      })
}

function deleteTodo(e){

    if(e.target.className === "fa fa-remove"){
       e.target.parentElement.parentElement.remove();
     deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
       showAlert("success","Todo deleted successfully");
    }


}

function deleteTodoFromStorage(delete_todo) {
    let todos = getTodosFromStorage();
  
    todos.forEach(function (todo, index) {
      if (todo === delete_todo) {
        todos.splice(index, 1);
        todos.removeAt(index);
      }
    });
  
    localStorage.setItem("todos", JSON.stringify(todos));
  }






function loadAllTodosToUI(){ 

    let todos = getTodosFromStorage(); 
    todos.forEach(function(todo){
        addTodoToUI(todo); 
    }    
);
}
function addTodo(e){
        const newTodo = todoInput.value.trim();

        if (newTodo === ""){
            /*<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>*/
            showAlert("danger","Lütfen Geçerli Bir Todo Girin");
        }
        else if (ControlTodos(newTodo) == false){

            showAlert("danger","Aynısı Var.");
        }
        else{

            addTodoToUI(newTodo); 
            addTodoToStorage(newTodo);

            showAlert("success","Todo Başarıyla Eklendi.");
            
            
        } e.preventDefault(); // sayfa önceye yüklenmesin diye.
}
function addTodoToStorage(newTodo) {   ///ÖNEMLİ!
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));  //1. Key 2. Value
}

function getTodosFromStorage(){  /// Storagedan bütün todoları alıyor. 
    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];
    
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos")); //JSON.parse string arraye çeviriyor. 
    }
    return todos;
}
function showAlert(type, message){   ///CREATE ALERT FUNCTION!
    const alert  = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;    

    firstCardBody.appendChild(alert);
    
    setTimeout(function(){alert.remove()},3000);

}

function addTodoToUI(newTodo){// String değerini list item olarak ekleyecek. 
 /*<li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>*/


    //list Item oluşturma
       
    const listItem = document.createElement("li");
    //link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = " <i class = 'fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between"

    //listNodu
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Todolist Ul ye list itemi ekleme

    todoList.appendChild(listItem);
    todoInput.value = "";
    console.log(listItem);
}
