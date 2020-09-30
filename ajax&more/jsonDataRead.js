document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    //If you receive data in JSON format, you can convert it into a JavaScript object by JSON.parse() method, 然后可以直接用object.key的方法提取数据:

    xhr.onload = function() {
        if (this.status === 200) {
            //console.log(this.responseText);

            const user = JSON.parse(this.responseText); //把json数据转换成object

            const output = `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Company: ${user.company}</li>
                    <li>Phone: ${user.phone}</li>
                </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
}

function loadCustomers(e) {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function() {
        if (this.status === 200) {

            const users = JSON.parse(this.responseText);

            let output = '';

            users.forEach(function(user) {
                output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Company: ${user.company}</li>
                    <li>Phone: ${user.phone}</li>
                </ul>
            `;
            })


            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();
}