console.clear();

/*

FOR - ciklas, kuris kartoja procesus N-kartu

for (1; 2; 3) {}
    1) Inicijuojame kintamaji pasikartojimo kiekiui skaicuoti 
    2) Ar kartoti? Jei tenkina - kartojam, jei ne - baigiam darba
    3) Tai kaip keisti 1) dalies kintamaji.
*/


// const tekstas = `Su gimimo diena!`;
// console.clear();

// for (let i = 0; i <= 5; i++) {
//     console.log(tekstas);
// }

// for (let i=10; i<17; i=i+1) {
//     console.log(`${i}) va ir tiek...`);
// }

// for (let n = 0; n<=8; n+=2) {
//     console.log(n);
// }
// console.clear();

// const pazymiai = [10, 2, 8, 4, 6]

// let pazymiuSuma = 0;


console.clear();

const dictionary = [`Labas`, `rytas`, `sakau`, `tau`, `mano`, `mielas`, `mieste`, `Ka`, `tu`, `ka`, `vakare`];

// Kiek yra zodziu, kurie yra trumpesni nei `Labas`?
// Kiek yra zodziu, kurie yra ilgesni nei `Labas`?
// Kiek yra zodziu, kurie yra tokio pat ilgio kaip `Labas`?
// Pavyzdinis zodis gali buti kintamas.

// console.log('Trumpesniu zodziu:', trumpi);
// console.log('Tokio pat ilgio zodziu:', toksPat);
// console.log('Ilgesniu zodziu:', ilgu);

console.clear();

// Kiek duotas masyvas turi ieskomo skaiciaus atveju (kiekio)?
// m1:1 -> 3
// m1:2 -> 0
// m1:3 -> 0
// m2:1 -> 1
// m2:2 -> 2
// m2:3 -> 1
// m4:1 -> 5
// m4:2 -> 3
// m4:3 -> 2

const masyvas1 = [1, 1, 1];
const masyvas2 = [1, 2, 2, 3];
const masyvas3 = [5, 4, 3, 2, 1];
const masyvas4 = [5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3];

let m1 = 0;
let m2 = 0;
let m3 = 0;
let m4 = 0;
let m5 = 0;

for (let i = 0; i <= masyvas1.length; i++) {
    if(masyvas1[i] === 1) {
        m1++
    }else if (masyvas1[i] === 2) {
        m2++
    }else if (masyvas1[i] === 3) {
        m3++
    }else if (masyvas1[i] === 4) {
        m4++
    }else if (masyvas1[i] === 5) {
        m5++
    }
}

console.log(`Masyvas1 turi 1 = ` + m1);
console.log(`Masyvas1 turi 2 = ` + m2);
console.log(`Masyvas1 turi 3 = ` + m3);
console.log(`Masyvas1 turi 4 = ` + m4);
console.log(`Masyvas1 turi 5 = ` + m5);

console.log(`--------------`);


let m12 = 0;
let m22 = 0;
let m32 = 0;
let m42 = 0;
let m52 = 0;

for (let i = 0; i <= masyvas2.length; i++) {
    if(masyvas2[i] === 1) {
        m12++
    }else if (masyvas2[i] === 2) {
        m22++
    }else if (masyvas2[i] === 3) {
        m32++
    }else if (masyvas2[i] === 4) {
        m42++
    }else if (masyvas2[i] === 5) {
        m52++
    }
}



console.log(`Masyvas2 turi 1 = ` + m12);
console.log(`Masyvas2 turi 2 = ` + m22);
console.log(`Masyvas2 turi 3 = ` + m32);
console.log(`Masyvas2 turi 4 = ` + m42);
console.log(`Masyvas2 turi 5 = ` + m52);
console.log(`--------------`);



let m13 = 0;
let m23 = 0;
let m33 = 0;
let m43 = 0;
let m53 = 0;


for (let i = 0; i <= masyvas3.length; i++) {
    if(masyvas3[i] === 1) {
        m13++
    }else if (masyvas3[i] === 2) {
        m23++
    }else if (masyvas3[i] === 3) {
        m33++
    }else if (masyvas3[i] === 4) {
        m43++
    }else if (masyvas3[i] === 5) {
        m53++
    }
}

console.log(`Masyvas3 turi 1 = ` + m13);
console.log(`Masyvas3 turi 2 = ` + m23);
console.log(`Masyvas3 turi 3 = ` + m33);
console.log(`Masyvas3 turi 4 = ` + m43);
console.log(`Masyvas3 turi 5 = ` + m53);

console.log(`--------------`);

let m14 = 0;
let m24 = 0;
let m34 = 0;
let m44 = 0;
let m54 = 0;

for (let i = 0; i <= masyvas4.length; i++) {
    if(masyvas4[i] === 1) {
        m14++
    }else if (masyvas4[i] === 2) {
        m24++
    }else if (masyvas4[i] === 3) {
        m34++
    }else if (masyvas4[i] === 4) {
        m44++
    }else if (masyvas4[i] === 5) {
        m54++
    }
}

console.log(`Masyvas4 turi 1 = ` + m14);
console.log(`Masyvas4 turi 2 = ` + m24);
console.log(`Masyvas4 turi 3 = ` + m34);
console.log(`Masyvas4 turi 4 = ` + m44);
console.log(`Masyvas4 turi 5 = ` + m54);

console.log(`--------------`);