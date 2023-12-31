// demo 1
// Let button change color of h1 element text
// 
// Ah, yes. Let us reminisce about how I used a for loop to iterate through
// a node list instead of using the .forEach method. Hah. Lovely
// 

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

button3ChangeColor.addEventListener('click', paintItXXX3);
button3CreateElement.addEventListener('click', demo3CreateElement);
button3ToggleColorSync.addEventListener('click', toggleColorSync);

function paintItXXX3 () {
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

   if (toggledElements[toggledElements.length - 1].classList.contains('change-my-color')) {
      button3ToggleColorSync.textContent = 'toggle color sync [on]';
   } else {
      button3ToggleColorSync.textContent = 'toggle color sync [off]';
   }

   return;
}

// demo 4
const demo4ContentDiv = document.querySelector('#content-4');
const button4 = document.querySelector('#demo-button-4');

button4.addEventListener('click', demo4CompleteTheExercise);

function demo4CompleteTheExercise () {
   demo4ContentDiv.appendChild(demo4CreateFillAndStyleElement('p', "Hey I'm red!", 'color: red;'));
   demo4ContentDiv.appendChild(demo4CreateFillAndStyleElement('h3', "I'm a blue h3!", 'color: blue;'));
   
   const demo4CreatedDivContainer = demo4CreateFillAndStyleElement('div', '', 'border: 2px solid black; background-color: pink;');

   demo4CreatedDivContainer.appendChild(demo4CreateFillAndStyleElement('h1', "I'm in a div", ''));
   demo4CreatedDivContainer.appendChild(demo4CreateFillAndStyleElement('p', "ME TOO!", ''));

   demo4ContentDiv.appendChild(demo4CreatedDivContainer);
}

function demo4CreateFillAndStyleElement (elementType = 'p', content = 'placeholder', styleOptions = 'color: red;') {
   const someElement = document.createElement(elementType.toString());
   someElement.textContent = content.toString();
   someElement.style.cssText = styleOptions;
   return someElement;
}

// demo 5
const demo5Button2 = document.querySelector('#demo-button-5-method-2');
const demo5Button3 = document.querySelector('#demo-button-5-method-3');

// Method 2... yuck
demo5Button2.onclick = () => alert('Hello World'); // ew, lol

// Method 3... mmm, delicious
demo5Button3.addEventListener('click', (testtest) => {
   console.log(testtest);
   console.log(testtest.target);
   testtest.target.style.background = 'lightgreen';
   alert('Hello World');
});

// demo 6
// Attaching listeners to groups of nodes
demo6Buttons = document.querySelectorAll('#content-6 > button');

demo6Buttons.forEach(button => {
   button.addEventListener('click', (buttonClickDetails) => {
      buttonClickDetails.target.style.background = 'lightgreen';
      alert(button.id);
   });
});

// demo 8
const allLeds = document.querySelectorAll('.led');

allLeds.forEach((led) => {
   // what's really going on?
   // 
   // 1. page loads
   // ... add transition end listener
   // 2. turn on first led (.on [should have transition property])
   // 3. upon transition end, turn off the first led and turn on the second led
   // 4. loop through... figure out this part when you get there

   led.addEventListener('transitionend', turnOffLED);
});

function turnOnLED (event) {
   return;
}

function turnOffLED (event) {
   if(event.propertyName === 'transform') {
      this.classList.remove('ledOn');
   }

   return;
}

allLeds[0].classList.add('ledOn');

// demo 9
// There's a weird flex problem I'm having where as we append children to theLog,
// the flex container leContainerOfLeDivs does not grow. Can't figure this one
// out. Moving on with my studies
// 
// Tried getting chatGPT to help me with understanding why the flex container
// would not behave as expected: https://chat.openai.com/share/fbbbc2ef-5bd8-4dae-b82c-58ee0f09724e
const allOfLeDivs = document.querySelectorAll('#content-9 div');
const theLog = document.createElement('div');
const leContainerOfLeDivs = document.querySelector('#content-9');
const demo9ReverseButton = document.querySelector('#demo-9-button');

let captureState = false;
let statusOfStopPropagation = false;
let statusSelfDestruct = false;

leContainerOfLeDivs.appendChild(theLog);

// Le listeners
allOfLeDivs.forEach((leSingleDiv) => {
   leSingleDiv.addEventListener('click', logZeClick, {capture: captureState});
});

demo9ReverseButton.addEventListener('click', reverseLogOrder);

// Le functions
function logZeClick (event) {
   const logEntry = document.createElement('p');
   logEntry.textContent = this.classList.value;
   theLog.appendChild(logEntry);

   if(statusOfStopPropagation) event.stopPropagation();
}

function reverseLogOrder () {
   allOfLeDivs.forEach((leSingleDiv) => {
      leSingleDiv.removeEventListener('click', logZeClick, {capture: captureState});
   });

   captureState = !captureState;

   theLog.textContent = '';

   // Update button status
   demo9ReverseButton.textContent = `reverse order [capture: ${captureState}]`;

   if(confirm('run ".stopPropagation()"?')) {
      demo9ReverseButton.textContent += ' [.stopPropagation() enabled]';
      statusOfStopPropagation = true;
   } else statusOfStopPropagation = false;

   // self destruct
   confirm('Self destruct?') ?
      statusSelfDestruct = true :
      statusSelfDestruct = false;
   
   allOfLeDivs.forEach((leSingleDiv) => {
      leSingleDiv.addEventListener('click', logZeClick, {
         capture: captureState,
         once: statusSelfDestruct
      });
   });
}

// Toggle propagation button actions
// 
// add event listeners
// if clicked
//    classList.remove on all associated button elements
//    classList.add to clicked button element
// 
// REALIZE I'M IN WAY TOO DEEP
//    Since .stopPropagation() can only be run (seemingly) when the event is
//    created, well, life just gets complicated

// demo 10
const demo10Para = document.querySelector('#content-10 p');
const demo10Button = document.querySelector('#content-10 button');

for (let i = 0; i < 10; i++) {
   demo10Para.addEventListener('click', () => console.log(`index: ${i}`));
}

// getEventListeners apparently only runs from within DevTools console
// demo10Button.addEventListener('click', () => getEventListeners(demo10Para));

// demo 11
const demo11ColorfulDiv = document.querySelector('#content-11');
const demo11Colors = [
   'aqua',
   'blue',
   'coral',
   'dimgray',
   'sienna',
   'fuchsia',
   'green',
   'honeydew',
   'indigo',
   'whitesmoke',
   'khaki',
   'lavender',
   'maroon',
   'navy',
   'olive',
   'pink',
   'darkslategray',
   'red',
   'salmon',
   'teal',
   'tomato',
   'violet',
   'wheat',
   'turquoise',
   'yellow',
   'lemonchiffon'
]

window.addEventListener('keydown', (event) => {
   let color = event.key.charCodeAt() - 97;

   if(color >= 0 && color <= 25) demo11ColorfulDiv.style.background = demo11Colors[color];
   console.log(`color: ${demo11Colors[color]} | index: ${color}`);
});

window.addEventListener('keyup', (event) => {
   demo11ColorfulDiv.style.background = 'inherit';
});

// demo 12
const demo12ColorfulDiv = document.querySelector('#content-12');
let demo12ColorIndex = 0;

window.addEventListener('keydown', demo12CycleColors);

function demo12CycleColors(event) {
   if (demo12ColorIndex > 25) demo12ColorIndex = 0;

   demo12ColorfulDiv.style.background = demo11Colors[demo12ColorIndex++];
}

document.querySelector('#title-12').addEventListener('contextmenu', (event) => event.preventDefault());