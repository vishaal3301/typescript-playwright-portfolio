//working with class

import {customer, CustomerDetails } from './helpers/printHelper.js';

var customerDetails = new CustomerDetails()

customerDetails.printFirstName('Vishaal')
customerDetails.printLastName('Khairnar')

//customer object direct from imported module.
customer.printFirstName('John')
customer.printLastName('Doe')
