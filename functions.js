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
