// JavaScript
// Jessica Brandt Personal_Functions 
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//Calculating how much food it takes to feed x amount of chickens

function chickenFood(){
	var chickenNumber = Number(prompt('How many chickens do you have?'));
	var foodForChicken = chickenNumber * 4;//in ounces
	console.log(foodForChicken)
}

chickenFood();
console.log("in ounces")
