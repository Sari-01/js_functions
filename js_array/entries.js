// entries gives the values along with the index value in the array concepts

let arr=['apple','orange','banana'];
let arr_entry=arr.entries();
console.log("aaaa",arr_entry)
for(let i of arr_entry)
{
    console.log(i)
}

let arr2=['a','b','c',,];
let arr_entry2=arr2.entries();

for(let i of arr_entry2)
{
    console.log(i)
}