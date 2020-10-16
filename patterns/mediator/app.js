//聊天室对话：
class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(msg, to) {
        this.chatroom.send(msg, this, to);
    }

    receive(msg, from) {
        console.log(`${from.name} just send a message to ${this.name}: ${msg}`);
    }

}

// 不加句法糖的ES5写法：
/*const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(msg, to) {
        this.chatroom.send(msg, this, to);
    },
    receive: function(msg, from) {
        console.log(`${from.name} just send a message to ${this.name}: ${msg}`);
    }
}*/

const Chatroom = function() {
    let users = {};

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(msg, from, to) {
            //To a single user:如果to存在，有指定的接收者
            if (to) {
                to.receive(msg, from);
            } else {
                //To everyone:群发，不包括自己
                for (key in users) {
                    if (users[key] !== from) {
                        users[key].receive(msg, from);
                    }
                }
            }
        }
    }
}

const lily = new User('Lily');
const joe = new User('Joe');
const roy = new User('Roy');

const chatroom = new Chatroom();
chatroom.register(lily);
chatroom.register(joe);
chatroom.register(roy);

//测试：
lily.send('Joe, how are you?', joe);
joe.send('Roy, is it OK?', roy);
roy.send('Lily, I\'m here, look at me!', lily);
lily.send('Hello everyone!!!!');