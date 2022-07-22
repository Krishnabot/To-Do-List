import {
  addToDoTask,
} from '../src/addremove.js';
import { editCheckBox, clearCompletedTask } from '../src/interactive_list.js';

describe(' Editcheckbok Clear completed Test', () => {
  document.body.innerHTML = '<div class="to-do-list"></div>';
  const task = { description: 'text', completed: false, index: 1 };
  addToDoTask(task);
  const tasks = [
    { description: 'Task One', completed: false, index: 1 },
    { description: 'Task Two', completed: false, index: 1 },
    { description: 'Task Three', completed: false, index: 1 },
  ];
  localStorage.setItem('Task', JSON.stringify(tasks));

  test('Test The editCheckbok', () => {
    const ID = 1;
    const event = true;
    editCheckBox(ID, event);
    expect(JSON.parse(localStorage.getItem('Task'))[1].completed).toBeTruthy();

    const anotherEvent = false;
    editCheckBox(ID, anotherEvent);
    expect(JSON.parse(localStorage.getItem('Task'))[1].completed).toBeFalsy();
  });
});
