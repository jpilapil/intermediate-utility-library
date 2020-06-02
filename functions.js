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

// PROFILE LOOKUP

// creates function called lookUpProfile which takes 2 inputs, name and prop
function lookUpProfile(name, prop) {
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
function quickCheck(elem) {
   var frankOceanSongs = [
      "futura free",
      "solo",
      "pilot jones",
      "chanel",
      "novacane",
   ];

   if (frankOceanSongs.indexOf(elem) < 0) {
      // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
      return "this is not on the song list";
   } else {
      return "this is on the song list";
   }
}

// TYPEOF
// creates function that takes an input
function checkType(input1) {
   // returns the typeof for whatever you input
   // 7 = number
   // '7' = string
   // true = bool
   return typeof input1;
}
