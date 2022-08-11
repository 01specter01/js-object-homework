console.log("------------Aufgabe 1-------------");

const person = {
    name: "Max",
    age: 34,
    jobtitle: "Marketing-Director",
};
for (const category in person) {
    console.log(category, person[category]);
}

console.log("------------Aufgabe 2-------------");

const einkauf = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
};
function getObjectValues() {
    const propertyValuesAsArray = Object.values(einkauf);
    console.log(propertyValuesAsArray);
}
getObjectValues();

console.log("------------Aufgabe 3-------------");

let man = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    info: function () {
        return `${this.firstName} ${this.lastName} is a 20 year old driver in ${this.city}`;
    },
};
console.log(man.info());

console.log("------------Aufgabe 4-------------");
const objectToArray = {
    A: 1,
    B: 2,
    C: 3,
};
function OA() {
    console.log(Object.entries(objectToArray));
}
OA();
const animals = {
    cats: 1,
    dogs: 2,
    turtles: 4,
};
function OA2() {
    console.log(Object.entries(animals));
}
OA2();

console.log("------------Aufgabe 5-------------");

let student = {
    name: "Mike",
    class: "4A",
    course: "English",
};
function array() {
    console.log(Object.values(student));
}
array();

console.log("------------Aufgabe 6-------------");

let first = { firstName: "John" };
let last = { lastName: "Smith" };

function combineArr() {
    let merged = { ...first, ...last };
    return merged;
}
console.log(combineArr());
console.log("If values are same, it still works");
console.log(
    "No because we only copy values, because we wanna keep original data in tackt, makes more sence"
);

console.log("------------Aufgabe 7-------------");

function changeKeyValue(obj) {
    const swapped = Object.entries(obj).map(([key, value]) => [value, key]);

    return Object.fromEntries(swapped);
}
console.log(changeKeyValue({ apple: "pinklady", banana: "chikita" }));
