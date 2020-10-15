//Basic structure: Standard module pattern
//在return再call一次之前的公式：
// (function() {
//     //Declare private variables & functions

//     return {
//         //Declare public variables & functions
//     }
// })();

// const UIContrl = (function() {
//     let text = 'Hello there';

//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UIContrl.callChangeText();

// Revealing module pattern:在return直接把公式名写上
const ItemContrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log(data, 'Item added...');
    }

    function get(id) {
        return data.find(item => {
            console.log('id is ', item.id);
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

ItemContrl.add({
    id: 1,
    name: 'Joe'
});
ItemContrl.add({
    id: 2,
    name: 'Jack'
});

console.log(ItemContrl.get(2));