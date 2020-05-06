/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
// task 1

var background = document.querySelector("body");
setTimeout(function () {
    background.style.backgroundColor = "red"
}, 5000);

// task 2
var background = document.querySelector("body");
var colors = ["red", "blue", "green", "yellow"];
var counter = 0;
setInterval(function () {
    background.style.backgroundColor = colors[counter];
    counter++;
    if(counter === colors.length) {
    counter = 0;
    }
}, 5000);