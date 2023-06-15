/*

array -for, for-of, while, do-while, 
object - for-in

*/
// FOR
console.log(`\nFOR ----------------------`)
const marks1 = [10, 2, 8, 4, 6];
let sum1 = 0;

for (let i = 0; i<marks1.length; i++) {
    const mark = marks1[i];
    sum1 += mark;
    console.log(marks1[i]);
}
console.log(`Sum:`, sum1);

// FOR-OF (Eina is kaires i desine)
console.log(`\nFOR-OF ----------------------`)
const marks2 = [10, 2, 8, 4, 6];
let sum2 = 0;

for (const mark of marks2) {
    sum2 += mark;
}
console.log(`Sum:`, sum2);

// WHILE 
console.log(`\nWHILE----------------------`)
const marks3 = [10, 2, 8, 4, 6];
let sum3 = 0;
let i3 = 0;

while (i3 < marks3.length){
    const mark = marks3[i3];
    sum3 += mark;
    i3++;
}
console.log(`Sum:`, sum3);

//DO-WHILE 
console.log(`\nDO-WHILE----------------------`)
const marks4 = [10, 2, 8, 4, 6];
let sum4 = 0;
let i4 = 0;

do {
    const mark = marks4[i4];
    sum4 += mark;
    i4++;
} while(i4 < marks4.length)
console.log(`Sum:`, sum4);

console.clear();

console.log(`START`);

for(let i = 0; i < 3; i++) {
    console.log(i);
}
console.log(`START`);


//FOR-IN
console.log(`\nFOR-IN----------------------`)

const user = {
    name: `Jonas`,
    age: 99,
    isMarried: true,
};

const userKeys = Object.keys(user);

for (let i = 0; i < userKeys.length; i++) {
    console.log(i);
}


for (const key in user){
    console.log(key, `:`, user[key]);
}

console.log(user);

console.clear();

for (let i = 10; i < 100; i += 10) {
    console.log(i);
}