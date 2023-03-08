/*const merhaba = function (){

    console.log("Merhaba");

}

merhaba();*/

/*const merhaba = () => {

    console.log("Merhaba");
}
merhaba();*/


const merhaba = firstName => { //Tek parametre alacaksa paranteze gerek yok. Tek satır işlem için süslü paranteze de ihtiyacın yok.
    console.log("Merhaba",firstName);
}

merhaba("Ahmet","Işık");

const merhaba2 = (firstName, lastName) => console.log("Merhaba",firstName,lastName);
merhaba2("Ahmet","Işık");

const cube = x => x*x*x;

console.log(cube(4));