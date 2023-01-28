//Let ve Var farkı
//Let 1 kere tanımlanabilir var daha sonradan değiştirilebilir.
//let name = "Ahmet";
//let name = "Mehmet";

let a,b;
a=10;
b=20;
console.log(a+b);


//Const = final || Değiştirilemez. A'nın türü oluşturulduğu satırda verilmeli 2. satırda verilmez.
//Mülakat sorusu... array const a ya sonradan bir değer eklenemez. a.push(6) şeklinde değer eklenebilir.
//const name = "Ahmet";
//console.log(name);
//name = "Selam";
//console.log(name);

const c = [1,2,3,4,5,6];

console.log(c);

c.push(3);
console.log(c);


//Template Literal

const name = "Ahmet"
const department = "Bilişim"
const salary = 4000;

//cont f = "Isim " + name ... java yöntemi EC6 ile gelen
//alt gr+ 2x; back tick
const f = `Isim${name}\nDepartman:${department}\nMaaş:${salary}`

//const html = "<ul> "
 //            "<li> " + name "</li>" .

 const html = `
 <ul> 
 <li>${name}</li>
 <li>${department}</li>
 <li>${salary}</li>
 
 
 `