const form = document.querySelector("form");
const addButton = document.querySelector(".add");
const input = document.querySelector("input");
const taskList = document.querySelector("ul");
const allTasks = document.getElementsByClassName("task");
const taskNumber = document.querySelector("div span");
const deleteAll = document.querySelector(".delete-all");

const removeTask = (e) => {
  e.target.parentNode.remove();
  taskNumber.textContent = allTasks.length;
};

const addNewTask = (e) => {
  e.preventDefault();
  const newTask = input.value;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = newTask + "<button>Usuń</button>";

  taskList.appendChild(task);
  input.value = "";
  taskNumber.textContent = allTasks.length;
  task.addEventListener("click", removeTask);
};

form.addEventListener("submit", addNewTask);

const removeAll = () => {
  taskList.textContent = "";
  taskNumber.textContent = 0;
};

deleteAll.addEventListener("click", removeAll);
