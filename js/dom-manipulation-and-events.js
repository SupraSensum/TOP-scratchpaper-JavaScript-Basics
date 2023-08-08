// demo 1
// Let button change color of h1 element text

const theButton = document.querySelector('#demo-button-1');
const theHeader = document.querySelector('#demo-header-1');

theButton.addEventListener('click', paintItXXX);

function paintItXXX () {
   switch (theHeader.style.color) {
      case '':
         theHeader.style.color = 'red';
         break;
      case 'inherit':
         theHeader.style.color = 'red';
         break;
      case 'red':
         theHeader.style.color = 'inherit';
         break;
      default:
         break;
   }
   return;
}

// demo 2
// Let button change color of h1 element text
// Add disabling feature
// Welp, this was a failure lol

const theButton2 = document.querySelector('#demo-button-2');
const theHeader2 = document.querySelector('#demo-header-2');
const theDisAbler = document.querySelector('#demo-button-2-disabler');

theButton2.addEventListener('click', paintItXXX2);
theDisAbler.addEventListener('click', disableTheButtonIndirectly);

function sayHi () {
   alert('holla');
}

function paintItXXX2 () {
   switch (theHeader2.style.color) {
      case '':
         theHeader2.style.color = 'red';
         break;
      case 'inherit':
         theHeader2.style.color = 'red';
         break;
      case 'red':
         theHeader2.style.color = 'inherit';
         break;
      default:
         break;
   }
   return;
}

function disableTheButtonIndirectly () {
   theButton2.addEventListener('click', sayHi);
   return;
}

// demo 3
// add a button that creates additional elements
//    make sure each element comes with the .created-from-button class
// and another button that adds the same class as the header so all elements' colors change at once

const button3ChangeColor = document.querySelector('#demo-button-3-change-color');
const button3CreateElement = document.querySelector('#demo-button-3-create-element');
const button3ToggleColorSync = document.querySelector('#demo-button-3-toggle-color-sync');
const theHeader3 = document.querySelector('#demo-header-3');

button3ChangeColor.addEventListener('click', paintItXXX);
button3CreateElement.addEventListener('click', demo3CreateElement);
button3ToggleColorSync.addEventListener('click', toggleColorSync);

function paintItXXX () {
   const thoseToBePainted = document.querySelectorAll('.change-my-color');
   for (i = 0; i < thoseToBePainted.length; i++) {
      switch (thoseToBePainted[i].style.color) {
         case '':
            thoseToBePainted[i].style.color = 'red';
            break;
         case 'inherit':
            thoseToBePainted[i].style.color = 'red';
            break;
         case 'red':
            thoseToBePainted[i].style.color = 'inherit';
            break;
         default:
            console.error("There are some color shenanigans goin' on up in heaaaa");
            break;
      }
      if (thoseToBePainted[i].classList.contains('created-from-button') && thoseToBePainted[i].style.color !== theHeader3.style.color) {
         thoseToBePainted[i].style.color = theHeader3.style.color;
         console.log('BINGBONG');
      }
   }
   return;
}

function demo3CreateElement () {
   const quickParaElement = document.createElement('p');
   quickParaElement.classList.add('created-from-button');
   quickParaElement.textContent = 'one of your long lost children';
   document.querySelector('#content-3').appendChild(quickParaElement);
   return;
}

function toggleColorSync () {
   const toggledElements = document.querySelectorAll('.created-from-button');
   for (let i = 0; i < toggledElements.length; i++) {
      toggledElements[i].classList.toggle('change-my-color');
   }
   return;
}