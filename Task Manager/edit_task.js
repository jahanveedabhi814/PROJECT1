const taskList = document.getElementById("taskList");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const template = document.getElementById("taskTemplate");
let editedTasks = JSON.parse(localStorage.getItem("editedTasks")) || [];

function saveAll() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("editedTasks", JSON.stringify(editedTasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const clone = template.content.cloneNode(true);
    const taskText = clone.querySelector(".task-text");
    const editInput = clone.querySelector(".edit-input");
    const editBtn = clone.querySelector(".edit-btn");
    const saveBtn = clone.querySelector(".save-btn");

    taskText.textContent = task;
    editInput.value = task;

    editBtn.addEventListener("click", () => {
      taskText.style.display = "none";
      editInput.style.display = "inline-block";
    });

    saveBtn.addEventListener("click", () => {
      const updatedTask = editInput.value.trim();
      if (updatedTask) {
        tasks[index] = updatedTask;
        editedTasks.push(updatedTask); // Save to editedTasks
        saveAll();
        renderTasks();
      } else {
        alert("Task cannot be empty");
      }
    });

    taskList.appendChild(clone);
  });
}

renderTasks();
