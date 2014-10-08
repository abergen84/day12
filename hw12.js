// use EACH the iteration methods discussed in class today (for loop, Array.forEach, custom forEach) for EACH of the following problems
// 1. calculate the sum of numbers (can be any number of arguments)
// 2. calculate the average of numbers
// 3. find the largest number of the inputs
// 4. find the longest string of the inputs
// 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, Sept 1st 2012, March 13th 2010), in that order, sort them chronologically. Use http://devdocs.io/javascript/global_objects/date for reference on creating Date() objects with a specific date.

//Problem 1

//Basic
function sum(a, b){
	"use strict";
	
	return a + b;
}

//For loop

function sumForLoop(){
	"use strict";
	
	var args = Array.prototype.slice.apply(arguments, []), 
	sum = 0;
	
	for(var i = 0; i < args.length; i++){
		sum += args[i];
	}
	return sum;
}

//ForEach 

function sumForEach(){
	"use strict";

	var args = Array.prototype.slice.apply(arguments, []),
	sum = 0;

	args.forEach(function(num){ sum += num; });
	return sum;

}

//Custom ForEach

function sumForEachCustom(){
	"use strict";
	
	var args = Array.prototype.slice.apply(arguments, []),
	sum = 0;

	forEach(args, function(){ sum += arguments[0]; });
	return sum;
}

// Problem 2

// for loop

function averageForLoop(){
	"use strict";

	var args = Array.prototype.slice.apply(arguments, []),
	sum = 0;

	
}