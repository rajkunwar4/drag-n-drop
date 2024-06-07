console.log(document.querySelector(".task").getBoundingClientRect());

const draggables = document.querySelectorAll(".task");

const droppables = document.querySelectorAll(".swim-lane");

draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    const bottomTask = insertAboveTask(zone, e.clientY);
    const currTask=document.querySelector(".is-dragging");
    if(!bottomTask){
        zone.appendChild(currTask);
    }else{
        zone.insertBefore(currTask,bottomTask);
    }
  });
});

function insertAboveTask(zone, mouseY) {
  //this will select all the task in the lane that we are hovering over, it will ignore the task
  //which is selected to be dragged
  const els = zone.querySelectorAll(".task:not(.is-dragging )");

  let closetTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const { top } = task.getBoundingClientRect();
    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
        closestOffset=offset;
        closetTask=task;
    }
  });
  return closetTask;
}
