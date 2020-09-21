//push(), unshift(), pop(), shift(), splice(), reverse(), concat(), sort(),
numbers = [100, 20, 80, 60];
//numbers = new Array(100, 20, 80, 60);
console.log(numbers);


// val = numbers.sort(function(x, y) {
//     return x - y; // 从小到大， or y - x 从大到小
// });

//find(): 找到第一个符合条件的
function under50(num) {
    return num < 50;
}

val = numbers.find(under50);

console.log(val);