export default class BookList {
  constructor() {
    this.books = [];
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
    this.form = document.querySelector('form');
    this.bookList = document.getElementById('bookList');
    this.displayBooks();
    this.form.addEventListener('submit', this.addBook.bind(this));
    this.bookList.addEventListener('click', this.removeBook.bind(this));
  }

  displayBooks() {
    this.bookList.className = 'bookList';
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.className = 'lineBook';
      li.innerHTML = ` " ${book.title} " by ${book.author} <button class="removeBtn" data-index="${index}">Remove</button>`;
      this.bookList.appendChild(li);
    });
  }

  addBook(event) {
    event.preventDefault();
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('authorName').value;
    const newBook = { title, author };
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.form.reset();
    this.displayBooks();
    window.location.reload();
  }

  removeBook(event) {
    if (event.target.classList.contains('removeBtn')) {
      const { index } = event.target.dataset;
      this.books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
    }
  }
}

// const bookList = new BookList()