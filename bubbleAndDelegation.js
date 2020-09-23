//bubble 泡沫效应，越来越大，一层层递进
//document.querySelector('.card-title').addEventListener('click', //function() {
//    console.log('card title');
//});
//
//document.querySelector('.card-content').addEventListener('click', //function() {
//    console.log('card content');
//});
//
//document.querySelector('.card').addEventListener('click', function//() {
//    console.log('card');
//});

//Event delegation 委托;代表, 我们想点击删除，但是它只删除这个class的第一行
const delBtn = document.querySelector('.delete-item');
//delBtn.addEventListener('click', deleteItem);

//从父入手，点击任何地方都会启动公式的执行
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    //在公式里限制它的启动结果：
    //if (e.target.className === 'fa fa-remove') {
    //    console.log('delete this');
    //}
    //用i的父a来启动：
    //if (e.target.parentElement.className === 'delete-item //secondary-content') {
    //    console.log('delete this');
    //}

    //如果遇到className改变的情况，为了使code更加有弹性，可以用模糊name，关键字classList.contains：
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete this');
        //我们的目的是移除i->a->li，层层推进，就是移除整个list
        e.target.parentElement.parentElement.remove();
    }
    //console.log(e.target); //这里发现要点击的是fa fa-remove的class
}