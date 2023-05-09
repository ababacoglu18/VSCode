




function UI(){




}

UI.prototype.addFilmToUI = function(newFilm){
/*<!-- <tr>
<td><img src="" class="img-fluid img-thumbnail"></td>
<td></td>
<td></td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr> -->
<!-- <tr>
<td><img src="" class="img-fluid img-thumbnail"></td>
<td></td>
<td></td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr> -->*/

const filmList  = document.getElementById("films");

filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
`;
}

UI.prototype.clearInput = function(element1,element2,element3){
        element1.value = ""; //Inputları temizlemek için
        element2.value = "";
        element3.value = "";
}

UI.prototype.displayMassages = function(message,type){

    const cardBody = document.querySelector(".card-body"); //ilk card-body i seçtim!

    //alert divi
    const div = document.createElement("div");   //Efsane hata mesajı! kullan bunu!
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function(){
            div.remove();
    },3000)
}



