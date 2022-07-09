import './style.css';
import {
  getLocalStorage,
  addToDoTask,
  deleteToDoTask,
  editToDoTask,
} from './addremove.js';

getLocalStorage();
const inputTask = document.querySelector('.input-task');

document.querySelector('.add-task').addEventListener('click', () => {
  if (inputTask.value !== '') {
    addToDoTask(inputTask.value);
    inputTask.value = '';
  }
});

inputTask.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.querySelector('.add-task').click();
  }
});

document.querySelector('.to-do-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-task')) {
    e.target.parentElement.remove();
    const iD = parseInt(e.target.parentElement.getAttribute('index_id'), 10);
    deleteToDoTask(iD);
  }
});

document.querySelector('to-do-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('task-layout')) {
    const iD = parseInt(e.target.parentElement.getAttribute('index_id'), 10);
    const { value } = e.target;
    editToDoTask(iD, value);
  }
});

document.querySelector('to-do-list').addEventListener('keydown', (e) => {
  if (e.target.classList.contains('task-layout')) {
    const iD = parseInt(e.target.parentElement.getAttribute('index_id'), 10);
    const { value } = e.target;
    editToDoTask(iD, value);
  }
});
