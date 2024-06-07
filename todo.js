const todo = document.getElementById("todo-lane");
const input = document.getElementById("todo-input");

function addTodo(textInput) {
  const p = document.createElement("p");
  p.classList.add("task");
  p.setAttribute("draggable", "true");
  p.innerText = textInput;

  p.addEventListener("dragstart", () => {
    p.classList.add("is-dragging");
  });
  p.addEventListener("dragend", () => {
    p.classList.remove("is-dragging");
  });

  todo.appendChild(p);
}

function submitHandler(e) {
  e.preventDefault();
  const task = input.value;
  if (!task) return;
  console.log(task);
  input.value = "";
  addTodo(task);
}

document.getElementById("todo-form").addEventListener("submit", submitHandler);
