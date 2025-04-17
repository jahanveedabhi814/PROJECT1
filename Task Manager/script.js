
//------------------------------------------------------For main tasks column-----------------------------------------------

const mainTaskList = document.getElementById("mainTaskList");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showMainTasks() {
  mainTaskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    mainTaskList.appendChild(li);
  });
}

showMainTasks();

// ---------------------------------------------------------For deleted tasks column-------------------------------------------

const deletedTaskList = document.getElementById("deletedTaskList");

let deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];

function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
}

function renderDeletedTasks() {
  deletedTaskList.innerHTML = '';
  deletedTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("deleted-task-item");
    li.textContent = task;

    const restoreBtn = document.createElement("button");
    restoreBtn.textContent = "Restore";
    restoreBtn.classList.add('restore-btn');
    restoreBtn.addEventListener("click", () => {
      tasks.push(task);
      deletedTasks.splice(index, 1);
      saveData();
      renderDeletedTasks();
    });

    li.appendChild(restoreBtn);
    deletedTaskList.appendChild(li);
  });
}

renderDeletedTasks();

// ------------------------------------------For edited task column---------------------------------------------------

const editedTaskList = document.getElementById("editedTaskList");
const editedTasks = JSON.parse(localStorage.getItem("editedTasks")) || [];

function renderEditedTasks() {
  editedTaskList.innerHTML = "";
  editedTasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    editedTaskList.appendChild(li);
  });
}

renderEditedTasks();

// ---------------------------------------For completed tasks and reopen-----------------------------------------------

const completeTaskList = document.getElementById("completeTaskList");
const completedTaskList = document.getElementById("completedTaskList");

let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

function saveAllData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

function renderTasksToComplete() {
  completeTaskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.classList.add("complete-btn");

    completeBtn.addEventListener("click", () => {
      completedTasks.push(task);
      tasks.splice(index, 1);
      saveAllData();
      renderTasksToComplete();
      renderCompletedTasks();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    completeTaskList.appendChild(li);
  });
}

function renderCompletedTasks() {
  completedTaskList.innerHTML = "";
  completedTasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const reopenBtn = document.createElement("button");
    reopenBtn.textContent = "Reopen";
    reopenBtn.classList.add("reopen-btn");

    reopenBtn.addEventListener("click", () => {
      tasks.push(task);
      completedTasks.splice(index, 1);
      saveAllData();
      renderTasksToComplete();
      renderCompletedTasks();
    });

    li.appendChild(span);
    li.appendChild(reopenBtn);
    completedTaskList.appendChild(li);
  });
}

// Initialize
renderTasksToComplete();
renderCompletedTasks();


// -------------------------------------To delete tsks from local storage----------------------------------------------------

localStorage.clear(); 
