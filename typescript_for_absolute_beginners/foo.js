var Car = /** @class */ (function () {
    function Car(car) {
        this.details = car.make + " " + car.model + " " + car.year;
    }
    Car.prototype.getDetails = function () {
        return this.details;
    };
    return Car;
}());
function displayCar(car) {
    return car.make;
}
function foo(bar) {
    return 'Hello, ' + bar;
}
var baz = 'ABC';
var mustangDetails = {
    make: 'Ford',
    model: 'Mustang',
    year: 2005,
};
var mustang = new Car(mustangDetails);
console.log(foo("car"));
console.log(foo(44));
console.log(displayCar(mustangDetails));
console.log('mustang details: ', mustang.getDetails());
// document.body.innerHTML = mustang.getDetails();
