const input = document.getElementById("in");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

renderTasks();

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    input.value = '';
  } else {
    alert("Please enter a task.");
  }
});