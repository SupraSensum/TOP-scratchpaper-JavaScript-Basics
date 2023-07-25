console.log("Hello, World! straight from the linked .js file!");

// First message assignment demo
let message;
message = 'Hello!';
// alert(message);

// Message assignment demo simplifying the let command
let message2 = "World!";
// alert(message2);

// Demo defining multiple variables at once; not recommended
let user = 'John', age = 25, message3 = 'Hello';

// It's preferable to definte multiple variable as shown below
let user2 = 'John';
let age2 = 25;
let message4 = 'Hello';

// Here's another alternative
let user3 = 'John',
    age3 = 25,
    message5 = 'Hello';

// And finally, the "comma-first" style
// I do not like this one, lol
let user4 = 'John'
    , age4 = 25
    , message6 = 'Hello';

// Assigning one variable's value to another
let hello = 'Hello, World!';
let hello_world_alert;
hello_world_alert = hello;
// alert(hello);
// alert(hello_world_alert);

// Playing with const's
// We've also switched to using camelCase in our variable names, as a demo
// I used the '+' operator just to see if it would work. It did. Not sure if that is best practice, though.
const myBirthday = '1970-01-01';
// alert('My birthday is ' + myBirthday);

// Constants should be uppercase and use underscores
// I noticed at this point that the tutorial I am following is mixing and 
// matching single and double quotes ( ' and " ). Apparently, according to
// the almighty chatGPT, that's fine. There is no difference in JS. Yay? Yay.
// Of course, consistency is key, but we'll be ignorating that in this JS
// to really drive the point home.
const COLOR_RED = "F00";
const COLOR_BLUE = '00F';

let color = COLOR_BLUE;
// alert(color);

// Following this: https://javascript.info/task/hello-variables
let admin,
    name;
name = 'John';
admin = name;
// alert(admin);

// Following this: https://javascript.info/task/declare-variables
let planetEarth;
let currentIntruderName;

// Following this: https://javascript.info/task/uppercast-constant
// My answer:
//   const BIRTHDAY
//   let age

// The real deal code
alert("Hello, World! Welcome to Dante’s last circle of Hell :-)")