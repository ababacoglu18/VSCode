document.getElementById("change").addEventListener("click", change);


function change(){

    const xhr = new XMLHttpRequest();

        xhr.open("GET","https://api.exchangerate.host/latest",true);




            xhr.onload = function(){

                if(this.status){
                    const response =  JSON.parse(this.responseText);
                    const rate = response.rates.TRY;
                    const amount =Number( document.getElementById("amount").value);

                    document.getElementById("tl").value = (amount*rate);
                    console.log(amount*rate);
                }
            };

        xhr.send();
}