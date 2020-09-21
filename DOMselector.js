//Single select:
//方法1: document.getElementById()
console.log(document.getElementById('task-title'));

//get things from the element:
console.log(document.getElementById('task-title').id); //task-title
console.log(document.getElementById('task-title').className);

//change styling:
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
//document.getElementById('task-title').style.display = 'none';

//change/add contents:
document.getElementById('task-title').textContent = 'Task list';
document.getElementById('task-title').innerText = 'My tasks';
document.getElementById('task-title').innerHTML = '<span style="color:blue">task list:</span>';

//方法2: document.querySelector(): basically work with jQuery

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'yellow';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'red';
document.querySelector('li:nth-child(4)').textContent = 'Hello there';
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; //only affect the first child