let value;

const now = new Date();



const date1 = new Date("9-19-1994 06:15:00")
const date2 = new Date("September 19 1993")
const date3 = new Date("9/19/1993")


value = date1;



date1.setMonth(4);
value = date1.getMonth();
console.log(value);