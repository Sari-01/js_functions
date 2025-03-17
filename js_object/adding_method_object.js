const person={
    fname:"sariha",
    lname:"raju",
}
person.fullname=function(){
    return this.fname+this.lname;
}
console.log("This is ",person.fullname())
console.log(person.fullname)
console.log(person.fullname())
console.log(person)