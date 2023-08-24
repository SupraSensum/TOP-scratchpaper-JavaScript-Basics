// Don't expect much code cleanliness here. This is all about just testing
// recently learned subjects

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

   // redfine
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
// how we gon' do it?
// split n join
// - split at delim '-'
// - arryOfStrings.charAt(0).toUpperCase()
const prac4Test1 = document.getElementById('camelize');
prac4Test1.addEventListener('click', () => {
   const ORIGINAL = '-webkit-transition';
   const EXPECTATION = 'WebkitTransition';

   function camelize(someString) {
      return someString.split('-').map((string, index) => index > 0 ? string.charAt(0).toUpperCase() + string.slice(1) : string).join('');
   }

   console.table(camelize(ORIGINAL));
   console.log(camelize(ORIGINAL) == EXPECTATION);
});