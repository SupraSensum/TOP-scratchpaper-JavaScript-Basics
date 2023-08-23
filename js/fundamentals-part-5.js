const addObjectPropertyTestButton = document.getElementById('add-object-property-test');

addObjectPropertyTestButton.addEventListener('click', () => {
   let currentDesire = prompt('Whataya want?', 'food');

   let desires = {
      [currentDesire]: 5,
   }

   alert(desires[currentDesire]); // method 1 to show key:val pair
   alert(desires.food); // method 2 to show key:val pair
});