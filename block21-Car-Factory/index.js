//This is a parent class.
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDescription() {
    return `This car is a ${this.make} ${this.model} and is from ${this.year}`;
  }
}

//This is a child class of "Car".
class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  getDescription() {
    return `${super.getDescription()}. It has a range of ${this.range} miles.`;
  }
}

//This object is created from the "ElectricCar" Templet/Class.
const myCar = new ElectricCar("Tesla", "Model S", 2019, 300);

//This logs the object to the console.
console.log(myCar);

//This logs the output of the method from "ElectricCar" with the information provided by the "myCar" object.
console.log(myCar.getDescription());
