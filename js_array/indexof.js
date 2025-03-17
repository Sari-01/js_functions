// indexof() identifies the index number of the specified value
const arr=['sariha','sabarish','mathi','raju'];
console.log(arr.indexOf('mathi'))

// on specifying the index value it prints the value the next value from the first one
const arr2=['a','b','c','c','c','d','e','a'];
console.log(arr2.indexOf('a',2))

// negative value will take from right

console.log(arr2.indexOf('c',-4))
// returns -1 if the value is not found
console.log(Array.isArray(arr))