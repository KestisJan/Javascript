console.clear();


const user1Name = `Jonas`;
const user1Age = 99;
const user1IsMarried = true;


const user2Name = `Maryte`;
const user2Age = 88;
const user2IsMarried = false;

const user3Name = `Petras`;
const user3Age = 77;
const user3IsMarried = false;

const user4Name = `Ona`;
const user4Age = 66;
const user4IsMarried = true;


const user1 = [`Jonas`, 99, true];
const user2 = [`Maryte`, 88, false];
const user3 = [`Petras`, 88, false];
const user4 = [`Ona`, 66, true];

const userIndex = 0;
const users = [
    [`Jonas`, 99, true],
    [`Maryte`, 88, false],
    [`Petras`, 88, false],
    [`Ona`, 66, true]];


const userName = user1[0];
const userAge = user1[1];
const userIsMarried = user1[2];

console.log(userName);
console.log(userAge);
console.log(userIsMarried);


// Sveiki, mano vardas yra VARDAS, man yra XX metu ir as VEDES/NEVEDES.
let hi = '';

console.clear();

const student1 = {
    name: `Jonas`,
    age: 99,
    isMarried: true,
};

console.log(student1[`name`]);
console.log(student1[`age`]);
console.log(student1[`isMarried`]);

const students = []

const marks = [10, 2, 8, 4, 6];
const mark2 = {
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6,
};

const demo = {
    0: 10,
    'name': 'Jonas',
    age: 99,
    'is married': true,
};


console.log(demo);
console.log(demo['name'], demo.name);
console.log(demo['age'], demo.age);
console.log(demo['is married'], demo["is married"]);
console.log(demo['0'], demo[0]);

console.clear();

const car = {
    marke: 'Audi',
    model: '80',
    color: 'red',
    price: 500,
    doors: 4,
    wheel: 'left',
};

console.log(car);

const noriuSuzinoti = 'price';

const reiksme = car[noriuSuzinoti];

console.log(reiksme);

console.clear();

const child = {
    name: 'Maryte',
    age: 5,
    parents: [
         {
            name: 'Jonas',
            age: 32,
            phones: [1111, 4444, 5555],
        },
         {
            name: 'Ona',
            age: 35,
            phones: [2222, 3333],
        },

    ],
    marks: [10, 2, 8, 4, 6],
};

const info = child.marks.at(-1);
console.log(info);

console.clear();

const augintinis = {
    name: ``,
    age: 0,
    items: [],
};

console.log(augintinis);

augintinis.items.push(`kaulas`);