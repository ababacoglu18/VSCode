class Person { //SuperClass Base class 
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  showInfos(){
    console.log(this.name + " age " + this.age);}
}

class Employee extends Person{ //DerivedClass SubClass ChildClass
  constructor(name,age,salary){
    super(name,age); // this.name = name this.age 
    this.salary = salary;
  }

}

const emp = new Employee("Mustafa", 25,4000);
console.log(emp);