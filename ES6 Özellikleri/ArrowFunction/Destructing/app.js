/*let number1,number2;

arr = [100,200,300,400];

number1 = arr[0];
number2 = arr[1];

console.log(number1,number2);*/

//ESKİ YOL

//Destruction

/*let number1,number2;

arr = [100,200,300,400];

[number1,number2] = arr[0];

console.log(number1,number2);*/

const person = {

    name : "John",
    year : 2000,
    salary : 2000,
    showInfos : ( ) =>console.log("Bilgiler Gösteriliyor")

}

const {name:isim , year:yil ,salary:maas , showInfos:BilgileriGoster} = person;

console.log (isim , yil, maas );
BilgileriGoster();
