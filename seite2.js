console.log("------------Aufgabe 2.1-------------");

function isWithinRange(num, obj) {
    if (num <= obj.max && num >= obj.min) {
        return true;
    }
    return false;
}

console.log(isWithinRange(2, { min: 0, max: 5 })); //➞ true
console.log(isWithinRange(4, { min: 4, max: 5 })); // ➞ true
console.log(isWithinRange(4, { min: 6, max: 10 })); //➞ false
console.log(isWithinRange(5, { min: 5, max: 5 })); //➞ true
console.log("------------Aufgabe 2.2-------------");

let ScrabbleSteinen = [];
const scrabbleHand = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
];
function calcMaxScrabbleScore() {
    let zahl = 0;
    for (let i = 0; i < scrabbleHand.length; i++) {
        zahl += scrabbleHand[i]["score"];
    }
    return zahl;
}

console.log(calcMaxScrabbleScore(scrabbleHand));

console.log("------------Aufgabe 2.3-------------");
const obj = { name: "Mat", age: 50 };
function isEmptyObject() {
    return Object.keys(obj).length === 0;
}
console.log(isEmptyObject());

console.log("------------Aufgabe 2.4-------------");

function countLetters(str) {
    var count = {};
    str.split("").forEach(function (s) {
        count[s] ? count[s]++ : (count[s] = 1);
    });
    return count;
}
console.log(countLetters("tree"));
