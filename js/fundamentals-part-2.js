// alert(Infinity);

let userName = prompt("Enter username");
let userPassword;

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

// Login prompting using if statements and conditional operators
// This ended up being the correct solution, but I failed to use strict equality (===)
if (userName === "Admin") {
    userPassword = prompt("Enter password");
    if (userPassword === "TheMaster") {
        alert("Welcome!");
    } else if (userPassword === null || userPassword === "") {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if (userName === null || userName === "") {
    alert("Cancelled");
} else {
    alert("I don't know you");
}