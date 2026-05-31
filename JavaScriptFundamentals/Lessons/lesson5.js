    //Logical Operators
    let x = true;   
    let y = false;
    console.log("x && y:", x && y);   // false
    console.log("x || y:", x || y);   // true
    console.log("!x:", !x);   // false
    console.log("!y:", !y);   // true   
    // Ternary Operator
    let age = 18;
    let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
    console.log(canVote);   // Yes, you can vote.

    // Typeof Operator
    console.log("Type of x:", typeof x);   // boolean
    console.log("Type of 'Hello':", typeof "Hello");   // string
    console.log("Type of null:", typeof null);   // object (this is a known quirk in JavaScript)
    console.log("Type of undefined:", typeof undefined);   // undefined 
    // instanceof Operator
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    let person1 = new Person("John", 30);
    console.log(person1 instanceof Person);   // true   
    console.log(person1 instanceof Object);   // true (since all objects in JavaScript are instances of Object)
    // Delete Operator
    let obj = { name: "Alice", age: 25 };
    console.log(obj);   // { name: "Alice", age: 25 }
    delete obj.age; 
    console.log(obj);   // { name: "Alice" }
    // Void Operator
    function sayHello() {
        console.log("Hello!");
    }
    console.log(sayHello());   // Hello! undefined (void operator returns undefined)
    // Comma Operator
    let m = 1, n = 2, o = 3;
    let result = (m + n, n + o);
    console.log("Result of comma operator:", result);   // 5 (the last expression is returned)
    