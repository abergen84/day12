// use EACH the iteration methods discussed in class today (for loop, Array.forEach, custom forEach) for EACH of the following problems
// 1. calculate the sum of numbers (can be any number of arguments)
// 2. calculate the average of numbers
// 3. find the largest number of the inputs
// 4. find the longest string of the inputs
// 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, Sept 1st 2012, March 13th 2010), in that order, sort them chronologically. Use http://devdocs.io/javascript/global_objects/date for reference on creating Date() objects with a specific date.





//Problem 1

//Basic
//function sum(a, b) {
//    "use strict";
//
//   return a + b;
//}

//For loop
function sumForLoop() {
    "use strict";

    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;

    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

//ForEach 
// function sumForEach() {
//     "use strict";

//     var args = Array.prototype.slice.apply(arguments, []),
//         sum = 0;

//     args.forEach(function(num) {
//         sum += num;
//     });
//     return sum;

// }

//Custom ForEach
// function forEach(array, callback) {
//     "use strict";
//     for (var i = 0; i < array.length; i++) {
//         callback(array[i], i);
//     }
// }

// function sumForEachCustom() {
//     "use strict";

//     var args = Array.prototype.slice.apply(arguments, []),
//         sum = 0;

//     forEach(args, function() {
//         sum += arguments[0];
//     })
//     return sum;
// }






// Problem 2

// for loop
function averageForLoop() {
    "use strict";

    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;

    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return (sum / args.length);
}

//ForEach loop
// function averageForEach() {
//     "use strict";

//     var args = Array.prototype.slice.apply(arguments, []),
//         sum = 0;

//     args.forEach(function(num) {
//         sum += num;
//     });
//     return (sum / args.length);
// }

// //Custom ForEach
// function averageForEachCustom() {
//     "use strict";

//     var args = Array.prototype.slice.apply(arguments, []),
//         sum = 0;

//     forEach(args, function() {
//         sum += arguments[0];
//     });
//     return (sum / args.length);
// }






//Problem 3

// For Loop
function largestForLoop() {
    "use strict";

    var args = Array.prototype.slice.apply(arguments, []),
        largestNumber = 0;

    for (var i = 0; i < args.length; i++) {
        // if args[i] is more than largestNumber
        // set largestNumber to args[i]        
        if (args[i] > largestNumber) {

            largestNumber = args[i];
        }
    }
    return largestNumber;
}



//Problem 4
//

//for Loop spits out number of longest string
function longestForLoop() {
    "use strict";

    var args = Array.prototype.slice.apply(arguments, []),
        largestString = 0;

    for (var i = 0; i < args.length; i++) {
        if (args[i].length > largestString) {
            
            largestString = args[i].length
        }
    }
    return largestString;
}



//for loop spits out the actual longest word
function longestForLoopWord() {
    "use strict";

    var args = Array.prototype.slice.apply(arguments, []),
        largestString = "";

    for (var i = 0; i < args.length; i++) {
        if (args[i].length > largestString.length) {
            
            largestString = args[i]
        }
    }
    return largestString;
}






//Problem 5

// function forEach(array, callback){
//     "use strict";
//     for(var i = 0; i < array.length; i++){
//         callback(array[i], i);
//     }
// }

// //The Date Sorting Function
// //
// function sortDateForLoop(dates){
// 	var newArray = [],
// 		earliestDate = dates[0];

// 	for(var i = 0; i < dates.length; i++){
// 		//find the lowest date and put it at the front of newArray
// 		for(var j = 0; j < dates.length; j++){

// 			if(+dates[j] < +earliestDate){
// 				earliestDate = dates[j]
// 			}

// //			earliestDate = dates[j].getTime() < earliestDate.getTime() ? dates[j] : 
// //				earliestDate;
// 		}
// 	}
// }

// function sortDateForEach(){}

// function sortDateCustomForEach(){}

// var dates = [
// 	new Date(2014, 9, 4)
// 	new Date(2014, 9, 3)
// 	new Date(2014, 8, 30)
// 	new Date(2012, 9, 1)
// 	new Date(2010, 2, 13)
// 	];

// console.log(dates);
