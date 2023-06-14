console.clear();

const pirmas = 7;
const antras = 5;

function sum(a, b) {
    return a + b;
}

console.log(`${pirmas} + ${antras} = ${sum(pirmas, antras)}`);

function diff(a, b) {
    return a - b;
}

console.log(`${pirmas} - ${antras} = ${diff(pirmas, antras)}`);
// arrow function 
const multi = (a, b) => {
    return a * b;
}
console.log(`${pirmas} * ${antras} = ${multi(pirmas, antras)}`);
// jeigu, logikos bloke yra tik 1 statementas
// galima nerasyti: {return}
const div = (a, b) => {
// for () {} // Pirmas statement
    return a / b; // Antras statement

}

console.log(`${pirmas} / ${antras} = ${div(pirmas, antras)}`);
// jeigu parametru bloke yra tik vienas parametras tai galima nerasyti - ()
const square = a => a ** a;

console.log(`${pirmas}^2 = ${square(pirmas)}`);

const vardenis = (name,lastname) => name[0] + `.` + lastname[0] + `.`;
console.log(vardenis(`Vardenis`, `Pavardenis`));