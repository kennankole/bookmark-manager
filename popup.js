chrome.bookmarks.getTree((bookmarkTreeNodes) => {
  let bookmarks = bookmarkTreeNodes[0].children[0].children;
  let bookmarkList = document.getElementById("bookmarks");

  for (let i = 0; i < bookmarks.length; i++){
    let bookmark = bookmarks[i];

    let bookmarkItem = document.createElement("li");
    bookmarkItem.innerHTML += `<a href="${bookmark.url}"> ${bookmark.title}</a>`;
    bookmarkList.appendChild(bookmarkItem);
  };
});