let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let btnElement = document.querySelector("#app button");

let tasks = JSON.parse(localStorage.getItem("my_tasks")) || [];

function renderTasks() {
  listElement.innerHTML = "";

  for (task of tasks) {
    let taskElement = document.createElement("li");
    let taskText = document.createTextNode(task);

    let linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    let position = tasks.indexOf(task);

    linkElement.setAttribute("onclick", "deleteTask(" + position + ")");

    let linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);

    taskElement.appendChild(taskText);
    taskElement.appendChild(linkElement);
    listElement.appendChild(taskElement);
  }
}
renderTasks();

function addTask() {
  let taskText = inputElement.value;

  tasks.push(taskText);
  inputElement.value = "";
  renderTasks();
  saveToStorage();
}

btnElement.onclick = addTask;

function deleteTask(position) {
  tasks.splice(position, 1);
  renderTasks();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("my_tasks", JSON.stringify(tasks));
}
