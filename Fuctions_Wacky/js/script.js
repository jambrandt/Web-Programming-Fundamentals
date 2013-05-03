// JavaScript
// Jessica Brandt 
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var shoes = function(numberOfShoes){
    var whatToDo;

		whatToDo = (numberOfShoes <=10) ? "Go buy more shoes!" : "Buy shoes but don't tell your significant other.";
		console.log(whatToDo) ;

}
shoes(Number(prompt("How many pairs of shoes do you own?")))
