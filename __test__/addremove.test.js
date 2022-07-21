import {
  addTask,
  deleteTask,
  getLocalStorage,
  setLocalStorage,
  addToDoTask,
  deleteToDoTask,
  editToDoTask,
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

test('Test get Local storage' , () => {
  const localest = getLocalStorage();
  expect(localest).not.toHaveLength(0);
}); 
