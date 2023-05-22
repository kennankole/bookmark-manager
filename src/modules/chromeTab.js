/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
let allBookmarksData = [];

const getAllBookmarks = (bookmakrs) => {
  const allBookmarks = [];
  bookmakrs.forEach((bookmark) => {
    if (bookmark.url) {
      allBookmarks.push({
        title: bookmark.title,
        url: bookmark.url,
      });
    } else if (bookmark.children) {
      const childBookmarks = getAllBookmarks(bookmark.children);
      allBookmarks.push(...childBookmarks);
    }
  });
  return allBookmarks;
};

const closeList = () => {
  const suggestions = document.getElementById('suggestions');
  if (suggestions) {
    suggestions.parentNode.removeChild(suggestions);
  }
};

const autocompleteSearch = (query, list) => {
  closeList();

  query.addEventListener('input', () => {
    closeList();
    if (!query.value) return;
    const suggestions = document.createElement('div');
    suggestions.setAttribute('id', 'suggestions');
    query.parentNode.appendChild(suggestions);

    list.forEach((item) => {
      if (item.url.toUpperCase().includes(query.value.toUpperCase())) {
        const suggestion = document.createElement('ul');
        const listItem = document.createElement('li');
        listItem.innerHTML = item.url;
        suggestion.appendChild(listItem);

        listItem.addEventListener('click', () => {
          query.value = listItem.innerHTML;
          closeList();
        });
        listItem.style.cursor = 'pointer';
        suggestions.appendChild(suggestion);
      }
    });
  });
};

chrome.bookmarks.getTree((bookmarks) => {
  allBookmarksData = getAllBookmarks(bookmarks);
  autocompleteSearch(document.getElementById('input'), allBookmarksData);
});

const submitBtn = document.getElementById('my-form');
submitBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = document.getElementById('input').value;
  if (url !== '') {
    chrome.tabs.create({ url });
  }
});
