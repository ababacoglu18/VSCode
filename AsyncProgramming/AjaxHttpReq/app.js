

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

        post(url, data, callback) {
                this.xhr.open("POST", url);
                this.xhr.setRequestHeader("Content-Type", "application/JSON");
            this.xhr.onload = () =>{
                if(this.xhr.status === 201){ // Yeni kaynak oluştu created
                    callback(null,this.xhr.responseText);
            }else{
                console.log("bir hata var.",null);
            }
            this.xhr.send(JSON.stringify(data));

        }
}
}



 const request = new Request();
 request.get("https://jsonplaceholder.typicode.com/albums");
 request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,response){

 if(err===null){

 console.log(response);
 }else{
    console.log("bir hata var. " + err)
 }
 })


 