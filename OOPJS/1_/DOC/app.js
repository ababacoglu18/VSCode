


function Employee(name, age , salary){ //Constructor Function same as unity

    this.name = name;
    this.age = age;
    this.salary = salary + "$";


    this.showInfos = function(){

       return console.log(this.name, this.age, this.salary);
    }
}
const emp1 = new Employee("Ahmet", 21 , 5000);

console.log(emp1.showInfos());
console.log(emp1);