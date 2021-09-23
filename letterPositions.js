const letterPositions = function(sentence) {
  const results = {};
  let string = sentence.split(' ').join('');
  for(let i = 0; i < string.length; i++) {
    const letter = string[i];

    if(results[letter]){
      results[letter].push(i);
    } else {
      results[letter] = [i]
    }
  }
  return results;
};

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

assertArraysEqual(letterPositions('hello').l, [2, 3]);
console.log(letterPositions('hello'))