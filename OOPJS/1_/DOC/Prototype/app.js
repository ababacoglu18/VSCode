function Employee(name,age){

    this.name = name;
    this.age = age;
    this.toString = function(){
        console.log("1. Prototip benim.");
    }
}

const emp1 = new Employee("Ahmet",23);

console.log(emp1.toString());