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

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected)
  if (isEqual) {
    console.log(`✅ ✅ ✅   Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};


const without = function(words, itemsToRemove) {
  const outPut = []
  for(let i=0; i < words.length; i++){
      const word = words[i]
      if(itemsToRemove.includes(word)=== false){
          outPut.push(word)
      }
  }
  return outPut 
}