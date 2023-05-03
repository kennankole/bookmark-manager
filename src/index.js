/* eslint-disable no-undef */
import _ from 'lodash';
import './style.css';

const component = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
};

document.body.appendChild(component());

const createFolderForm = document.getElementById('save-folder');

createFolderForm.addEventListener('click', () => {
  const inputElement = document.getElementById('folder_name');
  console.log(inputElement.value);
  inputElement.value = '';
});