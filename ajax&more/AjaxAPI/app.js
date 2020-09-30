document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    //console.log(111);
    const number = document.querySelector('input[type="number"]').value;
    //console.log(number);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';
            //注意每个API设置不同，这里是到object的VALUE是[]才可以loop, response.value.forEach
            if (response.type === 'success') {
                response.value.forEach(function(res) {
                    output += `
              <li>${res.id}</li>
              <li>${res.joke}</li>       
              `;
                })
            } else {
                output += `<li>Something went wrong</li>`;
            }


            document.querySelector('.jokes').innerHTML = output;

        }
    }

    xhr.send();

    e.preventDefault();
}