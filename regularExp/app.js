let re;
//Literal characters:
re = /hello/;
re = /hello/i;

//Metacharacter Symbols:
re = /^h/i; // ^: Must start with
re = /d$/; // $: Must end with
re = / World$/; // 注意空格，大小写都要符合
re = /^h.llo$/i; // Matches any ONE character : . is a wild-card, can means anything
re = /h*llo/i; // Matches any character 0 or more times
re = /gra?e?y/i; // Grey or gray or gry? -> Both ok,承认同一单词的不同写法

//如何忽略部分文字比如？用backslash \ 区隔开：
re = /Gra?e?y\?/i;

// Brackets:[], 比?更优的方法, 中括号内的字母任选一个
re = /gr[ae]y/i; // Must be an a or e

// 与之相反的，排除中括号内的任一字母，加^:
re = /[^ww]rey/i; // grey? matched [^ww]rey
re = /[^gf]rey/i; // grey? does NOT matched [^gf]rey

// 凡是大写的都匹配，注意：这个例子因为尾部的i要求大小写不敏感
re = /[A-Z]rey/i; // grey? matched [A-Z]rey

//const str = 'Hello World';
//const str = 'Hillo'; // . 代表任何一个字母或者符号，包括空白出现一次
//const str = 'heeillo'; // * 代表任何字母+任何数量都可以
//const str = 'grey?';

// Braces:{}, 如何限制字母重复的数量：
re = /Hel{2}o/;
//在某个范围内：
re = /Hel{2,4}o/; //2,4之间注意不可有空格，用法语写法，包括逗号
//至少出现2次：
re = /Hel{2,}o/;
// Parenthese:(), 想要任何一个数字，接着一个c，然后一起重复3次：不加小括号只算最后一个c
re = /([0-9]c){3}/;
//const str = 'Helllo'; //Helllo does NOT matched Hel{2}o

//Shorthand Character Classes
re = /\w/; // WORD character - alphanumeric or _ 字母数字都行
re = /\w+/; // + = one or more 任何数量的

//Anything but a number, a letter or underscore 排除字母,数字,下划线
re = /\W/;

//任何数字：
re = /\d/;
//one or more times:
re = /\d+/;
//const str = '0'; // 0 matched \d+
//非数字的：
re = /\D/;
//const str = '0';// 0 does NOT matched \D
//空格:
re = /\s/;
//非空格：
re = /\S/;
//const str = ' '; // does NOT matched \S
//b: Word boundary 捆绑, find a certain word, not a word in another word
re = /Hell\b/i;

re = /x(?=y)/; //is it followed by y?
re = /x(?!y)/; // is it NOT followed by y?
const str = 'qsdfghxqsd'; //qsdfghxqsd matched x(?!y)

//const res = re.exec(str);
//console.log(res);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`); //re.source is the content of the regEx without the backward slashes: /content/
    } else {
        console.log(`${str} does NOT matched ${re.source}`);
    }
}

reTest(re, str);