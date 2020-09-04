//reverseString: you should be able to reverse a string
// Example: "abc" => "cba"
function reverseString(str) {
  /**
   * can be achieved by combining: 
   *    1. string.prototype.split
   *   let strArr = str.split(""); //split string
   *    2. array.prototype.reverse
   *   let rev = strArr.resers(); // reverse 
   *    3. array.prototype.join
   *   let reverseString = rev.join(""); //joining as an sentense

   * Can even be done on one line
   */
  return str.split("").reverse().join("");//one line
}

//capitalize: should return the input in all-caps
// Example: "this is a string" => "THIS IS A STRING"
function capitalize(str) {
  return str.toUpperCase();
}

// splitString: should divide a string into substrings and return an array
// Example: "Jane,Doe,21"  =>  [ "Jane", "Doe", "21" ]
function splitString(str, splitAt = `,`) {
  return str.split(splitAt);
}
module.exports = {
  reverseString,
  capitalize,
  splitString
};