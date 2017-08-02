// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if(n < 0){
  	return null;
  }
  var count = arguments[1] || 1;
  if(n === 0){
    return count;
  }
  result = n * count;
  return factorial(n - 1, result);
  
};
//console.log(factorial(5));

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  var count = arguments[1] || 0;
  var i = arguments[2] || 0;
  if(i === array.length){
    return count;
  }
  result = array[i] + count;
  return sum(array, result, ++i);
};
//console.log(sum([1, 2, 3, 4, 5, 6]));

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var i = arguments[1] || 0;
  var sum = arguments[2] || 0;
  if(i === array.length){
    return sum;
  }
  
  if(Array.isArray(array[i])){
    sum += arraySum(array[i]);
  } else {
    sum += array[i];
  }
  return arraySum(array, ++i, sum);
  
};

// 4. Check if a number is even.
var isEven = function(n) {
  if(n < 0){
  	n = -n;
  }
  if(n === 1){
    return false;
  } else if (n === 2){
    return true;
  } else {
  	n -= 2;
    return isEven(n);
  }
};
//console.log(isEven(8));

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  var original = arguments[3] || n;
  if(n <= -1){
  	n = -n;
  }
  if(n === 0){
    return n;
  }
  var sum = arguments[1] || 0;
  var i = arguments[2] || 0;
  if(i === n){
  	if(original < 0){
  		return 0 - sum;
  	}
  	return sum;
  }
  sum += i;
  return sumBelow(n, sum, ++i, original);
};
//console.log(sumBelow(10));

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  var array = arguments[2] || [];
    if(x === y){
	  	return [];
	}
  if(x > y){
	  if(x === y + 1){
	    return array;
	  }
	  array.push(x - 1);
	  x -= 1;
	  return range(x, y, array);


  } else {
	  
	  if(x === y - 1){
	    return array;
	  }
	  array.push(x + 1);
	  x += 1;
	  return range(x, y, array);
  }
};
//console.log(range(3, 15));

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  var count = arguments[2] || 1;
  var result = arguments[3] || base;
  var n = arguments[4] || exp;

  if(exp < 0){
  	return exponent(base, exp+1)/base;
  } else if (exp === 0) {
  	return 1;
  } else {
  	base *= exponent(base, exp - 1);
  	return base;
  }

};
//console.log(exponent(4, 4));

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n === 1){
    return true;
  } else if (n === 2){
    return true;
  } else if (n % 5 === 0) {
    return false;
  } else {
     return powerOfTwo(n / 2);
  }
   
};
//console.log(powerOfTwo(8));

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  var array = arguments[1] || [];
  var i = arguments[2] || 0;
  if(i === string.length){
    return array.join('');
  }
  array.unshift(string.charAt(i));
  return reverse(string, array, ++i);
};
//console.log(reverse('reverse me'));

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var array = arguments[1] || [];
  var i = arguments[2] || 0;
  var string = string.replace(" ", "").toLowerCase();

  if(i === string.length && array.join('') === string){
    return true;
  } else if (i === string.length && array.join('') !== string){
    return false;
  }

  array.unshift(string.charAt(i));
  
  return palindrome(string, array, ++i);
};
//console.log(palindrome('Race car'));

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	var positive = arguments[2] || 'true';
	if(x < 0){
		x = -x;
		positive = arguments[2] || 'false';
	}
	if(y < 0){
		y = -y;
		
	}
	if(y === 0){
		return NaN;
	}
	if(x < y){
		if(positive === 'false'){
			return -x;
		}
		return x; 
	}
	return modulo(x-y, y, positive);
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  var result = arguments[2] || x;
  var negative = arguments[3] || 'false';
  if(x < 0 && y < 0){
  	negative = arguments[3] || 'both';
  	x = -x;
  	y = -y;
  } else if(x < 0){
  	x = -x;
  	negative = arguments[3] || 'true';
  } else if (y < 0){
  	y = -y;
  	negative = arguments[3] || 'true';
  }
  if(negative === 'true'){
  	if(y === 0){
  		return -result;
  	}
  } else if (negative === 'false'){
  	if(y === 1){
  		return result;
  	}
  } else if (negative === 'both'){
  	if(y === 0){
  		return result;
  	}
  }
  
  result += x;
  return multiply(x, --y, result, negative);
};
//console.log(multiply(5, 3));

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  var result = arguments[2] || y;
  var negative = arguments[3] || 'false';
  var count = arguments[4] || 1;
  
  if(x === 0 && y === 0){
  	return NaN;
  } else if (x === 0){
  	return 0;
  }
  if(x < 0 && y < 0){
  	negative = arguments[3] || 'both';
  	x = -x;
  	y = -y;
  } else if(x < 0){
  	x = -x;
  	negative = arguments[3] || 'true';
  } else if (y < 0){
  	y = -y;
  	negative = arguments[3] || 'true';
  }
  if(y > x){
  	return 0;
  }
  if((result + y) > x){
  	return count;
  }
  result += y;
  count++;
  return divide(x, y, result, negative, count);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if(x < 0 || y < 0){
		return null;
	}
  var guess = arguments[2] || Math.min(x, y)
  if(x % guess === 0 && y % guess === 0){
    return guess;
  }
  return gcd(x, y, --guess);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  var trueFalse = arguments[2] || 'true';
  var i = arguments[3] || 0;
  if(i === Math.max(str1.length, str2.length)){
  	if(trueFalse === 'false'){
  		return false;
  	} else {
  		return true;
  	}
  }
  if(str1.charAt(i) !== str2.charAt(i)){
  	trueFalse = 'false';
  };

  return compareStr(str1, str2, trueFalse, ++i);
};
//console.log(compareStr('race', 'race'));

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  var array = arguments[1] || [];
  var i = arguments[2] || 0;
  if(array.length === str.length){
    return array;
  }
  array[i] = str.charAt(i);
  return createArray(str, array, ++i);
};
//console.log(createArray('potato'));

// 17. Reverse the order of an array
var reverseArr = function (array) {
  var newArr = arguments[1] || [];
  var i = arguments[2] || 0;
  if(i === array.length){
    return newArr;
  }
  newArr.unshift(array[i]);
  return reverseArr(array, newArr, ++i);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var array = arguments[2] || [];
  var counter = arguments[3] || 0;
  if(counter === length){
    return array;
  }
  array.push(value);
  return buildList(value, length, array, ++counter);
};
//console.log(buildList(2, 7));

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = arguments[2] || 0;
  var i = arguments[3] || 0;
  if(i === array.length){
    return count;
  }
  if(array[i] === value){
    count++;
  }
  return countOccurrence(array, value, count, ++i);
};
// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var newArray = arguments[2] || [];
  var i = arguments[3] || 0;
  if(i === array.length){
    return newArray;
  }
  newArray.push(callback(array[i]));
  return rMap(array, callback, newArray, ++i);
};
// console.log(rMap([1, 2, 3], function(x){
//   return x * 2;
// }));

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
	var keyCount = 0;

	for(var mykey in obj){
		if(mykey === key){
			keyCount++;
		}
		
		if(obj[mykey] instanceof Object){
			keyCount += countKeysInObj(obj[mykey], key)
		}
	}
	return keyCount;

};


// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var valueCount = 0;
	for(var key in obj){
		if(obj[key] instanceof Object){
			valueCount += countValuesInObj(obj[key], value);
		}
		if(obj[key] === value){
			valueCount++;
		}
	}
	return valueCount;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
	
	for(var mykey in obj){
		
		if(mykey === key){
			var newValue = obj[key];
			obj[newKey] = newValue;
			delete obj[key];
			
		}
		if(obj[mykey] instanceof Object){
			replaceKeysInObj(obj[mykey], key, newKey);
		}
	}
	return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {

	if(n === 0 || n < 0){
		return null;
	}
  var array = arguments[1] || [0, 1];
  var count = arguments[2] || 1;
  var i = arguments[3] || 2;
  if(n === array.length - 1){
    return array;
  }
  
  array[i]= array[i - 1] + array[i - 2];
  return fibonacci(n, array, array[i], ++i);
};
//console.log(fibonacci(5));

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n < 0){
  	return null;
  }
  if(n === 0){
  	return 0;
  }

  if(n === 1){
    return 1;
  } else {
    var arr = arguments[1] || [0, 1];
    var i = arguments[2] || 2;
    if(n === i - 1){
      return arr[arr.length - 1];
    }
    arr.push(arr[i - 2] + arr[i - 1]);
    return nthFibo(n, arr, ++i);
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  var arr = arguments[1] || [];
  var i = arguments[2] || 0;
  if(i === input.length){
    return arr;
  }
  arr.push(input[i].toUpperCase());
  return capitalizeWords(input, arr, ++i);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  var newArr = arguments[1] || [];
  var i = arguments[2] || 0;
  if(i === array.length){
    return newArr;
  }
  newArr.push(array[i].charAt(0).toUpperCase() + array[i].substr(1));
  return capitalizeFirst(array, newArr, ++i);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var sum = 0;
	for(var key in obj){
		if(obj[key] instanceof Object){
			sum += nestedEvenSum(obj[key]);
		} else if(obj[key] % 2 === 0){
			sum += obj[key];
		}
		
	}
	return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
	var array = [];
	for(var i = 0; i < arrays.length; i++){
		if(Array.isArray(arrays[i])){
			var nested = flatten(arrays[i]);
			for(var j = 0; j < nested.length; j++){
				array.push(nested[j]);
			}
		} else {
			array.push(arrays[i]);
		}
	}
	return array;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  var object = arguments[1] || {};
  var i = arguments[2] || 0;
  if(i === str.length){
    return object;
  }
  var letter = str.charAt(i);
  if(object[letter] === undefined){
    object[letter] = 1;
  } else {
    object[letter]++;
  }
  return letterTally(str, object, ++i);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  var array = arguments[1] || [];
  var i = arguments[2] || 0;
  if(i === list.length){
    return array;
  }
  if(i === 0 || list[i] !== array[array.length - 1]){
    array.push(list[i])
  }
  return compress(list, array, ++i);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	var i = arguments[2] || 0;
	var newArray = arguments[3] || [];
	if(i === array.length){
		return newArray; 
	}
	array[i].push(aug);
	newArray[i] = array[i];
	return augmentElements(array, aug, ++i, newArray);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var result = arguments[1] || [];
  var i = arguments[2] || 0;
  if(i === array.length){
    return result;
  }
  if(array[i] !== 0){
    result.push(array[i]);
  } else if (array[i] === 0 && result[result.length - 1] !== 0){
    result.push(array[i]);
  }
  return minimizeZeroes(array, result, ++i);
  
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = arguments[1] || [];
  var i = arguments[2] || 0;
  if(i === array.length){
    return result;
  }
  var x = array[i];
  if(x < 0){
    x = -x;
  }
  if(i === 0 || i % 2 === 0){
    result.push(x);
  }
  if(i === 1 || i % 2){
    x = -x;
    result.push(x);
  }
  return alternateSign(array, result, ++i);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	var stringArray = arguments[1] || [];
	var i = arguments[2] || 0;
	var numbersObject = {
		'0': 'zero',
		'1': 'one',
		'2': 'two',
		'3': 'three',
		'4': 'four',
		'5': 'five',
		'6': 'six',
		'7': 'seven',
		'8': 'eight',
		'9': 'nine'
	};

	if(i === str.length){
		return stringArray.join("");
	}

	if(numbersObject.hasOwnProperty(str.charAt(i))){
		var key = str.charAt(i);
		stringArray.push(numbersObject[key]);
	} else {
		stringArray.push(str.charAt(i));
	}
	return numToText(str, stringArray, ++i);

};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
