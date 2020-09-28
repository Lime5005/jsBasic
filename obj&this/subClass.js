class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello, there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    static getCostForMemebership() {
        return 1000;
    }
}

const Joe = new Customer('Joe', 'Biden', 555, 'standard');
console.log(Joe.greeting());
console.log(Joe.phone);
console.log(Customer.getCostForMemebership());