const words = ["these", "are", "not", "the", "same"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
     results.push(callback(item));
  }
  return results;
}

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected)
  if (isEqual) {
    console.log(`✅ ✅ ✅   Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length){
      return false
  }
  for(let i=0; i < array1.length; i++){
    if  (array1[i] !== array2[i]){
        return false
    } 
  }
  return true
}


const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, words));
console.log(assertArraysEqual(results1, []));
console.log(assertArraysEqual(results1, [1, 3 , 5]))