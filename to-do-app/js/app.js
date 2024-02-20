// selecting all necessary elements
let input = document.querySelector(`input[type="text"]`);
let submit = document.querySelector(`input[type="submit"]`);
let unCompeteTask = document.querySelector(
  `.container_task_list_undone_task ul`
);
let completedTask = document.querySelector(
  ".container_task_list_completed_task ul"
);
let checkbox = document.querySelector("input[type=checkbox]");
let buttons = document.querySelectorAll("button");

// code starts from here

function makeTask() {
  let liNode = document.createElement("li");
  let inputNode = document.createElement("input");
  inputNode.type = "checkbox";
  let textNode = document.createTextNode(input.value);
  inputNode.style.marginRight = "6px";
  liNode.appendChild(inputNode);
  liNode.appendChild(textNode);
  return liNode;
}

function completeTask() {
  let items = this.parentNode;
  let deleteBtn = document.createElement("button");

  items.appendChild(deleteBtn);
  deleteBtn.innerText = "Delete";
  completedTask.appendChild(items);
  this.remove();
}

function task(e) {
  e.preventDefault();

  if (input.value === "") {
    alert("Please Write Something");
  } else {
    unCompeteTask.appendChild(makeTask());
  }
  input.value = "";
}

submit.addEventListener("click", task);
document.addEventListener("change", function (event) {
  if (event.target.matches("input[type='checkbox']")) {
    completeTask.call(event.target);
  }
});
document.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    event.target.parentNode.remove();
  }
});
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     let li = buttons[i].parentNode;
//     li.remove();
//   });
// }
