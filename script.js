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

const createToolsArea = (task) => {
  const toolsPanel = document.createElement("div");
  toolsPanel.classList.add("tools");
  task.appendChild(toolsPanel);

  const complete = document.createElement("button");
  complete.classList.add("complete");
  complete.innerHTML = '<i class="fas fa-check"></i>';
  toolsPanel.appendChild(complete);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerHTML = "EDIT";
  toolsPanel.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
  toolsPanel.appendChild(deleteBtn);
};

const addNewTask = () => {
  if (input.value !== "") {
    idNumber++;
    const task = document.createElement("li");
    task.textContent = input.value;
    task.setAttribute("id", `todo-${idNumber}`);
    todoList.appendChild(task);
    input.value = "";
    alertInfo.innerText = "";
    createToolsArea(task);
  } else {
    alertInfo.innerText = "Please, write your task!";
  }
};

const enterCheck = (event) => {
  if (event.keyCode === 13) {
    addNewTask();
  }
};

const checkClick = (e) => {
  if (e.target.closest("button").classList.contains("complete")) {
    e.target.closest("li").classList.toggle("completed");
  } else if (e.target.closest("button").classList.contains("edit")) {
    popup.style.display = "flex";
    editTask();
  } else if (e.target.closest("button").classList.contains("delete")) {
    e.target.closest("li").remove();
  }
};

addBtn.addEventListener("click", addNewTask);
input.addEventListener("keydown", enterCheck);
todoList.addEventListener("click", checkClick);
