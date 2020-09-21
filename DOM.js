let val;

val = document.all[2];
val = document.all.length;
val = document.body;

val = document.forms[0].method; //get

val = document.images;
val = document.links;
val = document.scripts;
val = document.scripts[2].getAttribute('src'); //DOM.js

//forEach can only be used in array, so we transform scripts into array first:
let scripts = document.scripts;
let scriptsArr = Array.from(scripts); //Array.from() creates a new instance of Array.
scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
})

console.log(val);