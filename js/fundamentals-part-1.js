console.log("Hello, World! straight from the linked .js file!");

// First message assignment demo
let message;
message = 'Hello!';
alert(message);

// Message assignment demo simplifying the let command
let message2 = "World!";
alert(message2);

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
alert(hello);
alert(hello_world_alert);