/*
String - tekstiniu simboliu grandinele, aka tekstas

Iniciavimo budai:
- viengubos kabutes ('')
- dvigubos kabutes ("")

*/

const vardas = 'Jonas';
const vardas1 = "Maryte";
const vardas2 = "Maryte";

console.log(vardas);
console.log(vardas1);
console.log(vardas2);

let num1 = 2;
let num2 = 3;
let sum = num1 * num2;

// With - ("")
const lentele1 = num1 + " * " + num2  + " = " + sum;
console.log(lentele1);
// With - (``) 
const lentele2 = `${num1} * ${num2} = ${sum}`;
console.log(lentele2);