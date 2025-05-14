const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const noTasksMsg = document.getElementById("noTasksMsg");

function updateNoTasksMessage() {
  noTasksMsg.style.display = taskList.children.length === 0 ? "block" : "none";
}

function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.textContent = taskText;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✓";
  completeBtn.classList.add("complete-btn");
  completeBtn.setAttribute("aria-label", "Mark task as completed");
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.setAttribute("aria-label", "Delete task");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    updateNoTasksMessage();
  });

  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonsDiv);

  return li;
}

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);
    taskInput.value = "";
    updateNoTasksMessage();
  }
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});

updateNoTasksMessage();
