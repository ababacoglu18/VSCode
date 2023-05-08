const form  = document.getElementById("film-form");

const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");



//UI start
const ui = new UI();

//Create Storage Object

const storage = new Storage();

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addFilm);
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
        storage.addFilmToStorage(newFilm);
        ui.displayMassages("Film Başarıyla Eklendi." , "success");
        

    }


        ui.clearInput(titleElement,directorElement,urlElement);
    e.preventDefault(); //submit edilmesini önler.
}

