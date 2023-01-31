/* let value ;

value = document;

value = document.scripts.length;
value = document.scripts[0];

value = document.links.length;
value = document.links[document.links.length-1].getAttribute("href");


console.log(value);*/

//Element Seçme

/*let element;

element = document.getElementsByClassName("todo-form")[0];

element = document.getElementsByClassName("list-group-item")

element = document.getElementsByTagName("li");
console.log(element);


//Query Selector. CSS Selector -Tek ve ilk bulduğu elementi döner
//id için query selector kullan

element = document.querySelector("#todo-form")
console.log(element);


element =document.querySelectorAll(".list-group-item")

element.forEach(function(el){
    console.log("For Each" + el);
});
*/

//Style Özellikleri değiştirmek için ->

const element = document.querySelector("#clear-todos");

/*console.log(element.id);
console.log(element);
console.log(element.className); GET*/

element.className = "btn btn-warning";

element.style.color = "#fff";
element.style.marginLeft = "50px";
element.href = "https://www.youtube.com.tr";
element.target = "_blank";
element.textContent = "Silin";

element.innerHTML = "<span style = 'color:green'> Selam </span>"

//DOM elementleri üzerinde gezinmek


let value;


const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList
value = cardrow;

//child nodes -- text dahil

value = todoList.childNodes;
value = todoList.childNodes[0];


//Children -- Sadece Elementleri alır--

value = todoList.children;
value = todoList.children[todoList.children.length-1];

value = todoList.children[2].textContent = "Değişti";

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burası da Değişti.";


value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount; //ShortCut for todoList.ElementCount

//Üste Gitmek İçin

value = cardrow.parentElement.parentElement.parentElement;

//Element Kardeşliği :)

value = todo;
value = todo.previousElementSibling; //Seçili olan 2. Todo'ydu
todo.nextElementSibling.textContent = "Selam";

//console.log(value);


const newLink = document.createElement("a");

const cardBody = document.querySelector(".card-body");
console.log(cardBody);


//Dinamik Element Eklemek.

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
console.log(newLink);
newLink.target = "_blank";
//cardBody.textContent = "sa";

const text = document.createTextNode("sas");



newLink.textContent = "Ekle";
newLink.appendChild(document.createTextNode("Farklı"))
cardBody.appendChild(text);










