/*function Employee(name,age,salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;}

  Employee.prototype.showInfos = function(){
    console.log("Name: " + this.name + " Age: " + this.age + "Salary: " +this.salary);
  }

  const emp = new Employee("Mustafa", 25, 4000);
ES5 HALİ
*/

class Employee{
  constructor(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  showInfos(){ //Bu metoda değil prototipe yazılıyor!
    console.log("Name: " + this.name + " Age: " + this.age + " Salary: " +this.salary);}
    
}

const emp = new Employee("Mustafa",20,2000);
console.log(emp);

emp.showInfos();


///Static Methods

class Math{
  static cube(x){
    console.log(x*x*x);
  }
}
/*const math =  new Math();

math.cube(3);

//Statik Metod yazarsan obje üretmene gerek kalmaz.*/

Math.cube(3); // obje üretmedim!

