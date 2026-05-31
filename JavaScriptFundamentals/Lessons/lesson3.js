//Objects
var customer ={
    firstName: 'Vishaal',
    lastName: 'Khairnar',
    age: 30

}
console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.age)
console.log(customer['firstName'])
console.log(customer['lastName'])
console.log(customer['age'])

//update the values of an Object
customer.firstName = "Yogesh"
customer['lastName'] = "Baisane"
console.log(`${customer.firstName} ${customer.lastName}`)
