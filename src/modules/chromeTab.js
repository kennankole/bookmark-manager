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
      const childBookmars = getAllBookmarks(bookmark.children);
      allBookmarks.push(...childBookmars);
    }
  });
  return allBookmarks;
};

const updateAutocompleteDropdown = (matchingBookmarks) => {
  matchingBookmarks.forEach((child) => {
    console.log(child.url, child.title);
  });
};

const autocompleteSearch = (query) => {
  const matchingBookmarks = allBookmarksData.filter((bookmark) => {
    const title = bookmark.title.toLowerCase();
    const queryLowerCase = query.toLowerCase();
    return title.includes(queryLowerCase);
  });

  updateAutocompleteDropdown(matchingBookmarks);
};

const searchInput = document.getElementById('input');
searchInput.addEventListener('input', (event) => {
  const query = event.target.value;
  autocompleteSearch(query);
});

chrome.bookmarks.getTree((bookmarks) => {
  allBookmarksData = getAllBookmarks(bookmarks);
});
