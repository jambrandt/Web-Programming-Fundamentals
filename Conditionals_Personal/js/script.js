// JavaScript
// Jessica Brandt 
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var raceResults = Number (prompt ("Where did you place in the race?"));
var qualify;

qualify = (raceResults <= 5) ? "Move on to the next race." : "Try again at the next meet.";
console.log(qualify) ;
