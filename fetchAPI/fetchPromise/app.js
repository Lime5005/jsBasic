//Get data, create new data, updata data, delete data
const http = new easyHTTP;

//http.get('https://jsonplaceholder.typicode.com/users')
//    .then(data => console.log(data))
//    .catch(err => console.log(err));

const data = {
    "name": "Joe Dogus",
    "username": "Joedogus",
    "email": "joedogus@gmail.com"
}

//http.post('https://jsonplaceholder.typicode.com/users', data)
//    .then(data => console.log(data))
//    .catch(err => console.log(err));

//http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//    .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .then(console.log(err));