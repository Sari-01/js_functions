//gives the index value in the array format for array methods

const arr=['sariha','sabarish','mathi'];
console.log(Object.keys(arr));

const k=arr.keys();
for (let i of k)
{
    console.log(i)
}

// to get the values we use values

console.log(Object.values(arr))

const v=arr.values();
for(let i of v)
{
    // console.log(v)
    console.log(i)
}