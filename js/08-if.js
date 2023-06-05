console.clear();
/* 
IF - palyginimas

Palyginimo operatoriai:
Visi > , <, >=, ==,


Sintakse:
if () {}
if () {} else {}
*/

console.log(`START`);

const a = 7;
const b = 5;

if (a > b) {
    console.log(`Daugiau (a> b)`);
}


console.log(`END`);
console.log(`-------`);

// Code nesting

const arSvieciaSaule = false;
const arLyja = false;




if (arSvieciaSaule){
    if (arLyja == true) {
        console.log(`Pries eidamas pasiimk sketi!`);
    } else {
        console.log(`Geros keliones!`);
    }
} else {
    if (arLyja == true) {
        console.log(`Dabar yra naktis`);
    } else {
        console.log(`Zzz..`);
    }
}


