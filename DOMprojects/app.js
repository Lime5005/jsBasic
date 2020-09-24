//Define UI variables:
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');

//Load all the events:
loadEventListener(); //先call再建
function loadEventListener() {
    //为了保证每次刷新页面可以看到本地保存数据，从本地提取并显示：
    document.addEventListener('DOMContentLoaded', loadLocalTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);

}

function loadLocalTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
    })

}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add one first');
    };

    //create li element from the scratch:
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li:
    li.appendChild(link);

    //append li to ul:
    //test first:
    //console.log(li);
    taskList.appendChild(li);

    //store in localStorage:存储和删除的先后顺序
    storeTaskInLocalStorage(taskInput.value);

    //clear the input删除在最后！
    taskInput.value = '';

    e.preventDefault();
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
            //remove from localStorage also:
            removeFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeFromLocalStorage(taskItem) {
    //console.log(taskItem);
    //先看看localstorage里都有啥：
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //找到要删除的：
    //tasks.forEach(function(task, index) {
    //    if (taskItem.textContent === task) {
    //        tasks.splice(index, 1);
    //    }
    //});
    //除了splice, 也可以这样filter：
    tasks = tasks.filter(task => taskItem.textContent !== task);
    //删除该删除的；剩下的还原成localstorage，否则这个公式不跑
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

function clearTasks(e) {
    //taskList.innerHTML = '';//方法一
    //removeChild is faster than innerHTML:方法二
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    //一键全删localStorage：
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
    localStorage.clear();
}


//querySelectorAll returns a node list, but getElementById/className etc return a HTML collection which we have to convert them to array first to use the forEach function:

//Array.prototype.indexOf(): Le premier index de l'élément dans le tableau ou -1 si la valeur n'est pas trouvée

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    //console.log(text);
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none'; //跟学过的电影搜索很像
        }
    })
}