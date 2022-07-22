import { addToDoTask, editToDoTask } from '../src/addremove.js';
import { editCheckBox, clearCompletedTask } from '../src/interactive_list.js';

describe('Test Interactive List functions test', () => {
  document.body.innerHTML = '<div class="to-do-list"></div>';
  const task = { description: 'text', completed: false, index: 1 };
  addToDoTask(task);
  const tasks = [
    { description: 'Task One', completed: false, index: 1 },
    { description: 'Task Two', completed: false, index: 2 },
    { description: 'Task Three', completed: false, index: 3 },
  ];
  localStorage.setItem('Task', JSON.stringify(tasks));

  test('check the edit check box', () => {
    const event = true;
    const id = 1;
    editCheckBox(id, event);
    expect(JSON.parse(localStorage.getItem('Task'))[0].completed).toBeFalsy();
    const secondEvent = false;
    editCheckBox(id, secondEvent);
    expect(JSON.parse(localStorage.getItem('Task'))[0].completed).toBeFalsy();
  });

  test('Test clear complerted function', () => {
    const tasks = [
      { description: 'Task one', completed: true, index: 1 },
      { description: 'Task two', completed: false, index: 2 },
      { description: 'Task three', completed: false, index: 3 },
    ];

    localStorage.setItem('Task', JSON.stringify(tasks));
    clearCompletedTask();
    expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(2);

    const anotherTasks = [
      { description: 'text', completed: false, index: 1 },
      { description: 'two', completed: false, index: 2 },
      { description: 'three', completed: false, index: 3 },
    ];

    localStorage.setItem('Task', JSON.stringify(anotherTasks));
    clearCompletedTask();
    expect(JSON.parse(localStorage.getItem('Task'))).toHaveLength(3);
  });

  test('check the function for editing the task description', () => {
    const task = [{ description: 'text', completed: true, index: 1 }];
    localStorage.setItem('List', JSON.stringify(task));
    const value = 'testing testing';
    const id = 1;
    editToDoTask(id, value);
    expect(JSON.parse(localStorage.getItem('Task'))[0].description).toBe(
      'testing testing',
    );

    const anotherValue = 'Hello There';
    editToDoTask(id, anotherValue);
    expect(JSON.parse(localStorage.getItem('Task'))[0].description).toBe(
      'Hello There',
    );
  });
});
