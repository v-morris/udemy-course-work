// Crash course on TypeScript, modified with some of my own variables
// Udemy course: TypeScript for Absolute Beginners by Sean Bradley
// https://www.udemy.com/share/102HYc3@0ydzmdJk7-R-pBQrdT3XZtQEyMLS3ZXzGMtlm8mgbsQkc7uRsJpQaBpu4KUWoTSH/

interface Car {
  make: string,
  model: string,
  year: number,
}

class Car {
  private details: string

  constructor(car: Car){
    this.details = car.make + " " + car.model + " " + car.year
  }

  public getDetails(){
    return this.details
  }

}

function displayCar(car: Car){
  return car.make;
}

function foo(bar: "car" | "bus" | number) {
  return 'Hello, ' + bar;
}


let baz = 'ABC';
let mustangDetails = <Car>{
  make: 'Ford',
  model: 'Mustang',
  year: 2005,
}

let mustang: Car = new Car(mustangDetails)

console.log(foo("car"));
console.log(foo(44));

console.log(displayCar(mustangDetails))
console.log('mustang details: ', mustang.getDetails())

// document.body.innerHTML = mustang.getDetails();