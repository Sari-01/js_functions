// gives the output as a whole
 const arr=[22,33,11,44];
 console.log("DIFFERENCES.......")
 
 arr.reduce((a,b)=>
 {
     console.log("1111",a,b)
     console.log(a+b)
 })
console.log("__________________")
 console.log(arr.reduce((a,b)=>
 {
     a+b;
 }))
console.log("___________________")
const a=arr.reduce((a,b)=>
{
    return a+b;
})
console.log(a)

console.log("REDUCE RIGHT")
const b=arr.reduceRight((a,b)=>
{
    console.log(a,b)
    return a+b;
})
console.log(b)

// {
//      [{
//         "msgFrom": "13223821242",
//         "msgBody": "Hi there"
//     }, {
//         "msgFrom": "Bill",
//         "msgBody": "Hello!"
//     }]
//     console.log(messages);
//     let j=JSON.parse(messages);
//     console.log(j)
// }
// console.log(messages)
// console.log("++++++++")

// taking the data from the json array
// extrassss

var msg=[{
    "msgFrom": "13223821242",
    "msgBody": "Hi there"
}, {
    "msgFrom": "Bill",
    "msgBody": "Hello!"
}]
console.log(msg[0].msgBody)
console.log(msg[1].msgBody)

console.log("____")

for (let i=0;i<msg.length;i++)
console.log(JSON.stringify(msg[i].msgBody))

console.log("____");

for (let i=0;i<msg.length;i++)
console.log(msg[i].msgBody)