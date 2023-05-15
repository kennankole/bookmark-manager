/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
const savedUrls = JSON.parse(localStorage.getItem('bookmarks')) || [];
const bookMarkUrls = document.getElementById('bookmark-elements');
const saveBtn = document.getElementById('save-btn');
const inputElement = document.getElementById('current-bookmark');

const display = () => {
  bookMarkUrls.innerHTML = '';
  savedUrls.forEach((item) => {
    bookMarkUrls.innerHTML += `
      <li>
        <a href="${item}" target="_blank">${item}</a>
      </li>
    `;
  });
};

saveBtn.addEventListener('click', (event) => {
  chrome.tabs.query({
    active: true,
    currentWindow: true,
  }, (tabs) => {
    const currentTab = tabs[0].url;
    savedUrls.push(currentTab);
    localStorage.setItem('bookmarks', JSON.stringify(savedUrls));
    display();
  });
});

if (savedUrls) {
  display();
}

// const processNode = (node) => {
//   if (node.children) {
//     node.children.forEach((child) => {
//       processNode(child);
//     });
//   }
//   if (node.url) {
//     console.log(node.url);
//   }
// };

// chrome.bookmarks.getTree((itemTree) => {
//   itemTree.forEach((item) => {
//     processNode(item);
//   });
// });

const bookmarkFolders = [];

const findFolders = (node) => {
  if (node.children) {
    node.children.forEach((childNode) => {
      if (childNode.children) {
        bookmarkFolders.push(childNode);
        localStorage.setItem('allBookmarks', JSON.stringify(bookmarkFolders));
        findFolders(childNode);
      }
    });
  }
};

chrome.bookmarks.getTree((bookmarkTreeNodes) => {
  bookmarkTreeNodes.forEach((node) => {
    findFolders(node);
  });
  const allBookmarks = JSON.parse(localStorage.getItem('allBookmarks'));
  allBookmarks.forEach((item, index) => {
    if (item.children.length > 1) {
      console.log(item.children, item.title);
    } else {
      console.log(item.children[0].url, item.title);
    }
  });
});
