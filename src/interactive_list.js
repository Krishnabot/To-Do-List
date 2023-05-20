// Refactored code

import { setLocalStorage, addTask } from './addremove.js';

let Task = JSON.parse(localStorage.getItem('Task')) || [];

// Update the 'completed' property of a task
const editCheckBox = (ID, event) => {
  Task.forEach((task) => {
    if (task.index === ID) {
      task.completed = event;
    }
  });

  setLocalStorage(Task);
};

// Clear completed tasks
const clearCompletedTask = () => {
  Task = Task.filter((task) => !task.completed);

  Task.forEach((task, index) => {
    task.index = index + 1;
  });

  setLocalStorage(Task);

  const taskList = document.querySelector('.to-do-list');
  taskList.innerHTML = '';
  addTask(Task);
};

export { editCheckBox, clearCompletedTask };
