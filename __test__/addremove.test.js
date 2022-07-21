import {
  deleteTask,
  getLocalStorage,
  addToDoTask,
  deleteToDoTask,
} from '../src/addremove.js';

describe('Add, Remove Task', () => {
  document.body.innerHTML = '<div class="to-do-list"></div>';
});

const task = { description: 'text', completed: false, index: 1 };

test(' Test to add a task in the TaskList', () => {
  addToDoTask(task);
  const TaskList = document.querySelectorAll('.to-do-list div');
  expect(TaskList).toHaveLength(1);
  expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(1);
});

test('Test to remove task from TaskList', () => {
  const RemoveTask = document.querySelectorAll('.remove-task');
  deleteTask(RemoveTask[0]);
  const TaskList = document.querySelectorAll('.to-do-list div');
  expect(TaskList).toHaveLength(0);
});

test('Test get Local storage', () => {
  const localest = getLocalStorage();
  expect(localest).not.toHaveLength(0);
});

test('Test to remove  task from the localStorage', () => {
  const tasks = [
    { description: 'task one ', completed: false, index: 1 },
    { description: 'task two', completed: false, index: 2 },
    { description: 'task three', completed: false, index: 3 },
  ];
  localStorage.setItem('Task', JSON.stringify(tasks));
  deleteToDoTask(1);
  expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(2);
});
