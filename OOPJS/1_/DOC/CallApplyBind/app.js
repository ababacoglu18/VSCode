//Call Apply Bind

const obj1 = {
    number1:-5,
    number2:20
};
const obj2 = {
    number1:30,
    number2:40
};

function addNumbers(num3, num4){
    console.log(this);//Window objesini gösteriyor. Sonuç NaN
    //Call kullanarak yazabilirsin
console.log(this.number1 + this.number2 + num3 + num4);
}

//addNumbers(100,200); Nan

addNumbers.call(obj1,100,200);
addNumbers.call(obj2,100,200);
//Apply
addNumbers.apply(obj1,[100,200]);


//Bind
//Kopya fonksiyon üretiyor genelde eventlerde kullanılır.

function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);

console.log(copyFunc1(100,200) + " Bind");