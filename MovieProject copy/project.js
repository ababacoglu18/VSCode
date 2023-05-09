const form  = document.getElementById("film-form");

const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");


const ui = new UI();

const storage = new Storage();

eventListeners();

function eventListeners() {

    form.addEventListener("submit", AddFilm);

};

function AddFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
  
    if (title === "" || director === "" || url === "") {
      
    } else {
      const newFilm = new Film(title, director, url);
            ui.addFilmToUI(newFilm);

    }
  
    e.preventDefault(); // Sayfanın yenilenmesini engelleme
  }