function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//greeting:
Person.prototype.greeting = function() {
    return `Hello, my name is ${this.firstName} ${this.lastName}`;
}

const Lily = new Person('Lily', 'Rose');
console.log(Lily.greeting());

//继承，use call() in another constructor:
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;

}

//How to inheritate a prototype function:
Customer.prototype = Object.create(Person.prototype); //这时的_proto_ 里的constructor是Person

//Turn _proto_ to Customer:变回到Customer，这样customer才可以变化自己的公式
Customer.prototype.constructor = Customer;

//Customer over-write greeting function:
Customer.prototype.greeting = function() {
    return `Hello, ${this.firstName} ${this.lastName}, welcome to our company`;
}

const customer1 = new Customer('Joe', 'Smith', '111', 'Standard');
console.log(customer1);
console.log(customer1.greeting());