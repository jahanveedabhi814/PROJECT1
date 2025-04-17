const taskList = document.getElementById('taskList');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let deletedTasks = JSON.parse(localStorage.getItem('deletedTasks')) || [];

const template = document.getElementById('taskTemplate');

function saveData() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
}

function renderTasks() {
  taskList.innerHTML = ''; // Clear previous list
  tasks.forEach((task, index) => {
    const clone = template.content.cloneNode(true);
    const taskText = clone.querySelector('.task-text');
    const deleteBtn = clone.querySelector('.delete-btn');

    taskText.textContent = task;

    deleteBtn.addEventListener('click', () => {
      // Move to deletedTasks
      deletedTasks.push(task);
      tasks.splice(index, 1);
      saveData();
      renderTasks(); // Refresh list
    });

    taskList.appendChild(clone);
  });
}

renderTasks();
