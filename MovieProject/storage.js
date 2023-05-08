

function Storage(){

   
}

Storage.prototype.addFilmToStorage = function(newFilm){
    let films;


    if(localStorage.getItem("films") === null){
            films = []; //Eğer Localde films değeri yoksa boş array üretip koy.
    }else{
        films = JSON.parse(localStorage.getItem("films")); //JSON.parse stringi arraye çevirir.
    }
}