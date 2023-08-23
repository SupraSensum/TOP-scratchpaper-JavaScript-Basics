// Associate element id with keycode for easy reference to <audio> id's
const drumItems = [
   [document.querySelector('#clap'), 'code-a'],
   [document.querySelector('#hihat'), 'code-s'],
   [document.querySelector('#kick'), 'code-d'],
   [document.querySelector('#openhat'), 'code-f'],
   [document.querySelector('#boom'), 'code-g'],
   [document.querySelector('#ride'), 'code-h'],
   [document.querySelector('#snare'), 'code-j'],
   [document.querySelector('#tom'), 'code-k'],
   [document.querySelector('#tink'), 'code-l']
]

// Keyboard event controller
window.addEventListener('keydown', (event) => {
   const audioFile = document.querySelector(`#code-${event.key}`);
   let drumItemElement = '';
   
   // Find the related element
   for (let i = 0; i < drumItems.length; i++) {
      if (drumItems[i][1] === `code-${event.key}`) {
         playAndAnimate(audioFile, drumItems[i][0]);
         console.log("FOUND");
         return;
      }
   }

   console.log("MISSING");

   return;
});

// Add mouse click event listeners to each drumItem
drumItems.forEach((drumItem, index) => {
   const drumItemElement = drumItem[0];
   const drumItemKey = drumItem[1];

   drumItemElement.addEventListener('click', () => {
      const audioFile = document.querySelector(`#${drumItemKey}`);
      playAndAnimate(audioFile, drumItemElement);
   });

   drumItemElement.addEventListener('transitionend', removeTransition);
});

function playTheAudioFile (audioFile) {
   if(!audioFile) return;
   audioFile.currentTime = 0;
   audioFile.play();
   return;
}

function animateTheThing (theThing) {
   theThing.classList.add('playing');
   return;
}

function playAndAnimate (audioFile, theThing) {
   playTheAudioFile(audioFile);
   animateTheThing(theThing);

   return;
}

function removeTransition (event) {
   if (event.propertyName !== 'transform') {
      return;
   }
   
   this.classList.remove('playing');

   return;
}
