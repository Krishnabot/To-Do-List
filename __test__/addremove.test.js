import {
  deleteTask,
  addToDoTask,
  deleteToDoTask,
  editToDoTask,
  getLocalStorage,
} from '../src/addremove.js';
import { editCheckBox, clearCompletedTask } from '../src/interactive_list.js';

describe('Test Add, Remove Task', () => {
  document.body.innerHTML = '<div class="to-do-list"></div>';

  const mockTask = { description: 'text', completed: false, index: 1 };
  test('Test to add a task in the TaskList', () => {
    addToDoTask(mockTask);
    const list = document.querySelectorAll('.to-do-list div');
    expect(list).toHaveLength(1);
    expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(1);
  });

  test('Test to remove task from TaskList', () => {
    const deleteButton = document.querySelectorAll('.remove-task');
    deleteTask(deleteButton[0]);
    const task = document.querySelectorAll('.to-do-list div');
    expect(task).toHaveLength(0);
  });
  test('Test get Local storage', () => {
    const localest = getLocalStorage();
    expect(localest).not.toHaveLength(0);
  });
  test('Test to remove  task from the localStorage', () => {
    const mocktasks = [
      { description: 'text', completed: false, index: 1 },
      { description: 'next Task', completed: false, index: 2 },
      { description: 'another Task', completed: false, index: 3 },
    ];
    localStorage.setItem('Task', JSON.stringify(mocktasks));
    deleteToDoTask(1);
    expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(2);
  });
});

describe('Test editcheckbox  clear completed task ', () => {
  test('Test the edit checkbox function', () => {
    const event = false;
    const id = 1;
    editCheckBox(id, event);
    expect(JSON.parse(localStorage.getItem('Task'))[0].completed).toBeFalsy();
    const secondEvent = true;
    editCheckBox(id, secondEvent);
    expect(JSON.parse(localStorage.getItem('Task'))[0].completed).toBeTruthy();
  });

  test('Test clear all completed function', () => {
    const mocktasks = [
      { description: 'text', completed: true, index: 1 },
      { description: 'next Task', completed: false, index: 2 },
      { description: 'another Task', completed: false, index: 3 },
    ];

    localStorage.setItem('Task', JSON.stringify(mocktasks));
    clearCompletedTask();
    expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(2);
  });

  test('Test edittodo task function', () => {
    const task = [{ description: 'text', completed: true, index: 1 }];
    localStorage.setItem('List', JSON.stringify(task));
    const value = 'test test';
    const id = 1;
    editToDoTask(id, value);
    expect(JSON.parse(localStorage.getItem('Task'))[0].description).toBe(
      'test test',
    );

    const secondValue = 'Hello There';
    editToDoTask(id, secondValue);
    expect(JSON.parse(localStorage.getItem('Task'))[0].description).toBe(
      'Hello There',
    );
  });
});
