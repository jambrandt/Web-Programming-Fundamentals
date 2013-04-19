// JavaScript
// Jessica Brandt 
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var storageUnit = ['Small','Medium','Large']

storageUnit[0] = 29; //number of units rented
storageUnit[1] = 59; //number of units rented
storageUnit[2] = 27; //number of units rented

var totalOfTwo = storageUnit[0] + storageUnit[1];

var allUnits = 115;

var divide = totalOfTwo / allUnits;

var percent = divide * 100;

console.log(percent);
