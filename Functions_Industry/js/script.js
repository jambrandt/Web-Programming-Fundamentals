// JavaScript
// Jessica Brandt 
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";
 
function storagelength(peopleAtSixMon,peopleAtThreeMon,peopleAtTwelveMon){
	var totalNumber = Number(prompt("What is the total number of units rented?"))
	var months = peopleAtSixMon * 6 + peopleAtThreeMon * 3 + peopleAtTwelveMon * 12
	var average = months / totalNumber
	console.log("The average lenght of stay is" + average + "months")
}

storagelength(Number(prompt("How many units have been rented for 6 months?")),Number(prompt("How many units have been rented for 3 months?")),Number(prompt("How many units have been rented for 12 months?")))
