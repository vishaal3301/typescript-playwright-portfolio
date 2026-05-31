    export function printage(age) {
        console.log("Age is " + age);
    }

    export class CustomerDetails{
        printFirstName(firstName){
            console.log("First Name: "+firstName)
        }

        printLastName(lastName){
            console.log("Last Name: "+lastName)}

    }

    export const customer = new CustomerDetails()
