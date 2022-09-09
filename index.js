/** @format */

//we need to conside 4 elements to manipulate
//the four elements of hours,minutes,seconds,am are called separately
//we can return an element by using getelementbyidmethod

//create constant
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

//to change the elemts dynamically we craete a function to get the data from our computer
function updateClock() {
  //get the hour from computer-->using date construtor,so create a variable
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  //implementing the pm
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  //a condition to put a two digit to hours
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  ampmEl, (innerText = ampm);

  //we can call this function every second using settimeout method
  //set a timer that execute a function after the timer expires
  //first parameter inside the set parameter is a function
  //seond paramenter is the timer and setted to be one second which is 1000 milliseconds
  //and in every 1sec we wanna call this function
  //not every is just after one second
  //we caall it again,so we first the code runs until updateClock() and calls the function first
  //and then as soon as it reach to the set timeout after one second call
  //the function agaian and
  //then code goes from let h again and again call the funstion
  //its an infinite loop
  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
