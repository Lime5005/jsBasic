//localStorage can ONLY store a string:
//array, object, store them using JSON.stringyfy, retrieve them back by JSON.parse

//set local storage:创建
//localStorage.setItem('name', 'Joe'); //see the result in Application->Local Storage

//set session storage:
//sessionStorage.setItem('name', 'Lili'); //refresh twice

//removeItem:删除
//localStorage.removeItem('name');

//getItem:提取
//console.log(localStorage.getItem('name'));

//clear everything删除
//localStorage.clear();

document.querySelector('form').addEventListener('submit', runEvent);

//先提取用户输入的数据，再存到本地
function runEvent(e) {
    const task = document.getElementById('task').value;
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task); //数据都集合成一个由许多string组成的array

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task saved');

    e.preventDefault();
};

//JSON.parse还原成array
const tasks = JSON.parse(localStorage.getItem('tasks'));
//tasks.forEach(task => console.log(task));
tasks.forEach(function(task) {
    console.log(task);
});