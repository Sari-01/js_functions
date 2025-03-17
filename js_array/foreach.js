// foreach() will print the values in one by one order
// foreach() will not execute for empty elements 
// syntax: arr_name.foreach()(iteration,index,arr)(index and arr are optional)

const arr=[30,40,72,44];
arr.forEach(i=>
    {
        console.log(i*2)
    })
console.log("-------------------")
const arr2=[22,44,,12,43];
arr2.forEach((i,index,arr2)=>
    {
        console.log(i*2,index,arr2)
    })
