const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".column");

let draggedTask = null;

tasks.forEach(task => {
  task.addEventListener("dragstart", () => {
    draggedTask = task;
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
    draggedTask = null;
  });
});

columns.forEach(column => {
  column.addEventListener("dragover", e => {
    e.preventDefault();
  });

  column.addEventListener("drop", () => {
    if (draggedTask) {
      column.appendChild(draggedTask);
    }
  });
});
