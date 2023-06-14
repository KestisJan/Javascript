/* 
Array method privaloma moket


- .at()
- .filter()
- .flat()
- .forEach()
- .includes()
- .indexOf()
- .join()
- .map()
- .push()
- .reduce()
- .revese()
- .slice()
- .sort()


*/

console.clear();

const masyvas = [10, 2, 8, 4, 6];

console.log(masyvas.at(1));
console.log(masyvas.at(-1));
console.log(`--------------`);

const double = [
    5,
    4,
    [7, 8, 9],
    3,
    [1, 2],
    0,
];

console.log(double.flat(1)); // default 1.
console.log(`--------------`);

console.log(masyvas.join());
console.log(masyvas.join(`-`));
console.log(masyvas.join(` `));
console.log(masyvas.join(` -==- `));

console.log(`--------------`);

masyvas.push(10);
console.log(masyvas);
const last = masyvas.pop(10);
console.log(masyvas, last);

console.log(`--------------`);

masyvas.reverse();
console.log(masyvas);

console.log(`--------------`);
