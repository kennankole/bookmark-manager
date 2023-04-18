// eslint-disable-next-line no-undef
chrome.bookmarks.getTree((bookmarkTreeNodes) => {
  const bookmarks = bookmarkTreeNodes[0].children[0].children;
  const bookmarkList = document.getElementById('bookmarks');

  for (let i = 0; i < bookmarks.length; i += 1) {
    const bookmark = bookmarks[i];

    const bookmarkItem = document.createElement('li');
    bookmarkItem.innerHTML += `<a href="${bookmark.url}"> ${bookmark.title}</a>`;
    bookmarkList.appendChild(bookmarkItem);
  }
});