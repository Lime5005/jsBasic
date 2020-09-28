//ES5's way to create and manipulate an object:
const Person = {
    greeting: function() {
        return `Hello, this is ${this.firstName} ${this.lastName}`;
    },
    getMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const Mary = Object.create(Person);
Mary.firstName = 'Mary';
Mary.lastName = 'Smith';
Mary.age = 30;
Mary.getMarried('Biden');
console.log(Mary.greeting());

//也可以这样继承：
const Lulu = Object.create(Person, {
    firstName: { value: 'Lulu' },
    lastName: { value: 'Johns' },
    age: { value: 20 },
});
console.log(Lulu.greeting());