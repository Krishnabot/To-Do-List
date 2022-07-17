const Task = JSON.parse(localStorage.getItem('Task')) || [];

const createElement = (element) => {
  const InsertedDiv = document.createElement('div');
  const TaskList = document.querySelector('.to-do-list');
  const InsertedCheckBox = document.createElement('input');
  const toDoTask = document.createElement('input');
  const deleteButton = document.createElement('button');

  deleteButton.classList.add('remove-task');
  deleteButton.innerHTML = 'Remove';

  InsertedDiv.classList.add('dynamic-Elements');

  InsertedCheckBox.type = 'checkbox';
  InsertedCheckBox.classList.add('insertedcheckbox');
  InsertedCheckBox.checked = element.complete;

  toDoTask.value = element.description;
  toDoTask.classList.add('task-layout');

  InsertedDiv.setAttribute('index_id', element.index);
  InsertedDiv.append(InsertedCheckBox, toDoTask, deleteButton);

  TaskList.appendChild(InsertedDiv);
};

const addTask = (Task) => {
  Task.forEach((element) => {
    createElement(element);
  });
};

const setLocalStorage = (Task) => {
  window.localStorage.setItem('Task', JSON.stringify(Task));
};

const getLocalStorage = () => {
  const theTask = window.localStorage.getItem('Task');

  if (theTask !== null) {
    addTask(JSON.parse(theTask));
  }

  return theTask;
};

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

const deleteToDoTask = (ID) => {
  const theTask = JSON.parse(localStorage.getItem('Task'));
  theTask.splice(ID - 1, 1);
  theTask.forEach((element, index) => {
    element.index = index + 1;
  });
  setLocalStorage(theTask);

  return theTask;
};

const editToDoTask = (ID, value) => {
  const theTask = JSON.parse(localStorage.getItem('Task'));
  theTask.forEach((element) => {
    if (element.index === ID) {
      element.description = value;
    }
    setLocalStorage(theTask);
  });
};

export {
  addTask,
  getLocalStorage,
  setLocalStorage,
  addToDoTask,
  deleteToDoTask,
  editToDoTask,
};
