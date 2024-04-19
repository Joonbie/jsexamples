// Creating a Supercar class
// Supercar is a child class of Car

const Car = require("./Car.js");

// ES6 Format of above
// import Car from "./Car";

// Extend the Supercar class to inherit the properties of Car
class Supercar extends Car {
  // Store the values of the car in the super class
  constructor(make, model, year) {
    super(make, model, year);
    this.kilometersDriven = 0;
    this.warranty = true;
  }

  // The drive() method of Supercar class uses the same method from the car class
  drive(distance) {
    super.drive(distance);
  }

  //the getTotalKilometersDriven() method of Supercar class uses the same method from Car class
  getTotalKilometersDriven() {
    return super.getTotalKilometersDriven();
  }

  // The setWarranty() method is only available in the Supercar class
  setWarranty(status) {
    this.warranty = status;
  }

  // the getWarranty() method is only available in the Supercar class
  getWarranty() {
    return this.warranty;
  }
}

let mySuperCar = new Supercar("Maserati", "MC20", 2020);

mySuperCar.drive(100);
mySuperCar.drive(100);

console.log(
  "My Super Car(KM Driven): " + mySuperCar.getTotalKilometersDriven()
);

mySuperCar.setWarranty = false;
console.log("Warranty Status: " + mySuperCar.getWarranty());
