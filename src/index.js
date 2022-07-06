/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

console.log('123456');

const toDoList = [
  {
    description: 'Wash the Dishes',
    completed: true,
    index: 0,
  },

  {
    description: 'Complete To Do List',
    completed: false,
    index: 1,
  },

  {
    description: 'Coffee And Code',
    completed: true,
    index: 2,
  },
];

window.addEventListener('load', () => {
  const List = document.querySelector('.to-do-list');

  const createElement = (e) => {
    const createdElement = document.createElement('div');
    const checkBox = document.createElement('input');
    const task = document.createElement('p');
    const hr = document.createElement('hr');

    createdElement.classList.add('dynamic-Elements');

    checkBox.type = 'checkbox';
    checkBox.checked = e.completed;

    task.innerHTML = e.description;

    createdElement.append(checkBox, task);
    List.append(hr, createdElement);
  };

  toDoList.forEach((e) => {
    createElement(e);
  });
});
