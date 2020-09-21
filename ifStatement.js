//test if undefined:
let id;
//id = 100;
if (id !== undefined) {
    console.log(`The id is ${id}`);
} else {
    console.log('No id');
}

//Location object:
val = window.location.hostname; //127.0.0.1
val = window.location.search; //?id=1
val = window.location.port; //5500
val = window.location.href;

//Redirect:
//window.location.href = 'http://google.com';
//window.location.reload(); //keep reloading

//History object:
val = window.history.go(-1); //倒数第二次浏览的网站
val = window.history.length;

//prompt():
//let input = prompt();
//alert(input);

//confirm:
//if (confirm('are you sure')) {
//    console.log('yes');
//} else {
//    console.log('no');
//}

//Navigator object:

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; //MacIntel
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val);