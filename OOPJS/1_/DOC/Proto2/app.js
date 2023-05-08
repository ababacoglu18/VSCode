function Employee(name,age){

    this.name = name;
    this.age = age;
    this.toString = function(){
        console.log("1. Prototip benim.");
    }

    /*this.ShowInfos = function(){

        console.log("isim: " + name + " yas " + age);
    }  Bunu buraya yazarsan emp100 de 100 kere kopyalanır ve belleği yorar. Prototype e ulaş ve oraya yaz.*/
}

Employee.prototype.showInfos = function(){
    console.log("isim: " + this.name + " yas " + this.age); // Bu çok daha optimize!;
}

const emp1 = new Employee("Ahmet",23);
const emp2 = new Employee("Mehmet",25);


emp2.showInfos();


//Object.Create Metodu

const obj = {
    test1:function(){
        console.log("Test1")
    },
    test2:function(){
        console.log("Test2")
    }
}

const emp = Object.create(obj);  //KAlıtım işlemlerinde kullanılır.

console.log(emp); //içi boş görünüyor fakat proto içinde test1 test2 metodları var.



function Person(){

}

Person.prototype.test1 = function(){
    console.log("Test1");
}
Person.prototype.test2 = function(){
    console.log("Test2");
}

const person = new Person();
console.log(person);

//Obje bağlayacağız.

function Calisan2(name, age){
this.name = name
this.age  = age;
}

Calisan2.prototype = Object.create(Person.prototype);


const emp5 = new Calisan2("Mustafa", 25);
console.log("Object Bağlama")
emp5.test1();  // Calisan metodu Persondan proto sayesinde miras aldı.

