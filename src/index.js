import './style.css';
import {
  getLocalStorage,
  addToDoTask,
  deleteToDoTask,
  editToDoTask,
} from './addremove.js';

const inputTask = document.querySelector('.input-task');
const toDoList = document.querySelector('.to-do-list');

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

toDoList.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('remove-task')) {
    e.target.parentElement.remove();
    const iD = parseInt(e.target.parentElement.getAttribute('index_id'), 10);
    deleteToDoTask(iD);
  }
});
getLocalStorage();

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
