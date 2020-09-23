const form = document.querySelector('form');
//const form = document.getElementsByClassName('task-form');
const taskInput = document.getElementById('task');

const heading = document.querySelector('h5');

//Clear input:
taskInput.value = '';
//keyDown:
//taskInput.addEventListener('keydown', runEvent);
//keyUp:
//taskInput.addEventListener('keyup', runEvent);

//cut or paste:
//taskInput.addEventListener('cut', runEvent);
//taskInput.addEventListener('paste', runEvent);
//input(for every input event):
taskInput.addEventListener('input', runEvent);

//form.addEventListener('submit', runEvent);

function runEvent(e) {
    console.log(`Event Type is : ${e.type}`);
    console.log(taskInput.value);
    heading.innerText = e.target.value; //同步写出输入的内容
    //e.preventDefault();
}