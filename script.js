const input = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const alertInfo = document.querySelector(".alert-info");

const todoList = document.querySelector("ul");

const tools = document.querySelectorAll(".tools");
const completeBtn = document.querySelector(".complete");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");
const popup = document.querySelector(".popup");
const popupInput = document.querySelector(".popup-input");
const acceptBtn = document.querySelector(".popup-btn accept");
const cancelBtn = document.querySelector(".popup-btn cancel");

let idNumber = 0;

const addNewTask = () => {
  if (input.value !== "") {
    idNumber++;
    const task = document.createElement("li");
    task.textContent = input.value;
    task.setAttribute("id", `todo-${idNumber}`);
    task.appendChild(tools);
    todoList.appendChild(task);
  } else {
    alertInfo.innerText = "Please, write your task!";
  }
};

const enterCheck = (event) => {
  if (event.keyCode === 13) {
    addNewTask();
  }
};

addBtn.addEventListener("click", addNewTask);
input.addEventListener("keydown", enterCheck);
