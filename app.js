console.log('hello');
console.log(true);
console.log(123);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });
console.error('this is an error');
console.clear();
console.warn('this is a warn');
//to see how long some program takes:
console.time('hello');
console.log('hello');
console.log('hello');
console.log('hello');
console.log('hello');
console.timeEnd('hello'); //hello: 0.17822265625 ms
const today = new Date();
console.log(today); //Fri Sep 18 2020 23:30:42 GMT+0200 (Central European Summer Time)
console.log(typeof today); //object