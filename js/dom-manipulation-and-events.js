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
      case 'black':
         theHeader.style.color = 'red';
         break;
      case 'red':
         theHeader.style.color = 'black';
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
      case 'black':
         theHeader2.style.color = 'red';
         break;
      case 'red':
         theHeader2.style.color = 'black';
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