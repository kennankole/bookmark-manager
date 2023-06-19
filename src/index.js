/* eslint-disable no-undef */
import getAllBookmarks from './modules/allBookmarks.js';
import closeList from './modules/close.js';
import searchForm from './modules/form.js';

let allBookmarksData = [];

const autocompleteSearch = (query, list) => {
  closeList();
  query.addEventListener('input', () => {
    closeList();
    if (!query.value) return;
    const suggestions = document.createElement('ul');
    suggestions.setAttribute('id', 'suggestions');
    query.parentNode.appendChild(suggestions);

    list.forEach((item) => {
      if (item.url.toUpperCase().includes(query.value.toUpperCase())) {
        const listItem = document.createElement('li');
        listItem.innerHTML = item.title;
        suggestions.appendChild(listItem);

        listItem.addEventListener('click', () => {
          query.value = item.url;
          document.querySelector('#go').style.display = 'block';
          closeList();
        });
        listItem.style.cursor = 'pointer';
        // suggestions.appendChild(suggestion);
      }
    });
  });
};

chrome.bookmarks.getTree((bookmarks) => {
  allBookmarksData = getAllBookmarks(bookmarks);
  autocompleteSearch(document.getElementById('input'), allBookmarksData);
});

searchForm();