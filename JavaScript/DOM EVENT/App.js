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
  header.textContent = e.target.value;
  console.log(e.target.value);  // Listin içindeki veriyi komple alıyor. 
}
