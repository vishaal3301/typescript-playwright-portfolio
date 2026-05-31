    // Relational or Comaprison Operators
    // >, <, >=, <=, ==, ===, !=, !==   
    let a = 10;
    let b = 20;
    console.log("a > b:", a > b);   // false
    console.log("a < b:", a < b);   // true
    console.log("a >= b:", a >= b);  // false
    console.log("a <= b:", a <= b);  // true
    console.log("a == b:", a == b);  // false
    console.log("a === b:", a === b); // false
    console.log("a != b:", a != b);  // true
    console.log("a !== b:",    a !== b); // true   
    
    // Logical Operators
    // && (AND), || (OR), ! (NOT)
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
    console.log("Type of a:", typeof a);   // number
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
    console.log(result);   // 5 (the result of the last expression)

// Optional Chaining Operator
    let user = {
        name: "Bob",    
        address: {
            city: "New York",
            zip: "10001"
        }
    };
    console.log(user?.address?.city);   // New York 
    console.log(user?.contact?.email);   // undefined (does not throw an error)


    // Nullish Coalescing Operator
    let input = null;
    let defaultValue = "Default Value";
    let resultValue = input ?? defaultValue;
    console.log(resultValue);   // Default Value (since input is null)      

    // Spread Operator
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let combinedArr = [...arr1, ...arr2];
    console.log(combinedArr);   // [1, 2, 3, 4, 5, 6]
    let obj1 = { a: 1, b: 2 };
    let obj2 = { c: 3, d: 4 };
    let combinedObj = { ...obj1, ...obj2 };
    console.log(combinedObj);   // { a: 1, b: 2, c: 3, d: 4 }

    // Rest Operator
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    console.log(sum(1, 2, 3));   // 6
    console.log(sum(4, 5));      // 9

    // Optional Catch Binding
    try {
        throw new Error("An error occurred!");
    } catch {
        console.log("Error caught without binding!");   // Error caught without binding!
    }

    // BigInt
    let bigIntValue = 1234567890123456789012345678901234567890n;
    console.log(bigIntValue);   // 1234567890123456789012345678901234567890n (a BigInt value)

    // Symbol
    let sym1 = Symbol("description");
    let sym2 = Symbol("description");
    console.log(sym1 === sym2);   // false (each Symbol is unique, even if they have the same description)
    console.log(sym1);   // Symbol(description) (the actual output may vary, but it will indicate that it's a Symbol with the given description)

    // Type Coercion
    console.log("5" + 10);   // "510" (string concatenation due to type coercion)
    console.log("5" - 10);   // -5 (numeric subtraction due to type coercion)
    console.log("5" * 10);   // 50 (numeric multiplication due to type coercion)
    console.log("5" / 10);   // 0.5 (numeric division due to type coercion)
    console.log(true + 1);   // 2 (true is coerced to 1)
    console.log(false + 1);   // 1 (false is coerced to 0)  

    // Short-circuit Evaluation
    let a1 = true;
    let b1 = false;
    console.log(a1 && b1);   // false (b1 is false, so the whole expression is false)
    console.log(a1 || b1);   // true (a1 is true, so the whole expression is true)
    console.log(b1 && a1);   // false (b1 is false, so the whole expression is false)
    console.log(b1 || a1);   // true (a1 is true, so the whole expression is true)


    // Comma Operator in Loops
    for (let i = 0, j = 10; i < 5; i++, j--) {
        console.log(`i: ${i}, j: ${j}`);   // i: 0, j: 10 ... i: 4, j: 6
    }   


    // Optional Chaining with Function Calls
    let objWithFunc = {
        func: function() {
            return "Function called!";
        }
    };
    console.log(objWithFunc.func?.());   // Function called! (the function is called successfully)
    console.log(objWithFunc.nonExistentFunc?.());   // undefined (does not throw an error, just returns undefined)

    // == vs ===
    console.log(5 == "5");   // true (== performs type coercion, so it converts the string "5" to the number 5 before comparing)
    console.log(5 === "5");   // false (=== does not perform type coercion, so it compares both value and type, and they are different)
    console.log(null == undefined);   // true (== considers null and undefined equal)
    console.log(null === undefined);   // false (=== considers null and undefined different types)
    console.log(0 == false);   // true (== performs type coercion, so it converts false to 0 before comparing)
    console.log(0 === false);   // false (=== does not perform type coercion, so it compares both value and type, and they are different)
    

    // Logical NOT Operator with Non-Boolean Values
    console.log(!0);   // true (0 is falsy, so !0 is true)
    console.log(!1);   // false (1 is truthy, so !1 is false)
    console.log(!"");   // true (empty string is falsy, so !"" is true)
    console.log(!"Hello");   // false (non-empty string is truthy, so !"Hello" is false)
    console.log(!null);   // true (null is falsy, so !null is true)
    console.log(!undefined);   // true (undefined is falsy, so !undefined is true)
    // Nullish Coalescing with Logical OR
    let value1 = null;
    let value2 = "Fallback Value";
    let result1 = value1 || value2;
    let result2 = value1 ?? value2;
    console.log(result1);   // Fallback Value (logical OR returns the first truthy value, so it returns value2)
    console.log(result2);   // Fallback Value (nullish coalescing returns the first defined value, so it returns value2)
    // Spread Operator with Objects
    let objA = { x: 1, y: 2 };
    let objB = { y: 3, z: 4 };
    let mergedObj = { ...objA, ...objB };
    console.log(mergedObj);   // { x: 1, y: 3, z: 4 } (properties from objB overwrite those from objA if they have the same key)    
    // Rest Operator in Function Parameters
    function multiply(multiplier, ...numbers) {
        return numbers.map(num => num * multiplier);
    }
    console.log(multiply(2, 1, 2, 3));   // [2, 4, 6] (multiplies each number in the rest parameter by the multiplier)
    // Optional Catch Binding with Error Object
    try {
        throw new Error("An error occurred!");
    } catch (error) {
        console.log("Error message:", error.message);   // Error message: An error occurred! (the error object is available in the catch block)
    }
    // BigInt Arithmetic
    let bigInt1 = 1234567890123456789012345678901234567890n;
    let bigInt2 = 9876543210987654321098765432109876543210n;
    let bigIntSum = bigInt1 + bigInt2;
    console.log(bigIntSum);   // 11111111101111111110111111111011111111100n (the sum of the two BigInt values)
    // Symbol Uniqueness
    let symA = Symbol("unique");
    let symB = Symbol("unique");
    console.log(symA === symB);   // false (each Symbol is unique, even if they have the same description)
    // Type Coercion in Equality Comparison
    console.log(0 == false);   // true (== performs type coercion, so it converts false to 0 before comparing)
    console.log(0 === false);   // false (=== does not perform type coercion, so it compares both value and type, and they are different)
    console.log("" == false);   // true (== performs type coercion, so it converts false to an empty string before comparing)
    console.log("" === false);   // false (=== does not perform type coercion, so it compares both value and type, and they are different)  

    // Short-circuit Evaluation with Function Calls
    function logAndReturn(value) {
        console.log("Function called with value:", value);
        return value;
    }
    let shortCircuitResult = logAndReturn(true) && logAndReturn(false);
    console.log("Short-circuit result:", shortCircuitResult);   // Function called with value: true ... Short-circuit result: false (the second function is not called due to short-circuit evaluation)

    