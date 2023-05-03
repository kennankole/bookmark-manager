/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const savedUrls = JSON.parse(localStorage.getItem('bookmarks')) || [];
const bookMarkUrls = document.getElementById('bookmark-elements');
const saveBtn = document.getElementById('save-btn');
const inputElement = document.getElementById('current-bookmark');
const saveUrl = document.getElementById('save-url');

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

// const btn = document.getElementById('save-url');

// btn.addEventListener('click', () => {
//   chrome.bookmarks.create(
//     {
//       parentId: '2',
//       title: 'Extension bookmarks',
//     },
//     (newFolder) => {
//       console.log(`added folder: ${newFolder.title}`);
//     },
//   );
// });