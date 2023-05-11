

//ajax callback http request

class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }
        //getrequest

        get(url){
                this.xhr.open("GET", url); //Connection.


                    this.xhr.onload = function(){

                        if(this.status === 200){

                            console.log(this.responseText); //Responselara çalışman lazım
                    }

                     
        }
        this.xhr.send();  
        

}
}

 const request = new Request();
 request.get("https://jsonplaceholder.typicode.com/albums");