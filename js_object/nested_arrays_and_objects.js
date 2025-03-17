let x="";
const person={
    name:"sariha",
    place:"tvl",
    details:[
        {class:10,note:["sec:c","schl:matric"]},
        {class:12,note:["dept:cse","schl:matric"]},
    ]
}
for(let i in person.details){
x+=("CLASS:"+person.details[i].class+" ");
for(let j in person.details[i].note)
x+=person.details[i].note[j]+" "
}
console.log(x)