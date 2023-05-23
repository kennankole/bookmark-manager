/* eslint-disable no-undef */
const searchForm = () => {
  const submitBtn = document.getElementById('my-form');
  submitBtn.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = document.getElementById('input').value;
    if (url !== '') {
      chrome.tabs.create({ url });
    }
  });
};
export default searchForm;