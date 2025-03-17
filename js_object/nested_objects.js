const myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
console.log(myObj.name)
console.log(myObj.cars.car1)
console.log(myObj["age"])           // another method of accessing
console.log(myObj["cars"]["car2"])  

// throws error if (myObj[age]) , so quotes must

let p1="cars";
let p2="car3";
console.log(myObj[p1][p2])