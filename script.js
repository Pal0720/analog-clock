const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
 
var date = new Date();
console.log(date);
let hour = date.getHours();
let minuts = date.getMinutes();
let seconds = date.getSeconds();
console.log("Hour: " + hour + " Minute: " + minuts + " Second: " + seconds);
 
let hourPosition = (hour*360/12)+(minuts*(360/60)/12);
let minutPosition = (minuts*360/60)+(seconds*(360/60)/60);
let secondPosition = seconds*360/60;
 
function runTheClock() {
 
    hourPosition = hourPosition+(3/360);
    minutPosition = minutPosition+(6/60);
    secondPosition = secondPosition+6;
 
    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minutPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)";
 
}
 
var interval = setInterval(runTheClock, 1000);