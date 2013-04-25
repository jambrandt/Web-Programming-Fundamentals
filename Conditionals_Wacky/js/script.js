// JavaScript
// Jessica Brandt 
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";


//Should you ride your bike or drive to you destination?
var distanceMiles = Number(prompt("How many miles to the destination"));
var distanceKilometers;

distanceKilometers = distanceMiles / 0.62137;

console.log (distanceKilometers)

if (distanceKilometers <= 9){
	console.log ("Conserve fuel and get exercise. Ride your bike!")
}else {
	console.log ("Go ahead and drive.")
}
