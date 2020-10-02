//基本上就是一个公式里带着另一个公式：
//setTimeout代表几秒后开始跑这个公式，如果get先跑完了，后来跑的create就不会被get到了，相反，如果create是2秒后跑，而get是3秒才跑，那么create就可以被get到；以下的栗子是把get放到create里，那么无论怎样create都可以被get到
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' },

]

//function createPost(post, callback) {
//    setTimeout(function() {
//        posts.push(post);
//        callback();
//    }, 2000);
//}


//与callback同样的功能的还有Promise: 关键字resolve, reject, then, catch：
function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }

        }, 2000);
    })
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        })

        document.body.innerHTML = output;
    }, 1000);
}

//createPost({ title: 'Post three', body: 'This is //post three' }, getPosts);
createPost({ title: 'Post three', body: 'This is post three' })
    .then(getPosts)
    .catch(function(err) {
        console.log(err);
    });