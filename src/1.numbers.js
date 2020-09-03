//add: Should be able to add numbers
function add (num1, num2) {
  return num1 + num2;
}

//subtract: Should be able to subtract numbers
function subtract (num1, num2) {
  if (num1 > num2){
    return num1 - num2;
  } else{
    return num2 - num1;
  }
}

//multiply: Should be able to multiply with precision
function multiply(num1, num2) {
  return num1 * num2;
}

//parseInt: should use parseInt correctly to convert strings to integer numbers
function parseInt (str) {
  return Number.parseInt(str, 10);
}

//addAndReturn2DecimalPlaces: should return a number value, rounded to 2 decimal places
// Example: 1.23453 + 5.37873 should return 6.61 and the return type should be a number
function addAndReturn2DecimalPlaces(num1, num2) {
  return result = Number((num1+num2).toFixed(2));;
}

module.exports  = {
  add,
  subtract,
  multiply,
  parseInt,
  addAndReturn2DecimalPlaces
};