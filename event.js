//Anomonous function as a callback:
//document.querySelector('.clear-tasks').addEventListener('click', //function(e) {
//    console.log('hello');
//    e.preventDefault(); //prevent from reload & scroll up automatically
//});

//Having a named function is much better:
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    //console.log('clicked');
    e.preventDefault();
    let val;
    val = e;
    //Event target element:
    val = e.target;
    val = e.target.className;
    val = e.target.classList;

    //change the textContent:
    e.target.innerHTML = 'Hello';

    //see the event type:
    val = e.type; //click or mouseover etc

    //timeStamp:
    val = e.timeStamp;

    val = e.clientY; //按钮与它之外的空间的间距

    //coords event relative to the element:
    val = e.offsetY;
    val = e.offsetX; //inside of the button按钮以内的空间间距

    console.log(val);
}