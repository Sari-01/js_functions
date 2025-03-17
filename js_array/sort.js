// sort() arranges the array in alphabetical order
// reverse() arranges the array in reverse order

const arr=['banana','Banana','kiwi','apple','wewe']
console.log(arr.sort())
console.log(arr.reverse())

const arr2=[2,3,21,4,1,0,34,23]
console.log(arr2.sort())
console.log(arr2.sort((a,b)=>{
    return a-b
}))                                   // arrow function
console.log(arr2.sort(function(a,b){return a-b})) // normal function            (ascending order)
console.log(arr2.sort((a,b)=>
{
    return b-a                         // descending order
}))

const arr3=[10,2,56,79,12,1,100]
console.log(arr3.sort())          // prints in random order (this is becoz the numbers are converted into the strings then it checks for the unicode values then sort)
                                // to avoid this we use the subtraction method
