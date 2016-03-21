//Gallons to liters gal/0.26417
//tablespoon to ml = tablespoon = 14.787ml
//liters to oz	= 1lt = 33.814oz
var measure = function(){
var num1= parseInt(prompt("Enter number of gallons: "));
var num2= parseInt(prompt("Enter number of tablespoons: "));
var num3= parseInt(prompt("Enter number of liters: "));
var gallon= num1 / 0.26417;
var tablespoon = num2 * 14.787;
var liters = num3 * 33.814;
alert("Your conversions are " + gallon + "liters, " + tablespoon + "ml, and " + liters + "oz" );
};

measure ();
