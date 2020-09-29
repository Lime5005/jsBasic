class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

        list.appendChild(row);
    }

    showAlert(msg, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(msg));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);


        setTimeout(function() {
            document.querySelector('.alert').remove()
        }, 3000)
    }

    clearBlanks() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
}

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books; //This returns a book list.
    }

    static displayBooks() {
        const books = Store.getBooks();
        //console.log(books); //For debug
        books.forEach(function(book) {
            const ui = new UI();

            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        //console.log(isbn);
        const books = Store.getBooks();
        books.forEach(function(book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//DOM load event:
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event Listener for add book:
document.querySelector('#book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

    //Instantiate a book:
    const book = new Book(title, author, isbn);

    //Instantiate a UI object:
    const ui = new UI();


    //Validate the input:
    if (title === '' || author === '' || isbn === '') {
        //alert('No data');
        ui.showAlert('Please fill the blanks', 'error');
    } else {
        //Add book to UI:
        ui.addBookToList(book);
        Store.addBook(book);
        ui.showAlert('Book added successfully', 'success');
    }

    ui.clearBlanks();

    e.preventDefault();
})

document.querySelector('#book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book removed!', 'success');
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    e.preventDefault();
})