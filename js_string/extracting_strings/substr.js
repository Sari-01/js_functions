// it contains two parameters the first one is start of the word and second denotes the length

let text="sariha,sabarish,mathi,raju";
console.log(text.substr(3,9))
// the second parameter starts according to the first value
console.log(text.substr(-7,2))
console.log(text.substr(-8,-3)) // prints nothing (since length can't be in negative)
console.log(text.substr(-9))