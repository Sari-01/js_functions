const person={
    fname:"sariha",
    lname:"raju",
}
let t;
for(let x in person)          // printing the properties of an object
{
    t=person[x]+"";
    console.log(t)
}
console.log("____________")
// let t1="";
for(let x in person)          // printing the properties of an object
{
    let t1=person[x]+"";
    console.log(t1)
}
console.log("_____________")
let t3;
for(let x in person)          // printing the properties of an object
{                           
    t3+=person[x]+"";        
    console.log(t3)
}
console.log("++++++",t3)
console.log(">>>>>>>>>>>>")
let t4="";
for(let x in person)          // printing the properties of an object
{
    t4+=person[x]+"";
    // console.log(t4)
}
console.log(t4)
