//syntactic sugar(句法糖) ES6只是给了一种更容易的写法，实际的作用和ES5一样
class Person {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthDate);
    }
    greeting() {
        return `Hello, there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getMarried(newLastName) {
        this.lastName = newLastName;
    }

    //static method: 与instance无关的公式(not using `this` keyword)
    static add(x, y) {
        return x + y;
    }
}

const Mary = new Person('Mary', 'Smith', '1-1-1980');
console.log(Mary);
console.log(Mary.greeting());
Mary.getMarried('Chen');
console.log(Mary.greeting());
console.log(Mary.calculateAge());

//How to use a static method from an object: call it with the object name instead of the instance name:
a = Person.add(1, 2);
console.log(a);