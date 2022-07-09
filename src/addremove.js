const Task = [] || JSON.parse(localStorage.getItem('Task'));

const TaskList = document.querySelector('.to-do-list');

const createElement = (e) => {
  const InsertedDiv = document.createElement('div');
  const InsertedCheckBox = document.createElement('input');
  const toDoTask = document.createElement('input');
  const deleteButton = document.createElement('button');

  deleteButton.classList.add('remove-task');
  deleteButton.innerHTML = '<i class=" fa-solid fa-trash-can"></i>';

  InsertedDiv.classList.add('dynamic-Elements');

  InsertedCheckBox.type = 'checkbox';
  InsertedCheckBox.checked = e.complete;

  toDoTask.value = e.description;
  toDoTask.classList.add('task-layout');

  InsertedDiv.setAttribute('index_id', e.index);
  InsertedDiv.append(InsertedCheckBox, toDoTask, deleteButton);

  TaskList.appendChild(InsertedDiv);
};

const addTask = (Task) => {
  Task.forEach((element) => {
    createElement(element);
  });
};

const localStorageTasks = (Task) => {
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
  localStorageTasks(Task);
  createElement(task);
};

const deleteToDoTask = (ID) => {
  const theTask = JSON.parse(localStorage.getItem('Task'));
  theTask.splice(ID - 1, 1);
  theTask.forEach((element, index) => {
    element.index = index + 1;
  });
  localStorageTasks(theTask);

  return theTask;
};

const editToDoTask = (ID, value) => {
  const theTask = JSON.parse(localStorage.getItem('Task'));
  theTask.forEach((e) => {
    if (e.index === ID) {
      e.description = value;
      e.completed = value;
    }
    localStorageTasks(theTask);
  });
};

export {
  getLocalStorage, addToDoTask, deleteToDoTask, editToDoTask,
};
