//find() returns only the first element that satisfies the condition
// find() doesn't alter the original array
// doesn't work for empty elements

const arr=[1,2,100,4,32,75];
console.log(arr.find(i=>i>40))

const arr2=[1,0,,9,2];
console.log(arr2.find(i=>i>5))
console.log(arr2.find(i=>i>40))

// to know the index of the found value we use findIndex()
// for undefines it shows -1

console.log(arr.findIndex(i=>i>40))
console.log(arr2.findIndex(i=>i>5))
console.log(arr2.findIndex(i=>i>40))



