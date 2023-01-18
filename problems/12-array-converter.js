/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/
// convert array value to an object with its count
// iterate through array, for each one add to object, check if already present and if it is then add to count of each one

function arrayConverter(array) {
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    let el = array[i];

    if (obj[el] === undefined) {
      obj[el] = 1;
    } else {
      obj[el] += 1;
    }
  };
  return obj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
