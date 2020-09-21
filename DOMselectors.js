//Multiple select: 这几种方法得到同样的结果：
//document.getElementsByClassName:

//treat the element like array, access by []
const items = document.getElementsByClassName('collection-item');
console.log(items); // or items[0]

//If there is the same class name, choose the parent element first:
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

//document.getgetElementByTagName:
let lis = document.getElementsByTagName('li');
console.log(lis);
lis[0].style.color = 'red';
lis[3].textContent = 'hi';

//lis is NOT an array, convert it(it's a HTML collection) as an array to use some array functions like revert() or forEach loop:
lisArr = Array.from(lis);
lisArr.reverse();

lisArr.forEach(function(lis) {
    console.log(lis.className);
})
console.log(lisArr);