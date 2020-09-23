//replace method:(new, old) replace through parent element
//replace the h5 element to h2 and change the textContent
const newHeading = document.createElement('h2');

newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

//now we have the new element, we can find the old one and it's parent:
//const oldHeading = document.querySelector('h5');

//如果有多个h5的元素，如何区分? 用id:
const oldHeading = document.getElementById('task-title');

const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading, oldHeading);

//console.log(newHeading);

//Remove element:
const lists = document.querySelectorAll('li');
const listUl = document.querySelector('ul');
lists[0].remove();
//Remove child:
listUl.removeChild(lists[1]);

//Add or remove class:
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]; //选择第一个list里的第一个a元素

let val;
val = link.className;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//GetAttribute or setAttribute(key, value):
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
//检查看是否存在某个hasAttribute:

link.setAttribute('title', 'Google');

val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;
console.log(val);