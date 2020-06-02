// Your functions go here!
// cardCount

// card count number is set to 0 (new game)
var count = 0;
// cardCount takes value of card
function cardCount(card) {
   switch (card) {
      // if card is 2-6, increase the count by 1
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;

      // if card is 7-9, the count does not change

      // if card is 10-Ace, decrease the count by 1
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count--;
         break;
   }

   // this variable below is if count < 0, hold
   var holdCard = " Hold";
   // but if count is > 0, bet
   if (count > 0) {
      holdCard = " Bet";
   }

   // returns the count number + whether or not you should hold or bet based on how low or high the count is
   return count + holdCard;
}

// Accessing Object Properties with Variables

// create an object
// creates an object with siblings name and age
var siblings = {
   29: "Justin",
   24: "Taylor",
   20: "Lauren",
};
// call the property
// creates variable of siblingAge and calls the number
var siblingAge = 29;
// access the value of the propery
// if we want to get the siblingName, you take the object of siblings, then access the siblingAge which is the property which returns the value (name of the property)
var siblingName = siblings[siblingAge];
// log the value
// logs the siblingName variable
console.log(siblingName);

// PROFILE LOOKUP

//creates list of arrays with contacts
var contacts = [
   {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
   },
   {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
   },
];

// creates function called lookUpProfile which takes 2 inputs, name and prop
function lookUpProfile(name, prop) {
   // loops through array, starting at the 0 array which is the first array, and ends at the last array. keeps running and returns each array one by one
   for (var i = 0; i < contacts.length; i++) {
      // enter array (contacts), get the index of the array [i], then get the property firstName.
      // if the property firstName is equal to the name you input, returns the property of the index youre in, which is in the contacts array.
      // if the name you input does not equal to any of the names in firstName, it returns "No such property"
      if (contacts[i].firstName === name) {
         return contacts[i][prop] || "No such property";
      }
   }

   // if you enter a name or a property that does not exist in the contact array, returns "No such contact"
   return "No such contact";
}

// call the function
lookUpProfile("Akira", "likes");

// prints the result in console
console.log(lookUpProfile("justin", "likes"));

// calling Math.random and multiplying its result by 20.
// then taking the result of Math.random()*20 and rounding it down to the nearest whole number with Math.floor()
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// Generate random whole number
// creates function randomWholeNum
function randomWholeNum() {
   // generates random number and mulitiplies by 10
   Math.random() * 10;
   //returns the random number and rounds down to the nearest whole number with Math.floow()
   return Math.floor(Math.random() * 10);
}
// logs the function into the console which is a whole number
console.log(randomWholeNum());

// GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE

// creates function called randomRange which takes 2 inputs, a minimum number and a maximum number
function randomRange(minNum, maxNum) {
   // generate a random number between 2 given numbers
   // Math.random() generates a random number 0-.99
   // take generated number and multiply it by the two numbers given (maxNum and minNum + 1)
   // you +1 at the end of maxNum - minNum because if you generate the number it will give you 0, you want to be above 0
   // +min means you add you minimum number in so it doesnt pass 0
   return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}
randomRange(1, 10);

// parseInt function
// creates function called convertToInteger and takes an input of a "string"
function convertToInteger(str) {
   // parseInt takes the string and returns/converts it into an integer
   return parseInt(str);
}

// TERNARY OPERATOR
//basic if function
function findGreater(a, b) {
   if (a > b) {
      return "a is greater";
   } else {
      return "b is greater";
   }
}

// ternary operator/conditional operator
// still creates the function with the inputs needed
function findGreater(a, b) {
   // instead of if statement, its asking if a > b? if it is true, return the first after the ?, if its false, return the second
   return a > b ? "a is greater" : "b is greater";
}

// REMOVE ITEMS USING SPLICE
function spliceRemove(num1, num2) {
   const arr = [2, 4, 5, 1, 7, 5, 2, 1];
   // .splice(num1, num2) takes 2 inputs.
   // num1 = index item to start on
   // num2 = number of items to be deleted
   arr.splice(num1, num2);
   return arr;
}

// ADD ITEMS USING SPLICE
function spliceAdd(color1, color2) {
   const arr = [
      "DarkGoldenRod",
      "WhiteSmoke",
      "LavenderBlush",
      "PaleTurquoise",
      "FireBrick",
   ];
   arr.splice(0, 2, color1, color2);

   return arr;
}

// CHECK FOR PRESENCE OF AN ELEMENT WITH indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
var frankOceanSongs = [
   "futura free",
   "solo",
   "pilot jones",
   "chanel",
   "novacane",
];

function quickCheck(elem) {
   if (frankOceanSongs.indexOf(elem) < 0) {
      return "this is not on the song list";
   } else {
      return "this is on the song list";
   }
}

// ANOTHER INDEXOF() EXAMPLE -----
function indexOfTest(arr, elem) {
   // if the given elements indexOf the given array is greater than or equal to 0, it means the given elem is true because if it was false, the indexOf the elem in the array would be -1 (-1 !> 0)
   if (arr.indexOf(elem) >= 0) {
      return true;
   } else {
      return false;
   }
}
console.log(indexOfTest(["squash", "onions", "shallots"], "mushrooms"));
// --------------------------------

// if (arr.indexOf(elem) >= 0) {
//    return true;
// }
// return false;

// console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// ITERATE THROUGH AN ARRAY USING FOR LOOPS
// creates a function that takes an array and an element (see console.log)
function filteredArray(arr, elem) {
   // creates new variable with empty array
   let newArr = [];
   // loops through the given array and increments by 1
   for (let i = 0; i < arr.length; i++) {
      // runs through the array and goes through each index
      // passes the elem through and checks if it is in the index.
      // if the given elem is in the index of the array, loop will go to the next index
      // if the given elem is not in the index of the array, it will push that array to the new empty array
      // indexOf() -1 = not inside of array
      if (arr[i].indexOf(elem) === -1) {
         newArr.push(arr[i]);
      }
   }
   // returns a new array that contains the array with the elem passed
   return newArr;
}

// displays the array and element to be passed into the function
// this current array will display [] empty.
// because the elem (3) is inside each array
console.log(
   filteredArray(
      [
         [3, 2, 3],
         [1, 6, 3],
         [3, 13, 26],
         [19, 3, 9],
      ],
      3
   )
);

// TYPEOF
// creates function that takes an input
function checkType(input1) {
   // returns the typeof for whatever you input
   // 7 = number
   // '7' = string
   // true = bool
   return typeof input1;
}
