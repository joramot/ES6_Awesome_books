import { DateTime } from './modules/luxon.js';
import BookList from './modules/bookList.js';
import { handleNavAddClick, handleNavListClick, handleNavContactClick } from './modules/navMenu.js';

const bookList = new BookList();

const navList = document.querySelector('.menuList');
const navAdd = document.querySelector('.menuAdd');
const navContact = document.querySelector('.menuContact');

const date = document.querySelector('.date');
setInterval(() => {
  const now = DateTime.now();
  date.textContent = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);

navAdd.addEventListener('click', handleNavAddClick);
navList.addEventListener('click', handleNavListClick);
navContact.addEventListener('click', handleNavContactClick);

bookList.init();