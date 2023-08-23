// // Following this assignment: https://www.theodinproject.com/lessons/foundations-fundamentals-part-3#assignment
// let numberBeforeAdding7 = prompt("Gimme a numbah",'');
// let multiplier1 = prompt("Gimme anotha numbah",'');
// let multiplier2 = prompt("Gimme anotha one",'');
// let someDudesString1 = prompt("Gimme yo string",'');
// let someDudesString2 = prompt("Gimme yo last string",'');

// function add7 (theNumberWeGonAdd7To) {
//     return +theNumberWeGonAdd7To + 7;
// }

// function multiply (a, b) {
//     return a * b;
// }

// function capitalize (someString) {
//     return someString.charAt(0).toUpperCase() + someString.slice(1);
// }

// function lastLetter (someString) {
//     return someString.charAt(someString.length-1);
// }

// console.log(add7(numberBeforeAdding7));
// console.log(multiply(multiplier1, multiplier2));
// console.log(capitalize(someDudesString1));
// console.log(lastLetter(someDudesString2));

// This is a redo of the assignment above using new knowledge
// Self-critique: not a fan of the layered parantheses in each case's alert
//      solution: create variable alertMessage to break things up for readability
// I can see so many problems with my current menu implementation. No es bueno
// Hooray for accidental stumbling upon recusrion?
let i = 0;
alert(promptMenu());

function add7 (someNumber) {
    return Number(someNumber) + 7;
}

function multiply (a, b) {
    return Number(a) * Number(b);
}

function capitalize (someString) {
    return someString.slice(0, 1).toUpperCase() + someString.slice(1);
}

function lastLetter (someString) {
    return someString[someString.length - 1];
}

function promptMenu () {
    switch (prompt("Pick a letter (A-D)")) {
        case "A":
            return add7(prompt("Enter a number"));
            break;
        case "B":
            return multiply(prompt("Enter multiple 'a'"),
                prompt("Enter multiple 'b'"));
            break;
        case "C":
            return capitalize(prompt("Enter some text"));
            break;
        case "D":
            return lastLetter(prompt("Enter some string"));
            break;
        default:
            alert("Invalid input");
            console.log(++i); // counting the layers into the call stack
            return promptMenu();
            break;
    }
}