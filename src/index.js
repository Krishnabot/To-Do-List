import "./style.css";
import { getLocalStorage, addToDoTask, deleteToDoTask } from "./addremove.js";

getLocalStorage();
const inputTask = document.querySelector(".input-task");

document.querySelector(".add-task").addEventListener("click", () => {
  if (inputTask.value !== null) {
    addToDoTask(inputTask.value);
    inputTask.value = "";
  }
});

inputTask.addEventListener("keydown", (evnet) => {
  if (evnet.key === "Enter") {
    addTask.click();
  }
});

document.querySelector(".to-do-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-task")) {
    event.target.parentElement.remove();
    const iD = parseInt(event.target.parentElement.getAttribute("div_id"), 16);
    deleteToDoTask(iD);
  }
});
