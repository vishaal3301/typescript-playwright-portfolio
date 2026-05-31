    //Arrays
    var car = ["Volvo","Toyota","Tesla"]

    console.log(car)
    console.log(car[0])
    car[0] = "BMW"
    console.log(car[0])
    console.log(car)

    var newCustomer ={
        firstName: "Vishaal",
        lastName: "Khairnar",
        vehicle: ["Audi","Lamboghini","Mahindra","Toyota"]

    }

    console.log(newCustomer.vehicle[2])
    newCustomer.vehicle[2] = "Maruti"
    console.log(newCustomer.vehicle[2])
    console.log(newCustomer)    

    //Array Methods
    let fruits = ["Apple","Banana","Cherry"]
    console.log(fruits)  
    fruits.push("Orange")  // adds an element to the end of the array
    console.log(fruits)  
    fruits.pop()  // removes the last element from the array    
    console.log(fruits)  
    fruits.unshift("Mango")  // adds an element to the beginning of the array
    console.log(fruits)  
    fruits.shift()  // removes the first element from the array    
    console.log(fruits)
    fruits.splice(1, 0, "Grapes")  // adds an element at index 1 without removing any element
    console.log(fruits)
    fruits.splice(2, 1)  // removes 1 element at index 2
    console.log(fruits)
    let moreFruits = ["Pineapple","Strawberry"]
    let allFruits = fruits.concat(moreFruits)  // combines two arrays
    console.log(allFruits)
    let sortedFruits = allFruits.sort()  // sorts the array in alphabetical order
    console.log(sortedFruits)
    let reversedFruits = allFruits.reverse()  // reverses the order of the array
    console.log(reversedFruits)
    let indexOfBanana = allFruits.indexOf("Banana")  // finds the index of an element
    console.log(indexOfBanana)
    let hasCherry = allFruits.includes("Cherry")  // checks if an element exists in the array
    console.log(hasCherry)
    let fruitsString = allFruits.join(", ")  // converts the array to a string
    console.log(fruitsString)
    let slicedFruits = allFruits.slice(1, 4)  // creates a new array with elements from index 1 to 3
    console.log(slicedFruits)
    let splicedFruits = allFruits.splice(2, 2, "Kiwi", "Watermelon")  // removes 2 elements at index 2 and adds "Kiwi" and "Watermelon"
    console.log(allFruits)
    console.log(splicedFruits)
    
//Multidimensional Arrays
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    console.log(matrix)
    console.log(matrix[0][1])  // 2
    matrix[1][2] = 10
    console.log(matrix[1][2])  // 10
    console.log(matrix)

//Array Iteration
    let numbers = [1, 2, 3, 4, 5]
    numbers.forEach(function(number) {
        console.log(number)
    })
    let squaredNumbers = numbers.map(function(number) {
        return number * number
    })  
    console.log(squaredNumbers)
    let evenNumbers = numbers.filter(function(number) {
        return number % 2 === 0
    })
    console.log(evenNumbers)
    let sum = numbers.reduce(function(total, number) {
        return total + number
    }, 0)
    console.log(sum)

    //Nested Arrays
    let nestedArray = [
        [1, 2], 
        [3, 4],
        [5, 6]
    ]
    console.log(nestedArray)
    console.log(nestedArray[1][0])  // 3
    nestedArray[2][1] = 7
    console.log(nestedArray[2][1])  // 7
    console.log(nestedArray)
    
