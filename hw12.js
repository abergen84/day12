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

//ForEach Loop

function sumForEach() {
    "use strict";

    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;

    args.forEach(function(num) {
        sum += num;
    });
    return sum;

}

//Custom ForEach

function forEach(array, callback) {
    "use strict";
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

function sumForEachCustom() {
    "use strict";

    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;

    forEach(args, function() {
        sum += arguments[0]; //why is this arguments[0] and not args[0]?
    })
    return sum;
}






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
function averageForEach() {
    "use strict";

    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;

    args.forEach(function(num) {
        sum += num;
    });
    return (sum / args.length);
}

//Custom ForEach
function averageForEachCustom() {
    "use strict";

    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;

    forEach(args, function() {
        sum += arguments[0];
    });
    return (sum / args.length);
}






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

//ForEach Loop
function largestForEachLoop() {
    "use strict";

    var args = Array.prototype.slice.apply(arguments, []),
        largestNumber = 0;

    args.forEach(function(num) {
        if (num > largestNumber) {

            largestNumber = num;
        }
    });
    return largestNumber;
}

//ForEach Custom Loop

// function ForEach(array, callback){
// 	for(var i = 0; i < array.length; i++){
// 		callback(array[i], i)
// 	}
// }

// function largestForEachCustom


//Problem 4


//for Loop (spits out number of longest string)

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



//for loop (spits out the actual longest word)

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

//ForEachLoop (spits out length of longest string)

function longestForEachLoop() {
    "use strict";

    var args = Array.prototype.slice.apply(arguments, []),
        largestString = 0;

    args.forEach(function(word) {
        if (word.length > largestString) {

            largestString = word.length;
            //if i were to say largestString.length = word.length; I get 0 returned.
            //can you not put .length behind a 0 to return 0?
        }
    });
    return largestString;
}




//Problem 5

// function forEach(array, callback){
//     "use strict";
//     for(var i = 0; i < array.length; i++){
//         callback(array[i], i);
//     }
// }

//The Date Sorting Function









//Part II OF HOMEWORK
//
//
//
//
//
//
//

//var numbers = [1,12,4,18,9,7,11,3,101,5,6];
//var strings = ['this','is','a','collection','of','words'];

var customers = [{
    firstname: 'Joe',
    lastname: 'Blogs'
}, {
    firstname: 'John',
    lastname: 'Smith'
}, {
    firstname: 'Dave',
    lastname: 'Jones'
}, {
    firstname: 'Jack',
    lastname: 'White'
}, {
	firstname: 'Joel',
	lastname: 'Crisp'
}, {
	firstname: 'Kip',
	lastname: 'Slick'
}];

console.log(customers);


        var projections = customers

    		.filter(function(c) {

                return c.firstname.charAt(0) === "J";
                    
                })

    		.map(function(c)	{

    			return { first: c.firstname, last: c.lastname };
    		})
            //new array was created
    		.sort(sortByName)

    	function sortByName(c1, c2){
    		"use strict";
    		return c1.last > c2.last ? 1 : -1
    	};
           
console.log(projections); 

//test
