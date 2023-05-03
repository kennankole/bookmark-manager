/* eslint-disable no-undef */
/* eslint-disable no-console */
const createFolderForm = document.getElementById('save-folder');

createFolderForm.addEventListener('click', () => {
  const inputElement = document.getElementById('folder_name');
  console.log(inputElement.value);
  chrome.bookmarks.create({
    parentId: '2',
    title: inputElement.value,
  }, (newFolder) => {
    console.log(`Created a new folder ${newFolder.title}`);
  });
  inputElement.value = '';
});