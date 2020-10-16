//Syntax suger只是换了一种更简单的写法，但道理一样
class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn) {
        let index = this.observers.indexOf(fn);
        if (index > -1) {
            this.observers.splice(index, 1);
        };
        console.log(`You are now unsubscribed to ${fn.name}`);
    }

    fire() {
        this.observers.forEach(item => item.call());
    }
}

//其他的页面显示功能都一样：
const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-sc').addEventListener('click', function() {
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-sc').addEventListener('click', function() {
    click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});

const getCurMilliseconds = function() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}