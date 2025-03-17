const person={
    fname:"sariha",
    lname:"raju",
    fullname:function(){
        return this.fname+this.lname;
    }
}
console.log(person.fullname) // without using () it shows the function definition
console.log("--------");
console.log(person.fullname()) // on giving the () it gives the o/p
console.log("--------")
console.log(person())    // error


// without using () you can access by using get object accessors(refer object_accessors.js)