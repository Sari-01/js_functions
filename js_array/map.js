// creates the new array from calling a function for every array element
// maps each element in an array
// doesn't alter the original array

const arr=[9,25,49,100];
console.log(arr.map(Math.sqrt))
console.log(arr);

console.log("DIFFERENCE OF USING.....")
const arr2=[2,4,5,7];
let myfun=(i=>{
    console.log("comes")
    console.log((i*10))
})
const a=arr2.filter(i=>i%2==0).map(myfun)
console.log("---------------")
const b=arr2.map(myfun)
console.log(arr2)

