document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternalAPI);

//Fetch returns Promise:
function getText() {
    fetch('test.txt')
        .then(res => {
            //console.log(res); //res is a Promise, so we can return it:
            return res.text();
        })
        .then(data => {
            //console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
}

function getJson() {
    fetch('posts.json')
        .then(res => {
            //console.log(res); //res is a Promise, so we can return it:
            return res.json();
        })
        .then(data => {
            //console.log(data); //see data is an array, so we need to loop through it:
            let output = '';
            data.forEach(post => {
                output += `<li>${post.title}</li>`;
            })

            document.getElementById('output').innerHTML = output;

        })
        .catch(err => console.log(err));
}

function getExternalAPI() {
    fetch('https://api.github.com/users')
        .then(res => {
            //console.log(res); //res is a Promise, so we can return it:
            return res.json();
        })
        .then(data => {
            //console.log(data); //see data is an array, so we need to loop through it:
            let output = '';
            data.forEach(user => {
                output += `<li>${user.login}</li>`;
            })

            document.getElementById('output').innerHTML = output;

        })
        .catch(err => console.log(err));
}