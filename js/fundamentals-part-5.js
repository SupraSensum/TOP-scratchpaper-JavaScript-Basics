// Don't expect much code cleanliness here. This is all about just testing
// recently learned subjects

const addObjectPropertyTestButton = document.getElementById('objectPropertyTest');
addObjectPropertyTestButton.addEventListener('click', () => {
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
const addObjectPropertyTestButton2 = document.getElementById('objectPropertyTest2');
addObjectPropertyTestButton2.addEventListener('click', () => {
   let keyName = prompt('Enter key name:', 'DEFAULT');
   let keyValue = prompt('Enter key value:', 'MA MAN');

   let frigginObject = {
      [keyName]: keyValue,
   }

   alert(frigginObject[keyName]);
});

// append string to key name
const addObjectPropertyTestButton3 = document.getElementById('objectPropertyTest3');
addObjectPropertyTestButton3.addEventListener('click', () => {
   let keyName = 'somePerson';
   let keyValue = prompt('Enter key value:', 'MA MAN');

   let frigginObject = {
      [keyName + 'ThirdWheel']: keyValue,
   }

   alert(frigginObject.somePersonThirdWheel);
});

// property value shorthand
const addObjectPropertyTestButton4 = document.getElementById('objectPropertyTest4');
addObjectPropertyTestButton4.addEventListener('click', () => {
   let myName = prompt('Enter your name:', 'Billie Bob');
   let myAge = prompt('Enter your age:', '87');

   let myInfo = {
      myName,
      myAge,
   }

   alert(`My name is ${myInfo.myName} and I am ${myInfo.myAge} years old!`);
});

// use a function and shorthands to create user info 
const addObjectPropertyTestButton5 = document.getElementById('objectPropertyTest5');
addObjectPropertyTestButton5.addEventListener('click', () => {
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