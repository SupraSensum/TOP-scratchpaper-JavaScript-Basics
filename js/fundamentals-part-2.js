// alert(Infinity);

// // Login prompting

// let userName = prompt("Enter username");
// let userPassword;

// // Login prompting using switch cases
// switch (userName) {
//     case "Admin":
//         switch (userPassword = prompt("Enter password")) {
//             case "TheMaster":
//                 alert("Welcome!");
//                 break;
//             case null:
//             case "":
//                 alert("Cancelled");
//                 break;
//             default:
//                 alert("Wrong password");
//                 break;
//         }
//         break;
//     case null:
//     case "":
//         alert("Cancelled");
//         break;
//     default:
//         alert("I don't know you");
//         break;
// }

// // Login prompting using if statements and conditional operators
// // This ended up being the correct solution, but I failed to use strict equality (===)
// if (userName === "Admin") {
//     userPassword = prompt("Enter password");
//     if (userPassword === "TheMaster") {
//         alert("Welcome!");
//     } else if (userPassword === null || userPassword === "") {
//         alert("Cancelled");
//     } else {
//         alert("Wrong password");
//     }
// } else if (userName === null || userName === "") {
//     alert("Cancelled");
// } else {
//     alert("I don't know you");
// }

// // Act pretentious
// // From this lesson: https://javascript.info/task/check-standard
// let userAnswer = prompt('What\'s the "official" name of JavaScript?');

// if (userAnswer === "ECMAScript") {
//     alert("Right!");
// } else {
//     alert('You don\'t know? "ECMAScript"!');
// }

// // Show the sign
// // I've provided 2 different implementations
// let userNumInput = prompt("Enter a number","");
// let userNumSign = 0;

// // userNumInput > 0 ? userNumSign = 1 :
// //     userNumInput < 0 ? userNumSign = -1 :
// //     userNumSign = 0;

// if (userNumInput > 0) {
//     userNumSign = 1;
// } else if (userNumInput < 0) {
//     userNumSign = -1;
// }

// alert(userNumSign);

// a + b < 4 ? result = 'Below' : result = 'Over';

// let message = login == 'Employee' ? 'Hello' :
//     login == 'Director' ? 'Greetings' :
//     login == '' ? 'No login' :
//     '';

// if (browser === 'Edge') {
//     alert( "You've got the Edge!" );
// } else if (browser === 'Chrome'
// || browser === 'Firefox'
// || browser === 'Safari'
// || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }