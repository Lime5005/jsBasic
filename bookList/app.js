//Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor指凡是页面操作的
function UI() {}

UI.prototype.addBookToList = function(book) {
    //console.log(book);
    const list = document.getElementById('book-list');

    //create a tr element: tr means table row
    const row = document.createElement('tr');
    //console.log(row);

    //insert cols: td means table data
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

UI.prototype.clearBlanks = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function(msg, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    //这个新的div要安插在哪里？前后的数据指定之后，用 父.insertBefore(新，before what)
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    //提示信息显示时间：
    setTimeout(function() {
        document.querySelector('.alert').remove()
    }, 3000)

}

UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        //see from Element what to delete is the whole tr element:
        target.parentElement.parentElement.remove();
    }
}

//Event Listener for add book:
document.querySelector('#book-form').addEventListener('submit', function(e) {
    //console.log('test');
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;
    //console.log(title, author, isbn);

    //Instantiate a book:
    const book = new Book(title, author, isbn);
    //console.log(book);

    //Instantiate a UI object:
    const ui = new UI();
    //console.log(ui); //see now the ui has addBookToList function

    //Validate the input:
    if (title === '' || author === '' || isbn === '') {
        //alert('No data');
        ui.showAlert('Please fill the blanks', 'error');
    } else {
        //Add book to UI:
        ui.addBookToList(book);
        ui.showAlert('Book added successfully', 'success');
    }

    //Clear the UI once the book added:不可直接title = '', 必须另外写一个UI公式
    ui.clearBlanks();

    e.preventDefault(); //阻止自动刷新看不到console.log()的东西
})

//Event listener for delete book:听的是父，但指定其中某个class来执行操作：
document.querySelector('#book-list').addEventListener('click', function(e) {
    //console.log(1);
    //console.log(e);
    const ui = new UI();
    ui.deleteBook(e.target);
    //任何操作都提醒是否完成:
    ui.showAlert('Book removed!', 'success');
    e.preventDefault();
})