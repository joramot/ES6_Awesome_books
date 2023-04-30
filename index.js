import BookList from './modules/bookList.js';
import { handleNavAddClick, handleNavListClick, handleNavContactClick } from './modules/navMenu.js';

const bookList = new BookList();

const navList = document.querySelector('.menuList');
const navAdd = document.querySelector('.menuAdd');
const navContact = document.querySelector('.menuContact');

navAdd.addEventListener('click', handleNavAddClick);
navList.addEventListener('click', handleNavListClick);
navContact.addEventListener('click', handleNavContactClick);

bookList.init();