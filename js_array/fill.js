// fill() used to replace the value which is specified
// alters the existing array
// doesn't work if the start and end values are same
// arr.length-1 end the work


const arr=[1,2,3]
console.log(arr.fill(0))
console.log(arr)          // it doesn't alter the memory allocation value. so the values doesn't change
console.log(arr.fill("array",0,2))
console.log(arr)
