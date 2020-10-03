//Use 关键字async在function前 turns a function into a Promise: 这样比return a new Promise更简单了
async function sayHello() {
    return 'Hello';
}
//console.log(sayHello());

sayHello()
    .then(res => console.log(res));

async function getUsers() {
    //await the response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //Only proceed once its resolved
    const data = await response.json();

    //Only proceed once the second Promise is resolved
    return data;
}

getUsers().then(users => console.log(users));