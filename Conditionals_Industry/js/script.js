// JavaScript
// Jessica Brandt Conditionals Industry 
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var numberOfRooms = Number(prompt("Enter number of rooms you need storage for",3));

if (numberOfRooms == 1){
	console.log ("Rent a 10x5 Storage Unit")
}
else if (numberOfRooms >= 2 && numberOfRooms <= 3){
     console.log ("Rent either at 10x15 or a 10x20")
}
else
{
	console.log ("Rent a 10x30")
}
