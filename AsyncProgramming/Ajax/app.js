document.getElementById("btn").addEventListener("click", function() {

    //XML Http  Request

    const xhr = new XMLHttpRequest();

    xhr.onprogress = function(){  //3 döndürür!
        console.log("Proses işleniyor.");
    }  

 xhr.onreadystatechange = function() {
        // console.log(this.readyState); // runs 4 times. 1 connect ok 2 request received 3 processing requests 4 request finished and response is ready
 
        console.log(this.status); // 200 means success


        if(this.status == 200 && this.readyState == 4 ) { //response is ready


            console.log(this.responseText + " onreadystatechange complete!"); // We have read the response
        }

    };


    //Onload yöntemiyle aynı işlemi yapalım

    xhr.onload = function() {
            if(this.status == 200 ){
        console.log(this.readyState + " OnLoad"); 
        console.log(this.responseText + " On Load Success!");



        document.getElementById("ajax").textContent += this.responseText  ;
            }
    };

    xhr.open("GET","example.txt",true); //true girersen asenkron oluyor.

    xhr.send();


    
});


