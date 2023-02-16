//Session Storage.

const todos2 = ["Todo 1","Todo2","Todo3"];

localStorage.setItem("todos2", JSON.stringify(todos2));

const value = JSON.parse(localStorage.getItem("todos2"));
console.log(value);