// Don't expect much code cleanliness here. This is all about just testing
// recently learned subjects

// 
// MY MAGNUM OPUS
// 
// At this point, my stubborn behind really wanted to automate the HTML & JS
// creation of each practice button
function newButton(idContainer, buttonText, onClickFunc) {
   const buttonsContainer = document.getElementById(idContainer);
   const newButton = document.createElement('button');

   newButton.id = camelize(buttonText);
   newButton.textContent = buttonText;
   newButton.addEventListener('click', onClickFunc);

   buttonsContainer.appendChild(newButton);

   function camelize(inputString) {
      // Split the input string by spaces, underscores, or hyphens
      const words = inputString.split(/[ _-]+/);

      // If there's only one word or an empty string, return it as is
      if (words.length === 1) {
         return words[0].toLowerCase(); // Convert the word to lowercase
      }

      // Capitalize the first letter of each word (except the first one)
      const camelCaseWords = words.map((word, index) => {
         if (index === 0) {
           return word.toLowerCase(); // Convert the first word to lowercase
         } else {
           return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
         }
      });

      // Join the words together to form the camelCase string
      return camelCaseWords.join('');
   }
}
// 
// MY MAGNUM OPUS
// 

const objectTestButton = document.getElementById('objectPropertyTest');
objectTestButton.addEventListener('click', () => {
   let currentDesire = prompt('Whataya want?', 'food');

   let desires = {
      [currentDesire]: 5,
   }

   alert(desires[currentDesire]); // method 1 to show key:val pair
   alert(desires.food); // method 2 to show key:val pair

   desires.someOtherFood = 25;

   alert(desires.someOtherFood);

   desires.sayHolla = () => {
      alert('HOLLA');
      
      return;
   }

   desires.sayHolla();

   delete desires.sayHolla;

   desires.sayHolla(); // this should throw an error in DevTools
});

// create and alert an object key:val pair
const objectTestButton2 = document.getElementById('objectPropertyTest2');
objectTestButton2.addEventListener('click', () => {
   let keyName = prompt('Enter key name:', 'DEFAULT');
   let keyValue = prompt('Enter key value:', 'MA MAN');

   let frigginObject = {
      [keyName]: keyValue,
   }

   alert(frigginObject[keyName]);
});

// append string to key name
const objectTestButton3 = document.getElementById('objectPropertyTest3');
objectTestButton3.addEventListener('click', () => {
   let keyName = 'somePerson';
   let keyValue = prompt('Enter key value:', 'MA MAN');

   let frigginObject = {
      [keyName + 'ThirdWheel']: keyValue,
   }

   alert(frigginObject.somePersonThirdWheel);
});

// property value shorthand
const objectTestButton4 = document.getElementById('objectPropertyTest4');
objectTestButton4.addEventListener('click', () => {
   let myName = prompt('Enter your name:', 'Billie Bob');
   let myAge = prompt('Enter your age:', '87');

   let myInfo = {
      myName,
      myAge,
   }

   alert(`My name is ${myInfo.myName} and I am ${myInfo.myAge} years old!`);
});

// use a function and shorthands to create user info 
const objectTestButton5 = document.getElementById('objectPropertyTest5');
objectTestButton5.addEventListener('click', () => {
   let myName = prompt('Enter your name:', 'Billie Bob');
   let myAge = prompt('Enter your age:', '87');

   let myInfo = makeUser(myName, myAge);

   function makeUser(name, age) {
      return {
         name,
         age,
      }
   }

   alert(`My name is ${myInfo.name} and I am ${myInfo.age} years old!`);
});

// test the "in" operator
const objectTestButton6 = document.getElementById('objectPropertyTest6');
objectTestButton6.addEventListener('click', () => {
   let someObject = {
      a: 1,
      b: 2,
      c: 3,
   }

   alert(`${'a' in someObject}:${someObject.a}`); // returns true and 1
   alert(`${'d' in someObject}:${someObject.d}`); // returns false and undefined
});

// for...in
const objectTestButton7 = document.getElementById('objectPropertyTest7');
objectTestButton7.addEventListener('click', () => {
   let myInfo = {
      firstName: 'Billie',
      lastName: 'Bob',
      age: 87,
      yearOfBirth: 1900,
      birthState: 'Idaho',
   }

   for (let prop in myInfo) {
      alert(`${prop}: ${myInfo[prop]}`);
   }
});

// integer properties
const objectTestButton8 = document.getElementById('objectPropertyTest8');
objectTestButton8.addEventListener('click', () => {
   let someObject = {
      '2': 2,
      '3': 3,
      '4': 4,
      '1': 1,
   };

   for (let prop in someObject) {
      console.log(someObject[prop]);
   }

   console.log('and again');

   // redefine
   someObject = {
      '2': 2,
      '3': 3,
      '4': 4,
      '1': 1,
      'test': 'test',
      '5': 5,
      '7': 7,
      '6': 6,
      '0': 0,
   };

   for (let prop in someObject) {
      console.log(someObject[prop]);
   }
});

// test a theory out...
const objectTestButton9 = document.getElementById('objectPropertyTest9');
objectTestButton9.addEventListener('click', () => {
   let level1Object = {
      sup: 'what up',
      nm: 'not much',
      nextLevel: {
         isThisTooDeepForYou: false,
      },
      doobie: 'fo sho',
   };

   for (prop in level1Object) {
      console.log(`${prop}: ${level1Object[prop]}`);
   }

   for (prop in level1Object.nextLevel) {
      console.log(`${prop}: ${level1Object.nextLevel[prop]}`);
   }
}); // mmkay, theory turns out to be true... and so the depths stare back at me

// Hello, object
const helloObjectButton = document.getElementById('helloObject');
helloObjectButton.addEventListener('click', () => {
   let user = {};
   let counter = 0;

   console.log(`Test ${counter++}`);
   for (let prop in user) console.log (`${prop}:${user[prop]}`);

   user.name = 'John';

   console.log(`Test ${counter++}`);
   for (let prop in user) console.log (`${prop}:${user[prop]}`);

   user.surname = 'Smith';

   console.log(`Test ${counter++}`);
   for (let prop in user) console.log (`${prop}:${user[prop]}`);

   user.name = 'Pete';

   console.log(`Test ${counter++}`);
   for (let prop in user) console.log (`${prop}:${user[prop]}`);

   delete user.name;

   console.log(`Test ${counter++}`);
   for (let prop in user) console.log (`${prop}:${user[prop]}`);
});

// Check for emptiness
const checkEmptinessButton = document.getElementById('checkEmptiness');
checkEmptinessButton.addEventListener('click', () => {
   let schedule = {};

   alert( isEmpty(schedule) ); // true

   schedule["8:30"] = "get up";

   alert( isEmpty(schedule) ); // false

   // my attempt
   function isEmpty (someObject) {
      let numberOfProperties = 0;
      for (let prop in someObject) numberOfProperties++;
      if (numberOfProperties === 0) return true;
      else return false;
   }

   // the lesson's solution
   // function isEmpty (someObject) {
   //    for (let key in someObject) {
   //       return false;
   //    }
   //    return true;
   // }
});

// Sum object properties
const sumObjectPropertiesButton = document.getElementById('sumObjectProperties');
sumObjectPropertiesButton.addEventListener('click', () => {
   let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130
   }

   let payroll = 0;
   for (salary in salaries) {
      payroll += salaries[salary];
   }

   alert(payroll);
});

// Multiply numeric property values by 2
const multiplyNumericPropertyValuesBy2 = document.getElementById('multiplyNumericPropertyValuesBy2');
multiplyNumericPropertyValuesBy2.addEventListener('click', () => {
   // before the call
   let menu = {
      width: 200,
      height: 300,
      title: "My menu"
   };

   for (let prop in menu) console.log (`${prop}:${menu[prop]}`);

   multiplyNumeric(menu);

   // after the call
   menu = {
      width: 400,
      height: 600,
      title: "My menu"
   };

   for (let prop in menu) console.log (`${prop}:${menu[prop]}`);

   function multiplyNumeric(obj) {
      for (let key in obj) {
         if (typeof obj[key] === 'number') obj[key] *= 2;
      }
   }
});

// Two ways to create function properties in an object
const prac2Test1Button = document.getElementById('prac2test1');
prac2Test1Button.addEventListener('click', () => {
   let someObject = {
      name: 'Gary',
      age: '45',
      giveName: () => {
         console.log(`My name is ${someObject.name}`);
      },
      giveAge() {console.log(`I am ${someObject.age} years old`);},
   }

   someObject.giveName();
   someObject.giveAge();
});

// Objects as object properties
const prac2Test2Button = document.getElementById('prac2test2');
prac2Test2Button.addEventListener('click', () => {
   let person = {}

   person.name = {};
   person.name.first = 'Joseph';
   person.name.last = 'Smith';
   person.age = 25;

   console.log(`${person.name.first} ${person.name.last} ${person.age}`);
   console.log(person);
});

// Two ways to create function properties in an object - UPDATED using 'this' keyword
const prac2Test3Button = document.getElementById('prac2test3');
prac2Test3Button.addEventListener('click', () => {
   let someObject = {
      name: 'Gary',
      age: '45',
      giveName: () => {
         console.log(`My name is ${this.name}`);
      },
      giveAge() {console.log(`I am ${this.age} years old`);},
   }

   someObject.giveName();
   someObject.giveAge();
});

// constructors
const prac2test4Button = document.getElementById('prac2test4');
prac2test4Button.addEventListener('click', () => {
   const myFirstProduct = new product(prompt('Enter product name:', 'Table'));
   myFirstProduct.logName();

   function product(name) {
      this.name = name;
      this.logName = () => console.log(this.name);
   }
});

// object basics 1
const prac3test1 = document.getElementById('prac3test1');
prac3test1.addEventListener('click', () => {
   
});

// camelize
const prac4Test1 = document.getElementById('camelize');
prac4Test1.addEventListener('click', () => {
   const ORIGINAL = '-webkit-transition';
   const EXPECTATION = 'WebkitTransition';

   function camelize(someString) {
      return someString
         .split('-')
         .map(
            (string, index) => index > 0 ? string[0].toUpperCase() + string.slice(1) : string
         )
         .join('');
   }

   console.table(camelize(ORIGINAL));
   console.log(camelize(ORIGINAL) == EXPECTATION);
});

// Filter range
const prac4Test2 = document.getElementById('filterRange');
prac4Test2.addEventListener('click', () => {
   let arr = [5, 3, 8, 1];

   let filtered = filterRange(arr, 1, 4);

   console.table( filtered ); // 3,1 (matching values)

   console.table( arr ); // 5,3,8,1 (not modified)

   function filterRange(arr, a, b) {
      // return arr.filter((item) => {
      //    return item >= a && item <= b ? true : false;
      // });

      // return arr
      //    .filter(
      //       (item) => item >= a && item <= b ? true : false
      //    );

      return arr.filter(
         (item) => item >= a && item <= b
      )
   }
});

// Filter range "in place"
const prac4Test3 = document.getElementById('filterRangeInPlace');
prac4Test3.addEventListener('click', () => {
   let arr = [5, 3, 8, 1];

   filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

   console.log( arr ); // [3, 1]

   function filterRangeInPlace (arr, a, b) {
      arr.splice(0, arr.length, ...arr.filter(
            (item) => item >= a && item <= b
         ));
   }
});

// Sort in decreasing order
const prac4Test4 = document.getElementById('sortInDecreasingOrder');
prac4Test4.addEventListener('click', () => {
   let arr = [5, 2, 1, -10, 8];

   arr.sort((a, b) => b - a);

   console.log( arr ); // 8, 5, 2, 1, -10
});

// Copy and sort array
const prac4Test5 = document.getElementById('copyAndSortArray');
prac4Test5.addEventListener('click', () => {
   let arr = ["HTML", "JavaScript", "CSS"];

   let sorted = copySorted(arr);

   function copySorted(arr) {
      return arr.slice().sort();
   }

   console.log( sorted ); // CSS, HTML, JavaScript
   console.log( arr ); // HTML, JavaScript, CSS (no changes)
});

// Create an extendable calculator --- my way...
const prac4Test6 = document.getElementById('extendableCalc');
prac4Test6.addEventListener('click', () => {
   function calculate(str) {
      let result = 0;

      splitString = str.split(' ');

      // conditionally assess each element
      for (let i = 0; i < splitString.length; i++) {
         currItem = splitString[i];
         switch(currItem) {
            case '+':
               result += Number(splitString[++i]);
               break;
            case '-':
               result -= Number(splitString[++i]);
               break;
            default:
               result += Number(currItem);
               break;
         }
      }

      return result;
   }

   console.log(calculate('3 + 7 - 2'));
});

// Create an extendable calculator... holy crap, constructors are beautiful
const prac4Test7 = document.getElementById('extendableCalc2');
prac4Test7.addEventListener('click', () => {
   function Calculator() {
      this['+'] = (a, b) => Number(a) + Number(b);
      this['-'] = (a, b) => Number(a) - Number(b);
      this.calculate = (str) => {
         const arr = str.split(' ');
         return this[arr[1]](arr[0], arr[2]);
      };
      this.addMethod = (name, func) => this[name] = func;
   }

   let powerCalc = new Calculator;
   powerCalc.addMethod("*", (a, b) => a * b);
   powerCalc.addMethod("/", (a, b) => a / b);
   powerCalc.addMethod("**", (a, b) => a ** b);

   let result = powerCalc.calculate("2 ** 3");
   console.log( result ); // 8
   result = powerCalc.calculate("9 / 3");
   console.log( result ); // 3
   result = powerCalc.calculate("3 * 3");
   console.log( result ); // 9
});

// Map to names
const prac4test8 = document.getElementById('mapToNames');
prac4test8.addEventListener('click', () => {
   let john = { name: "John", age: 25 };
   let pete = { name: "Pete", age: 30 };
   let mary = { name: "Mary", age: 28 };

   let users = [ john, pete, mary ];

   let names = users.map((user) => user.name);

   console.log( names ); // John, Pete, Mary
});

// Map to objects
const prac4test9 = document.getElementById('mapToObjects');
prac4test9.addEventListener('click', () => {
   let john = { name: "John", surname: "Smith", id: 1 };
   let pete = { name: "Pete", surname: "Hunt", id: 2 };
   let mary = { name: "Mary", surname: "Key", id: 3 };

   let users = [ john, pete, mary ];

   let usersMapped = users.map(user => {
      return {
         fullName: [user.name, user.surname].join(' '),
         id: user.id,
      }
   });

   /*
   usersMapped = [
   { fullName: "John Smith", id: 1 },
   { fullName: "Pete Hunt", id: 2 },
   { fullName: "Mary Key", id: 3 }
   ]
   */

   console.log( usersMapped[0].id ) // 1
   console.log( usersMapped[0].fullName ) // John Smith
});

// Sort users by age
newButton('practice4', 'Sort users by age', () => {
   let john = { name: "John", age: 25 };
   let pete = { name: "Pete", age: 30 };
   let mary = { name: "Mary", age: 28 };

   let arr = [ pete, john, mary ];

   sortByAge(arr);

   // now: [john, mary, pete]
   console.log(arr[0].name); // John
   console.log(arr[1].name); // Mary
   console.log(arr[2].name); // Pete

   function sortByAge(users) {
      users.sort((a, b) => a.age - b.age);
   }
});

newButton('practice4', 'Shuffle an array', () => {
   let arr = [1, 2, 3];

   shuffle(arr);
   // arr = [3, 2, 1]

   shuffle(arr);
   // arr = [2, 1, 3]

   shuffle(arr);
   // arr = [3, 1, 2]
   // ...
   
   function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
   }

   // counts of appearances for all possible permutations
   let count = {
      '123': 0,
      '132': 0,
      '213': 0,
      '231': 0,
      '321': 0,
      '312': 0
   };

   for (let i = 0; i < 1000000; i++) {
      let array = [1, 2, 3];
      shuffle(array);
      count[array.join('')]++;
   }

   // show counts of all possible permutations
   for (let key in count) {
      console.log(`${key}: ${count[key]}`);
   }
});

// Get average age
newButton('practice4', 'Get average age', () => {
   let john = { name: "John", age: 25 };
   let pete = { name: "Pete", age: 30 };
   let mary = { name: "Mary", age: 29 };

   let arr = [ john, pete, mary ];

   console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

   function getAverageAge(arr) {
      return arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
   }
})

// Filter unique array members
// This one murdered me... ugh
newButton('practice4', 'Filter unique array members', () => {
   function unique(arr) {
      
      return arr.reduce((accum, currVal) => {

         if (!accum.includes(currVal)) {

            accum.push(currVal);

         }

         return accum;

      }, []);

   }

   let strings = ["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"
   ];

   console.log( unique(strings) ); // Hare, Krishna, :-O
});

// Filter unique array members... using my stubborness to attempt optimization
newButton('practice4', 'Filter unique array members via my stubborness', () => {
   function unique(arr) {
      // store the count of each name in an object
      // return only the key names collected
      const nameFrequency = {}

      arr.forEach((item) => {
         if (!nameFrequency[item]) nameFrequency[item] = 0;
         nameFrequency[item]++;
      });

      return Object.keys(nameFrequency);
   }

   let strings = ["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"
   ];

   console.log( unique(strings) ); // Hare, Krishna, :-O
});

// Create keyed object from array
newButton('practice4', 'Create keyed object from array', () => {
   let users = [
      {id: 'john', name: "John Smith", age: 20},
      {id: 'ann', name: "Ann Smith", age: 24},
      {id: 'pete', name: "Pete Peterson", age: 31},
   ];
      
   let usersById = groupById(users);

   console.table(usersById);
   
   /*
   // after the call we should have:
   
   usersById = {
   john: {id: 'john', name: "John Smith", age: 20},
   ann: {id: 'ann', name: "Ann Smith", age: 24},
   pete: {id: 'pete', name: "Pete Peterson", age: 31},
   }
   */

   function groupById(arr) {
      return arr.reduce((reducedArr, currItem) => {
         reducedArr[currItem.id] = currItem;
         return reducedArr;
      }, {});
   }
});