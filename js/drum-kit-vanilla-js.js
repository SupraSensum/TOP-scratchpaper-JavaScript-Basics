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

window.addEventListener('keydown', (event) => {
   const audioFile = document.querySelector(`#code-${event.key}`);
   playTheAudioFile (audioFile);
});

drumItems.forEach((drumItem, index) => {
   const drumItemElement = drumItem[0];
   const drumItemKey = drumItem[1];

   drumItemElement.addEventListener('click', () => {
      const audioFile = document.querySelector(`#${drumItemKey}`);
      playTheAudioFile(audioFile);
   });
});

function playTheAudioFile (audioFile) {
   if(!audioFile) return;
   audioFile.currentTime = 0;
   audioFile.play();
}