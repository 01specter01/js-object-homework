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

console.log("------------Aufgabe 2.5-------------");

function freeShipping(obj) {
    const firstValue = obj[Object.keys(obj)[0]];
    return firstValue;
    const secondValue = obj[Object.keys(obj)[1]];
    return secondValue;
    const thirdValue = obj[Object.keys(obj)[2]];
    return thirdValue;
    const fouthValue = obj[Object.keys(obj)[3]];
    return fouthValue;
    let sum = `${firstValue} + ${secondValue} +${thirdValue} +${fouthValue} `;
    console.log(sum);
}

console.log(freeShipping());

freeShipping({ Sponge: 3.5, Soap: 5.99 }); //➞ false
//freeShipping({ "Surround Sound Equipment": 499.99 }); //➞ true
//freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 }); //➞ false
