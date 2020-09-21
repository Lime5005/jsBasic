// Scope: global scope:
var a = 1;
let b = 2;
const c = 3;

/*function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('function scope: ', a, b, c);
}

test();*/

/*if (true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('if block scope: ', a, b, c);
}*/

//console.log('global scope: ', a, b, c); //now the a become 4, the var change if the same variable name been re-defined.

for (var a = 0; a < 10; a++) {
    console.log(`for loop: ${a}`);
}
console.log('global scope: ', a, b, c); //now the a become 10, the VAR change if the same variable name been re-defined, to avoid this always use LET to define a variable.