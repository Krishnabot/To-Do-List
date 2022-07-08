const Task = [] || JSON.parse(localStorage.getItem("Task"));

const TaskList = document.querySelector(".to-do-list");

const createElement = (e) => {
  const InsertedDiv = document.createElement("div");
  const InsertedCheckBox = document.createElement("input");
  const toDoTask = document.createElement("input");
  const deleteButton = document.createElement("span");

  deleteButton.classList.add("remove-task");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  InsertedDiv.classList.add("dynamic-Elements");

  InsertedCheckBox.type = "checkbox";
  InsertedCheckBox.checked = e.complete;

  toDoTask.value = e.description;
  toDoTask.classList.add("task-layout");

  InsertedDiv.setAttribute("index_id", e.index);
  InsertedDiv.append(InsertedCheckBox, toDoTask, deleteButton);

  TaskList.appendChild(InsertedDiv);
};

const addTask = (Task) => {
  Task.forEach((element) => {
    createElement(element);
  });
};

const localStorageTasks = (Task) => {
  window.localStorage.setItem("Task", JSON.stringify(Task));
};

const getLocalStorage = () => {
  const theList = window.localStorage.getItem("Task");

  if (theList !== null) {
    addTask(JSON.parse(theList));
  }

  return theList;
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
  const theList = JSON.parse(localStorage.getItem("Task"));
  theList.splice(ID - 1, 1);
  theList.forEach((element, index) => {
    element.index = index + 1;
  });
  localStorageTasks(theList);

  return theList;
};

export { getLocalStorage, addToDoTask, deleteToDoTask };
