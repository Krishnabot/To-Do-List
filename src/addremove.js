// Refactored code

// Retrieve the Task from localStorage or create an empty array if it doesn't exist
const Task = JSON.parse(localStorage.getItem('Task')) || [];

// Create an HTML element for a task
const createElement = (element) => {
  const insertedDiv = document.createElement('div');
  const taskList = document.querySelector('.to-do-list');
  const insertedCheckBox = document.createElement('input');
  const toDoTask = document.createElement('input');
  const deleteButton = document.createElement('button');

  deleteButton.classList.add('remove-task');
  deleteButton.innerHTML = 'Remove';

  insertedDiv.classList.add('dynamic-Elements');

  insertedCheckBox.type = 'checkbox';
  insertedCheckBox.classList.add('insertedcheckbox');
  insertedCheckBox.checked = element.completed;

  toDoTask.value = element.description;
  toDoTask.classList.add('task-layout');

  insertedDiv.setAttribute('index_id', element.index);
  insertedDiv.append(insertedCheckBox, toDoTask, deleteButton);

  taskList.appendChild(insertedDiv);
};

// Add tasks to the DOM
const addTask = (tasks) => {
  tasks.forEach((task) => {
    createElement(task);
  });
};

// Remove a task from the DOM
const deleteTask = (item) => {
  item.parentElement.remove();
};

// Save tasks to localStorage
const setLocalStorage = (tasks) => {
  window.localStorage.setItem('Task', JSON.stringify(tasks));
};

// Retrieve tasks from localStorage and add them to the DOM
const getLocalStorage = () => {
  const storedTasks = window.localStorage.getItem('Task');

  if (storedTasks !== null) {
    const tasks = JSON.parse(storedTasks);
    addTask(tasks);
    return tasks;
  }

  return [];
};

// Add a new task
const addToDoTask = (value) => {
  const task = {
    description: value,
    completed: false,
    index: Task.length + 1,
  };

  Task.push(task);
  setLocalStorage(Task);
  createElement(task);
};

// Delete a task
const deleteToDoTask = (ID) => {
  const tasks = JSON.parse(localStorage.getItem('Task'));
  tasks.splice(ID - 1, 1);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  setLocalStorage(tasks);

  return tasks;
};

// Edit a task
const editToDoTask = (ID, value) => {
  const tasks = JSON.parse(localStorage.getItem('Task'));
  tasks.forEach((task) => {
    if (task.index === ID) {
      task.description = value;
    }
  });
  setLocalStorage(tasks);
};

export {
  addTask,
  deleteTask,
  getLocalStorage,
  setLocalStorage,
  addToDoTask,
  deleteToDoTask,
  editToDoTask,
};
