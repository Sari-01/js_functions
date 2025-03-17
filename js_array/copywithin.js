// syntax: array.copyWithin(target, start, end) 
//target: where the elements to be copied , start: shows where the elements starts copying (default is 0), end: shows where the element stops copying (default is arr.length-1)
// both start and end are optional
//overwrites the existing values

let arr=['sariha','sabarish','oiuhgf','mathi','raju'];
// console.log(arr.copyWithin(0,2))
console.log(arr);
console.log(arr.copyWithin(2,0,-3))
console.log(arr.copyWithin(1,3,5))