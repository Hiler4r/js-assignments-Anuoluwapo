function Car(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year

    this.getCarInfo = function() {
        return `${this.brand} ${this.model} ${this.year}`
    }
}
const myCar = new Car("Toyota", "Corolla", 2015)
// const myCar2 = new Car("Honda", "Civic", 2018)
console.log(myCar.getCarInfo())
// console.log(myCar2.getCarInfo())
