// it contains two arguments the first will be replaced by the word that is mentioned in the second parameter

let text="Hi this is Sariha";
console.log(text.replace('Sariha','VVDN'));

// this will replace only the first instance
let text2 ="Hi this is Sariha and she is from Tirunelveli";
console.log(text2.replace('is','HEY'))

// to replace with all the words of first parameter use regular expression
console.log(text2.replace(/is/g,'HEY'))

// case sensitive
console.log(text2.replace('sariha','KKK')) // will not reflect

// to work along with case sensitive use regular expression
console.log(text2.replace(/sariha/i,'KKK'))

console.log(text2.replace('Sariha',0909)) // changes will happen