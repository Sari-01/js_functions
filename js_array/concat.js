//concat() joins the array and does not alter its existing arrays 

//flat() removes the deepend arrays and it doesn't alters the initialised array  ---> default value is 1
// flat () also removes the empty slots in the array
const arr1=["sariha","sabarish"];
const arr2=["mathi","raju"];
console.log(arr1.concat(arr2))

const arr3=["family"];
console.log(arr1.concat(arr2,arr3));
console.log(arr1.concat(arr3,arr2));

const arr4=[1,2,3];
console.log(arr1.concat(arr4))

const arr5=[[1,2],4,5];
const arr6=[[3,6,[0,9]]];
const arr7 = [1, 2, [3, 4]];
const arr8 = [[5, 6], 7, 8];
console.log(arr7.concat(arr8))
console.log("ssssss",arr7)
console.log(arr7[2][0])
console.log(arr5.flat(1))
console.log(arr6.flat(1))
console.log(arr6.flat(2))
console.log(arr6)
console.log(arr6.flat())

// extrasssss
// concatination of numbers

const a=2;
const b=3;
let s=(""+a+b)
console.log(typeof(s)+" "+s)
console.log(`${a}${b}`)
console.log(`${a}+${b}`)
let num = Number(s)
console.log(typeof(num))
console.log(a+b,num)