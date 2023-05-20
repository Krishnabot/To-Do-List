/* eslint-disable no-restricted-globals */
import './style.css';
import {
  getLocalStorage,
  addToDoTask,
  deleteToDoTask,
  editToDoTask,
  deleteTask,
} from './addremove.js';
import { editCheckBox, clearCompletedTask } from './interactive_list.js';

// Retrieve tasks from localStorage and populate the initial task list
getLocalStorage();

// Get DOM elements
const inputTask = document.querySelector('.input-task');
const toDoList = document.querySelector('.to-do-list');
const addTaskButton = document.querySelector('.add-task');
const clearButton = document.querySelector('.clr-btn');

// Event listeners

// Add task button click event
addTaskButton.addEventListener('click', () => {
  if (inputTask.value !== '') {
    addToDoTask(inputTask.value);
    inputTask.value = '';
  }
  // Reload the page after adding a task
  window.location.reload();
});

// Input field keydown event
inputTask.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTaskButton.click();
  }
});

// Task list click event (delete task)
toDoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-task')) {
    const item = event.target;
    deleteTask(item);
    const id = parseInt(
      event.target.parentElement.getAttribute('index_id'),
      10,
    );
    deleteToDoTask(id);
  }
});

// Task list click event (edit task on click)
toDoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('task-layout')) {
    const id = parseInt(event.target.parentElement.getAttribute('index_id'), 10);
    const { value } = event.target;
    editToDoTask(id, value);
  }
});

// Task list keydown event (edit task on enter key press)
toDoList.addEventListener('keydown', (event) => {
  if (event.target.classList.contains('task-layout')) {
    if (event.key === 'Enter') {
      const id = parseInt(event.target.parentElement.getAttribute('index_id'), 10);
      const { value } = event.target;
      editToDoTask(id, value);
    }
  }
});

// Task list click event (edit task checkbox)
toDoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('insertedcheckbox')) {
    const insertedCheckbox = event.target;
    const id = parseInt(
      event.target.parentElement.getAttribute('index_id'),
      10,
    );
    editCheckBox(id, insertedCheckbox.checked);
  }
});

// Clear completed tasks button click event
clearButton.addEventListener('click', () => {
  clearCompletedTask();
});
