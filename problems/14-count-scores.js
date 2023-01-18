/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/
// iterate thru array, deconstruct into variables, add to new object, see if there already and if there then add score

function countScores(people) {
  let totals = {};
  // iterate through array of objects
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    // deconstruct each person object into variables
    let { name, score } = person;
    // check if name is already in the new object, if it's not add it
    if (totals[name] === undefined) {
      totals[name] = score;
      // if it's already there, add the score to the score that's there already
    } else {
      totals[name] += score;
    }
  }
  return totals;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
