

function Storage(){

   
}

Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage(); //array geldi.

    films.push(newFilm);


    localStorage.setItem("films", JSON.stringify(films));

}

Storage.prototype.getFilmsFromStorage = function(){
    if(localStorage.getItem("films") === null){
            films = []; //Eğer Localde films değeri yoksa boş array üretip koy.
    }else{
        films = JSON.parse(localStorage.getItem("films")); //JSON.parse stringi arraye çevirir.
    }

    return films;
}

  Storage.prototype.deleteFilmFromStorage = function(filmTitle){

    let films= this.getFilmsFromStorage();

    films.forEach(function(film,index) {

       if(film.title === filmTitle){

        films.splice(index,1);
       }

    });

    localStorage.setItem("films",JSON.stringify(films));

}

Storage.prototype.clearAllFilmsFromStorage = function(){

    localStorage.removeItem("films");
}