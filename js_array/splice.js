// removes and adds the elements at the specified elements
// changes the original array

const arr=['a','b','c','d','e','f','g'];
(arr.splice(2,0,'sss','ppp'))
console.log(arr)
arr.splice(2,2)
console.log(arr)
arr.splice(2,1,'ppp','sdsd')
console.log(arr)