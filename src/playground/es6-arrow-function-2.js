// arguments object - no longer bound with arrow functions
const add = (a , b) => {
    return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philly', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + 'has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// Challenge area:

const multiplier = {
    // numbers - array of numbers
    // multiple by - single number
    numbers: [20, 40, 60],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((n) => n * this.multiplyBy);
    }
};

console.log(multiplier.multiply())