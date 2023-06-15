console.clear();

const marks = [10, 2, 8, 4, 6];



const [mark1, mark2, mark3, mark4] = marks;
console.log(mark1, mark2, mark3, mark4);

// ... - rest operator
const [a, ...restMarks] = marks;
console.log(a, restMarks);

// const mark1 = marks[0];
// const mark2 = marks[1];
// const mark3 = marks[2];
// const mark4 = marks[3];
// const mark5 = marks[4];


// const name = user.name;
// const age = user.age;
// const isMarried = user.isMarried;
console.log(`------------------`);
const user = {
    name: `Maryte`,
    age: 88,
    isMarried: false,
    oldScores: [5, 10, 8, 7, 4],
};

const {name, ...kita} = user;

console.log(name, kita);

const students = [
    { name: `Jonas`, age: 99, marks: [10, 2, 8, 4, 6]},
    { name: `Maryte`, age: 88, marks: [2, 8, 4, 6, 5, 10, 7, 10]},
    { name: `Petras`, age: 77, marks: [7, 8, 6, 6, 5, 6, 7, 10]},
    { name: `Ona`, age: 66, marks: []},
];

for (const student of students) {
    console.log(student);
    console.log(`${student.name}, kurio amzius yra ${student.age} metu turi ${student.marks} pazymiu`);
}

console.log();