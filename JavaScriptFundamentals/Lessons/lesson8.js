    //Functions
    function sayHello(name) {
        console.log("Hello " + name);
    }
    sayHello("Alice");

    //Function with return value
    function add(a, b) {
        return a + b;
    }
    let result = add(5, 10);
    console.log("Result of add function:", result);

    //Arrow function
    const multiply = (x, y) => x * y;
    console.log("Result of multiply function:", multiply(4, 5));

    //anonymous function
   var timeoutId = setTimeout(function() {
        console.log("This is an anonymous function executed after 2 seconds");
    }, 2000);   

    console.log("This will be logged before the anonymous function executes", timeoutId);

    //Clearing the timeout before it executes
    clearTimeout(timeoutId);    
    console.log("The anonymous function will not execute because the timeout was cleared");

    //Anonymous Function

    var hello = () => {
        console.log("Inside hello anonymous fat arrow function")
    }
    hello();

    //Using the printage function from helpers/printHelper.js
    import { printage } from './helpers/printHelper.js';
    printage(30);