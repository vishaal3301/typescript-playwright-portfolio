//Loops
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i);
}

let j = 1;
while (j <= 5) {
    console.log("While loop iteration:", j);
    j++;
}
let k = 1;
do {
    console.log("Do-while loop iteration:", k);
    k++;
} while (k <= 5);

//enhanced for loop (for...of)
let array = [10, 20, 30, 40, 50];
for (let value of array) {
    console.log("For...of loop value:", value);
}

var cars = ["Toyota", "Honda", "Ford"];
for (let index in cars) {
    console.log("For...in loop index:", index, "Value:", cars[index]);
}


//Nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`Nested loop iteration: i=${i}, j=${j}`);
    }
}


//ES6+ features in loops
let numbers = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
numbers.forEach(num => console.log("forEach loop value:", num));

//Using map to create a new array
let squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers);

//Using filter to create a new array with even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

//Using reduce to sum all numbers
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of numbers:", sum);

