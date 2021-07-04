// Import stylesheets
import './style.css';

// Write Javascript code!

// long running function
function waitThreeSeconds() {
  var ms = 5000 + new Date().getTime();
  while (new Date().getTime() < ms) {
   
  }
  console.log('finished function');
}

function clickHandler() {
  console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

const appDiv = document.getElementById('app');
appDiv.innerHTML = '<h1>Asynchronous Javascript</h1>';
