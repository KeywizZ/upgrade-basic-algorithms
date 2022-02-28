// 1.1

const character = {name: 'Jack Sparrow', age: 10};

character.age = 25;

console.log(character.age);


// 1.2

let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;

console.log('Soy', firstName, lastName, 'Tengo', age, 'años y me gustan los lobos');

// 1.3

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

let total;
total = toy1.price + toy2.price;

console.log('El total de ambos juguetes es:',total);

// 1.4

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;

console.log('Precio final de coche 1:', car1.finalPrice);
console.log('Precio final de coche 2:', car2.finalPrice);