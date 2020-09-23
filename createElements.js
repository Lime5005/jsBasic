//createElement: construct HTML element from scratch
const li = document.createElement('li');

//add className:
li.className = "collection-item";

//add id:
li.id = "test-id";

//add attribute(key, value):
li.setAttribute('title', 'new-item');

//create textNode and append:
li.appendChild(document.createTextNode("Hello World"));

//create a link element:
const link = document.createElement('a');
link.className = 'delete-item secondary-content';

//add icon to html:
link.innerHTML = '<i class="fa fa-remove"></i>';

//append this li to the ul:
document.querySelector('ul.collection').appendChild(li).appendChild(link); //看见html的list上加了一行Hello World，并且也有删除的icon
console.log(li);