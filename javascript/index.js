const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  let showMinutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  console.log(showMinutes);
  minDecElement.innerHTML = showMinutes[0];
  minUniElement.innerHTML = showMinutes[1];
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.className = "btn stop";
  btnLeftElement.innerHTML = "STOP";
  chronometer.start(printTime);
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.className = "btn split";
  btnRightElement.innerHTML = "SPLIT";
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.className = "btn start";
  btnLeftElement.innerHTML = "START";
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.className = "btn reset";
  btnRightElement.innerHTML = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeftElement.className == "btn start") {
    setStopBtn()
    setSplitBtn()
  } else if(btnLeftElement.className == "btn stop") {
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
