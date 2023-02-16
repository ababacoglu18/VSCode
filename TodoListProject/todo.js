
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
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);

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
        else{
            addTodoToUI(newTodo); 
            addTodoToStorage(newTodo);

            showAlert("success","Todo Başarıyla Eklendi.");
            
            
        }

        
        
    e.preventDefault(); // sayfa önceye yüklenmesin diye.
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
