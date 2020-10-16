//一个整体的functions集合给不同的变量主体使用
function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn) {
        /*this.observers = this.observers.filter(item => item !== fn);*/ //这个 ECMAScript 6 "() => {}" 不被部分旧的浏览器支持
        let index = this.observers.indexOf(fn);
        if (index > -1) {
            this.observers.splice(index, 1);
        };
        console.log(`You are now unsubscribed to ${fn.name}`);
    },
    fire: function() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}

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