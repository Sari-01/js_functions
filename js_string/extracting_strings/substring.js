// prints the value as slice
// if the value mentioned is less than 0 it will not take

let text="sariha,sabarish,mathi,raju";
console.log(text.substring(3))
console.log(text.substring(3,5));

// will not consider the negative 
console.log(text.substring(3,-2)) 
console.log(text.substring(-2,3))
console.log(text.substring(-2,-1)) // doesn't work