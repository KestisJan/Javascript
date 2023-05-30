console.clear();

/* 
NUMBERS - skaiciai

Sveikieji/desimtainiai
Teigiami/neigiami
Mistiniai - Begalybes / NaN (not a number)

--

Aritmetiniai operatoriai:
+, -, *, / 
*/

console.log(1);
console.log(2);
console.log(3.14);
console.log(2.72);
//-----
console.log(-1);
console.log(-2);
//----
console.log(Infinity);
console.log(-Infinity);
//----
console.log(NaN);

// Kintamuju iniciavimo budai:
// const - default
// let - naudoti, tik jei reikia keisti reiksmes
// var - nenaudoti nebent zinai ka darai

const amzius = 20;

let index = 0;
console.log(index);

index += 1;

console.log(index);

driezas = 1;
driezas = driezas + 5;
console.log(driezas);

driezas += 5;
console.log(driezas);

let rezultatas = 10;
console.log(rezultatas);

rezultatas += 20;
console.log(rezultatas);


// Function
function double(x) {return x * 2}
console.log(double(2))

const double2 = x => x * 2;
console.log(double2(2));

const bandymas = 20;
let answer;

if (bandymas > 10) {
    answer = "greater than 10";
}else {
    answer = "less than 10";
}
console.log(answer);

const x = 20;
const answer1 = x > 20 ? "greater than 10" : "less than 10";
console.log(answer1);

const bandymas_1 = 50;
let answer2;

if (bandymas_1 > 30){
    answer2 = "Greater than 30";
}
else {
    answer2 = "less than 30";
}
console.log(answer2);

const answer4 = x > 25 ? "greater than 10" : "less than 10";
console.log(answer4);
const answer5 = x > 33 ? "greater than 25" : "less than 11";
console.log(answer5);
const answer6 = x > 15 ? "greater than 31" : "less than 15";
console.log(answer6);
const answer7 = x > 16 ? "greater than 16" : "less than 16";
console.log(answer7);


