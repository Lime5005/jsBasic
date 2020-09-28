//A simple object:
/*const brad = {
    name: 'brad',
    age: 30
}
console.log(brad);
console.log(brad.age);*/

//If you want to create multiple instances of one certain object, (or prototypes, inheritances)you have to use object constructor:
function Person(name, dob) {
    this.name = name;
    //this.age = age;
    //建立一个自动计算年龄的公式：
    this.birthday = new Date(dob);
    /*this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }*/
}

//Put function in prototype: getting data or manupulate data
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getName = function() {
    return `${this.name}`;
}

Person.prototype.getMarried = function(NewName) {
    this.name = NewName;
}
const Lily = new Person('lily', '1-1-1990');
const Joe = new Person('joe', '1-1-1980');
console.log(Lily.calculateAge());
console.log(Joe.calculateAge());
console.log(Lily.getName());
console.log(Lily.getMarried('Smith'));
console.log(Lily.getName());
console.log(Lily.hasOwnProperty('name')); //true
console.log(Lily.hasOwnProperty('getName')); //false 在constructor的里面建立的才是OwnProperty，凡是用prototype建立的property(代码，公式)都不算OwnProperty