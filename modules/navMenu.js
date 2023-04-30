const addBooks = document.querySelector('.add-book');
const listBooks = document.querySelector('.list');
const contactInfo = document.querySelector('.contact');

export const handleNavAddClick = () => {
  addBooks.style.display = 'flex';
  listBooks.style.display = 'none';
  contactInfo.style.display = 'none';
};

export const handleNavListClick = () => {
  window.location.reload();
};

export const handleNavContactClick = () => {
  contactInfo.style.display = 'flex';
  listBooks.style.display = 'none';
  addBooks.style.display = 'none';
};
