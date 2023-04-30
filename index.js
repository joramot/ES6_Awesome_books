import BookList from './modules/bookList.js';
import { handleNavAddClick, handleNavListClick, handleNavContactClick } from './modules/navMenu.js';

const bookList = new BookList();

const navList = document.querySelector('.menuList');
const navAdd = document.querySelector('.menuAdd');
const navContact = document.querySelector('.menuContact');
// const addBooks = document.querySelector('.add-book');
// const listBooks = document.querySelector('.list');
// const contactInfo = document.querySelector('.contact');

navAdd.addEventListener('click', handleNavAddClick);
navList.addEventListener('click', handleNavListClick);
navContact.addEventListener('click', handleNavContactClick);

// navAdd.addEventListener('click', () => {
//   addBooks.style.display = 'flex';
//   listBooks.style.display = 'none';
//   contactInfo.style.display = 'none';
// });

// navList.addEventListener('click', () => {
//   window.location.reload();
// });

// navContact.addEventListener('click', () => {
//   contactInfo.style.display = 'flex';
//   listBooks.style.display = 'none';
//   addBooks.style.display = 'none';
// });

bookList.init();