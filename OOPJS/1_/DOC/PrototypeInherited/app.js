//Inheritance

function Person(name,age){

    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function(){
 console.log("isim: " + this.name + " Yaş: " + this.age 
  );}

  const person = new Person("Mustafa",25);
  console.log(person);

  function Employee(name, age, salary){

   /* this.name= name;
    this.age = age; Call kullanarak yazdım*/

    Person.call(this,name,age); //efektif.
    this.salary = salary;

  }

  Employee.prototype = Object.create(Person.prototype);

  const emp = new Employee("Mustafa",25,4000);

  //console.log(emp);

  emp.showInfos();
  console.log(emp.toString());

  Employee.prototype.toString = function(){
    console.log("Person:");}

    Employee.prototype.showInfos = function(){

        console.log("isim " + this.name + " yas " + this.age + " salary " + this.salary)
    }

    emp.toString();
    emp.showInfos();

  