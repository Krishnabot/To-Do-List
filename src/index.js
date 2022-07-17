/* eslint-disable no-restricted-globals */
import './style.css';
import {
  getLocalStorage,
  addToDoTask,
  deleteToDoTask,
  editToDoTask,
} from './addremove.js';

import { editCheckBox, clearCompletedTask } from './interactive_list.js';

getLocalStorage();

const inputTask = document.querySelector('.input-task');
const toDoList = document.querySelector('.to-do-list');

document.querySelector('.add-task').addEventListener('click', () => {
  if (inputTask.value !== '') {
    addToDoTask(inputTask.value);
    inputTask.value = '';
  }
  window.location.reload();
});

inputTask.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('.add-task').click();
  }
});

toDoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-task')) {
    event.target.parentElement.remove();
    const iD = parseInt(
      event.target.parentElement.getAttribute('index_id'),
      10,
    );
    deleteToDoTask(iD);
    location.reload();
  }
});

toDoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('task-layout')) {
    const iD = parseInt(e.target.parentElement.getAttribute('index_id'), 10);
    const { value } = e.target;
    editToDoTask(iD, value);
  }
});

toDoList.addEventListener('keydown', (e) => {
  if (e.target.classList.contains('task-layout')) {
    const iD = parseInt(e.target.parentElement.getAttribute('index_id'), 10);
    const { value } = e.target;
    editToDoTask(iD, value);
  }
});

toDoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('insertedcheckbox')) {
    const insertedcheckbox = event.target;
    const ID = parseInt(
      event.target.parentElement.getAttribute('index_id'),
      10,
    );
    editCheckBox(ID, insertedcheckbox.checked);
  }
});

document.querySelector('.clr-btn').addEventListener('click', () => {
  clearCompletedTask();
});
