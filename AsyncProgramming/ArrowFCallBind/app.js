

const person = {

   /* age:25,

    tellAge: function () {

        console.log(this.age); //this objemizi gösteriyor Person
    }.bind(this)*/ //Windowu gösterdi


    tellAge: () => {
        console.log(this.age); //this objemizi gösteriy
        console.log(this); //direkt windowu gösterdi!
    }
}

person.tellAge();

