// refer js_array map

let myfun=((item)=>
{
    console.log( [item.firstname,item.lastname].join(" "));
})

const person=[{
    firstname:"sariha",lastname:"raju",
    firstname:"sabarish",lastname:"raju",
}];

// (person.map(myfun));

(person.map(myfun));
