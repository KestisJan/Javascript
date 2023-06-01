console.clear();
/* 
FUNCTION - perpanaudojimas logikos blokas
*/

const a1 = 10;
const a2 = 2;
const a3 = 8;
const a4 = 4;
const a5 = 6;
const aVidurkis = (a1 + a2 + a3 + a4 + a5) / 5;
console.log('a:', aVidurkis);


function suma(pirmasSkaicius, antrasSkaicius) {
    return pirmasSkaicius + antrasSkaicius;
}

const s1 = suma(7, 5);
const s2 = suma(-5, 5);
const s3 = suma(100, -7);
console.log(s1);
console.log(s2);
console.log(s3);

function showMeNumber() {

}

console.log(showMeNumber());



function inicialai(vardas, pavarde) {
    return vardas[0] + "." + pavarde[0];
}

const ini1 = inicialai(`Chuck`, `Norris`);
const ini2 = inicialai(`Pamela`, `Anderson`);


console.log(`Inicialas 1:`, ini1);
console.log(`Inicialas 2:`, ini2);



console.log(`----------------------------------------`)

function introduction (name, age) {
    return `Sveiki, mano vardas ${name} ir man ${age} metai! `;
}

console.log(introduction('Jonas', 22));