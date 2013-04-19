// JavaScript
// Jessica Brandt 
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var activityLevel = ['Low','Moderate','High'];  //activity level on scale of 1 to 10

activityLevel[0] = 1;
activityLevel[1] = 5;
activityLevel[2] = 10;// the level that my son is at

var age = 6; //his age

var height = 4; //in feet

var foodInPounds = age*height+activityLevel[2];  //This will hopefully explain why I am going through so much food and i don't even have a teenager yet

console.log(foodInPounds); //per day (rough estimate, sounds about right on some days)
