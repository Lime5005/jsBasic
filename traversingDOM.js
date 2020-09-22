//先定义第一个，再通过它到达父子兄弟元素
let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

//get child nodes:
val = list.childNodes;
val = list.childNodes[3].nodeType; //1

//what is nodeType:
//1 - Element
//2 - Attribute (deprecated不推荐使用)
//3 - Text node
//8 - Comment
//9 - Document itself
//10 - Doctype


//get children element nodes(通常使用children多于childNodes):
val = list.children;
list.children[0].textContent = "Hello";
//get to children's children and edit them:
list.children[3].children[0].id = "test-link";
val = list.children[3].children[0]; //这时可以发现这个元素添加了一个id="test-link"

//firstchild or lastchild:
val = list.firstElementChild;
val = list.lastElementChild;

//count the child elements:
val = list.childElementCount; //5

//parent node:
val = listItem.parentNode;
val = listItem.parentElement.parentElement; //<div class="card-action">...

//get siblings: next or previous 可以上下游走
val = listItem.nextSibling; //#text
val = listItem.nextElementSibling; //<li class="collection-item">...
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.previousElementSibling; //null
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);