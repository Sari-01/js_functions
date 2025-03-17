// using Array.from() will split the string into individual by using comma.

console.log(Array.from('sariha'))

// instead of getting the values individually if we need in array format
// we use Array.from()

const arr2=[22,44,,12,43];
console.log(Array.from(arr2,i=>i+i));
