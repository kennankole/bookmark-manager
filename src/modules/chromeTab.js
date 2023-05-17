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

const options = {
  includeScore: true,
  keys: [
    'url',
    'title',
    'children',
  ],
};

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const resultsList = document.getElementById('resultsList');

  searchButton.addEventListener('click', () => {
    const query = searchInput.value;

    chrome.bookmarks.search(query, (result) => {
      const fuse = new Fuse(result, options);
      const results = fuse.search(query);
      // eslint-disable-next-line no-console
      console.log(results);
    });
    // chrome.bookmarks.search(query, (results) => {
    //   resultsList.innerHTML = '';

    //   if (results.length === 0) {
    //     resultsList.innerHTML = '<li>No bookmarks found.</li>';
    //   } else {
    //     results.forEach((result) => {
    //       const listItem = document.createElement('li');
    //       listItem.textContent = result.url;
    //       resultsList.appendChild(listItem);
    //     });
    //   }
    // });
  });
});

const one = new Fuse();
// eslint-disable-next-line no-console
console.log(one);