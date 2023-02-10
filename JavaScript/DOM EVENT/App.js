const filterInput = document.getElementById("filter");

console.log(filterInput); //Todo Arayın Kısmına tıklandığında focus durumuna geçiyor.


//filterInput.onfocus = function() {
  ///  console.log("Naber");}

  /*filterInput.addEventListener("focus", function(e){
    console.log(e.target);
    console.log("Naber");
  });*/

  const todoForm = document.getElementById("todo-form");

  todoForm.addEventListener("submit", submitForm);

  function submitForm (e) {
    console.log("submit event");

e.preventDefault(); // Submit eventinin default özelliğinin prevent özelliğiyle engellenmesi
}


/*document.addEventListener("keypress", run);

function run (e) {
   
    console.log(e.which);
    console.log(e.key); //özel tuşlar verisi gelmez
    console.loog(e.keydown)
  }*/

  
/*document.addEventListener("keydown", run); // Özel tuş yapısı. 

function run (f) {

  console.log("Şu tuşa basıldı. "+f.key); 

  
}

document.addEventListener("keyup",run);

function run (g) {
  console.log("Şu tuştan parmak çekildi. "+g.key);
}*/


//Input içindeki veriyi güncellemek
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText (e) {
  //console.log(e.key);
  header.textContent = e.target.value; // Header Value ile değişiyor. 
  console.log(e.target.value);  // Listin içindeki veriyi komple alıyor. 
}


const cardBody = document.querySelector(".card-body")[1];
const title = document.querySelector("#tasks-title");

console.log(cardBody);

//Click Event

title.addEventListener("click", run);

function run (e) {
console.log(e.type);
}

//Double Click
title.addEventListener("dblclick", run);

function run (e) {
console.log(e.type);
}
//"mousedown, mouseup, mouseenter,mouseleave, mouseover, mouseout scroll üzerine gelip çıkınca... mouseover bir elementin içindeyken tekrar tekrar tetiklenir. eventleri de kullanılabilir. "




const filter = document.getElementById("filter");
console.log(filter);

document.addEventListener("DOMContentLoaded" , load)

function load(e){
  console.log("Sayfa Yüklendi");
}

//Focus

filter.addEventListener("focus",run);

function run(e){
  console.log(e.type);
}

filter.addEventListener("paste",run);

function run(e){
  console.log(e.type);
} 
filter.addEventListener("copy",run);

function run(e){
  console.log(e.type);
} 
filter.addEventListener("cut",run);

function run(e){ //filterda yazılı olan parametre kesilirse Select'de var
  console.log(e.type);
} 
