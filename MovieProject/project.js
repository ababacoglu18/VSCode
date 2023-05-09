const form  = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-films");


//UI start
const ui = new UI();

//Create Storage Object

const storage = new Storage();

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addFilm);

    document.addEventListener("DOMContentLoaded",function() {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    }
    );

    secondCardBody.addEventListener("click",deleteFilm);

    clearButton.addEventListener("click",clearAllFilms);

}
function addFilm(e) {

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        ui.displayMassages("Tüm Alanları Doldurmanız Gerekmektedir." , "danger");
    }else{
        //Yeni film
        const newFilm = new Film(title, director, url);

        ui.addFilmToUI(newFilm);//arayüze film ekle
        storage.addFilmToStorage(newFilm); //Local Storage a film ekleme.
        ui.displayMassages("Film Başarıyla Eklendi." , "success");
        

    }


        ui.clearInput(titleElement,directorElement,urlElement);
    e.preventDefault(); //submit edilmesini önler.
}


function deleteFilm(e){
   if(e.target.id === "delete-film"){
    ui.deleteFilmFromUI(e.target);
    e.preventDefault(); //
    console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent); //pre
    ui.displayMassages("Silme İşlemi Başarılı!", "success");
   }
}


function clearAllFilms(){

    if(confirm("Are you sure to delete All Films?")){

        if(confirm("Im Asking the last time. Are you sure to delete All Films?")){

    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
        }
    }

}