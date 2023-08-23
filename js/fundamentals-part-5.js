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