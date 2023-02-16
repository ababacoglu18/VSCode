
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
    

}
function addTodo(e){
        const newTodo = todoInput.value.trim();

        addTodoToUI(newTodo); 
        
    e.preventDefault(); // sayfa önceye yüklenmesin diye.
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
