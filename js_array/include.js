// includes () returns boolean if the value exists
const arr=['apple','banana','orange','kiwi'];
console.log(arr.includes('banana'));
// includes() case sensitive
console.log(arr.includes('Banana'))
// if the index value is mentioned then it search at its specified location
console.log(arr.includes('banana',1))
console.log(arr.includes('banana',2))
