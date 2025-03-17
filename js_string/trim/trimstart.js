//removes the white spaces at the start of the string

let text="     sariha      ";
let text2=text.trimStart();
let text3=text.trimEnd();
let text4=text.trimLeft() // alias method for trimstart
let text5=text.trimRight(); //alias method for trimend

console.log(text.length)
console.log(text2.length)
console.log(text3.length)
console.log(text4.length)
console.log(text5.length)