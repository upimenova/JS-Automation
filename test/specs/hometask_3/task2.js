function CarPark(brand, model, color, electro) {
    this.type = { brand, model }; 
    this.color = color; 
    this.electro = electro;
  };
  
  CarPark.prototype.description = function() { 
    console.log('Hi! This car park has ' + this.type.brand + '.'); 
  };

  function Car(brand, model, color, electro, mileage) {
    CarPark.call(this, brand, model, color, electro);
    this.mileage = mileage; 
  }
  
  Car.prototype = Object.create(CarPark.prototype);
  Car.prototype.constructor = Car;
  
  Car.prototype.greeting = function() { 
    console.log('Hi! This car is ' + this.type.brand + '.'); 
  };
 
  function CarPlace(brand, model, color, electro, mileage, number) {
    Car.call(this, brand, model, color, electro, mileage);
      this.number = number;
    }
    CarPlace.prototype.greeting = function() {
        console.log('Hey!! This car place has a ' + this.color + ' ' + this.type.brand + ' ' + this.type.model + '. The place number is ' + this.number + '.');
    }

const Car1 = new CarPark ('BMW', '420i', 'black', true);
console.log(Car1.description());
const Place2 = new CarPlace ('BMW', '420i', 'black', true, 1000, 2);
console.log(Place2.greeting());
