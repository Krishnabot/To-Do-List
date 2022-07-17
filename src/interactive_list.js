import { setLocalStorage, addTask } from './addremove.js';

let Task = JSON.parse(localStorage.getItem('Task')) || [];

const editCheckBox = (ID, event) => {
  Task.forEach((element) => {
    if (element.index === ID) {
      element.completed = event;
    }
    setLocalStorage(Task);
  });
};

const clearCompletedTask = () => {
  Task = Task.filter((element) => element.completed === false);

  Task.forEach((element, index) => {
    element.index = index + 1;
  });
  setLocalStorage(Task);

  document.querySelector('.to-do-list').innerHTML = '';
  addTask(Task);
};

export { editCheckBox, clearCompletedTask };
