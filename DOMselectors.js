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

lisArr.forEach(function(lis, index) {
    console.log(lis.className);
    lis.textContent = `${index}: hello`; //see reversed index order
})
console.log(lisArr);

//document.querySelectorAll():
const queries = document.querySelectorAll('ul.collection li.collection-item');
queries.forEach(function(query, index) {
    query.textContent = `${index}: hi`;
})

//forEach loop can ONLY be used in array, but for loop can be used even in HTML collection:
const oddList = document.querySelectorAll('li:nth-child(odd)');
const evenList = document.querySelectorAll('li:nth-child(even)');

oddList.forEach(function(li, index) {
    li.style.background = '#ccc';
})

//这里的length，[i]都被用在不是array的元素上也可以：
for (let i = 0; i < evenList.length; i++) {
    evenList[i].style.background = '#00FFFF';
}

console.log(queries);