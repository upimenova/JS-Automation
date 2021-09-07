class CarPark {
    constructor(brand, model, color, electro) {
    this.type = {
        brand, 
        model
    }; 
    this.color = color; 
    this.electro = electro;
  }

  greeting() {
    console.log(`Hi! This car park has ${this.type.brand}.`);
  };
}

  class Car extends CarPark {
      constructor(brand, model, color, electro, mileage) {
          super (brand, model, color, electro);
          this._mileage = mileage;
      }
      get mileage () {
          return this._mileage;
      }
      greeting() {
          console.log(`Hi! This car is ${this.type.brand} .`); 
      }

      set mileage(newMileage) {
          this._mileage = newMileage;
      }
    }
    class CarPlace extends Car {
        constructor(brand, model, color, electro, mileage, number) {
            super (brand, model, color, electro, mileage);
            this._number = number;
        }
        get number () {
            return this._number;
        }
        greeting() {
            console.log(`Hey!! This car place has a ${this.color} ${this.type.brand} ${this.type.model}. The place number is ${this.number}.`);
        }
        set number(newNumber) {
            this._number = newNumber;
        }
      }

const Car1 = new CarPark ('BMW', '420i', 'black', true);
console.log(Car1.greeting());
const Place2 = new CarPlace ('BMW', '420i', 'black', true, 1000, 2);
console.log(Place2.greeting());
