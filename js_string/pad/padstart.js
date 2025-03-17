// adds the needed things to its starting
// syntax: padStart(targetLength), padStart(targetLength, padString)

let text='5';
console.log(text.toString())
console.log(text.padStart('2',2))
console.log(text.padStart(2,'0'))

const t='1234567890987654321';
const s=t.slice(-4);
console.log(s.padStart(t.length,'*'))