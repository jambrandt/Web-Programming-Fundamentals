// JavaScript
// Jessica Brandt April 18th, 2013 Assignment: Expressions
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";


var restaurantType = ["Fast Food","Family Dining","Bistro","Formal Restaurant"];

restaurantType[0] = 7;    //rought average of price per meal
restaurantType[1] = 10;   //rought average of price per meal
restaurantType[2] = 15;   //rought average of price per meal
restaurantType[3] = 25;   //rought average of price per meal

var howManyPeople = 4; //size of family

var oneVisitCost = restaurantType[1] * howManyPeople;

var frequency = 3;  //number of times per month 

var total = oneVisitCost * frequency;

console.log(total);

