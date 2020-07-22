// Write your JavaScript code here!

window.addEventListener("load", function () {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         const div = document.getElementById("missionTarget");
         let index = 0;
         div.innerHTML = `<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[index].name}</li>
   <li>Diameter: ${json[index].diameter}</li>
   <li>Star: ${json[index].star}</li>
   <li>Distance from Earth: ${json[index].distance}</li>
   <li>Number of Moons: ${json[index].moons}</li>
</ol>
<img src="${json[index].image}">
`;
index = (index + 1) % json.length;

      )};
      )};


   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === '' || copilotNameInput.value === '' || fuelLevelInput.value === '' || cargoMassInput.value === '') {
         alert("All fields must be filled out!");
         //stop the form submission
         event.preventDefault();
      }
      if (isNaN(fuelLevelInput.value) === true) {
         alert("Fuel level is not a valid number");
         event.preventDefault();
      }
      if (isNaN(cargoMassInput.value) === true) {
         alert("Cargo Mass is not a valid number");
         event.preventDefault();
      }
      if (isNaN(pilotNameInput.value) === false) {
         alert("Pilot Name has numbers in it!")
         event.preventDefault();
      }
      if (isNaN(copilotNameInput.value) === false) {
         alert("Co-Pilot name has numbers in it!")
         event.preventDefault();
      }

      if (isNaN(pilotNameInput.value) === true && isNaN(copilotNameInput.value) === true && isNaN(fuelLevelInput.value) === false && isNaN(cargoMassInput.value) === false) {
         document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         document.getElementById('copilotStatus').innerHTML = `Co-Pilot ${copilotNameInput.value} is ready for launch`;

         if (fuelLevelInput.value <= 10000) {
            document.getElementById('faultyItems').style.visibility = "visible";
            document.getElementById('fuelStatus').innerHTML = `There is not enough fuel for the journey.`;
            document.getElementById('launchStatus').innerHTML = `Shuttle not ready for launch`;
            document.getElementById('launchStatus').style.color = 'red';
            event.preventDefault();
         }
         if (cargoMassInput.value >= 10000) {
            document.getElementById('faultyItems').style.visibility = "visible";
            document.getElementById('cargoStatus').innerHTML = ` There is too much mass for the shuttle to take off`;
            document.getElementById('launchStatus').innerHTML = `Shuttle not ready for launch`;
            document.getElementById('launchStatus').style.color = 'red';
            event.preventDefault();
         }
         else if (fuelLevelInput.value > 10000 && cargoMassInput.value <= 10000) {
            document.getElementById('launchStatus').innerHTML = `Shuttle is ready for launch`;
            document.getElementById('launchStatus').style.color = 'green';
            // document.getElementById('faultyItems').style.visibility = 'hidden';
            event.preventDefault();
         }
      }
   });

});

// window.addEventListener("load", function () {
//    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
//       response.json().then(function (json) {
//          const div = document.getElementById("missionTarget");
//          let index = 0;
//          div.innerHTML = `<h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${json[index].name}</li>
//    <li>Diameter: ${json[index].diameter}</li>
//    <li>Star: ${json[index].star}</li>
//    <li>Distance from Earth: ${json[index].distance}</li>
//    <li>Number of Moons: ${json[index].moons}</li>
// </ol>
// <img src="${json[index].image}">
// `;
// index = (index + 1) % json.length;

//       )};
//       )};
// });

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
