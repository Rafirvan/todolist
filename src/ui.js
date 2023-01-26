import "./styles.scss";
import { projects } from "./object";
import {
  load,
  checkProject,
  pushToPrAr,
  prodel,
  checkTask,
  savecheck,
} from "./logic";

const newbtn = document.querySelector(".newbtn");
const form = document.querySelector(".new-form");
const confirmed = document.querySelector(".confirm");
const cancel = document.querySelector(".cancel");
const projectlist = document.querySelector(".project-container");
const maintask = document.querySelector(".task-container");
const mainname = document.querySelector(".main-name");
const maindescription = document.querySelector(".main-description");

form.onsubmit = (e) => e.preventDefault();

document.body.onload = load();

newbtn.onclick = function () {
  form.style.animation = "fadeIn 0.5s";
  form.style.visibility = "visible";
};

cancel.onclick = function () {
  form.style.animation = "fadeOut 0.5s";

  const cancelDelay = setTimeout(cancelout, 450);
  function cancelout() {
    form.style.visibility = "hidden";
  }
};

//create new project
confirmed.onclick = function () {
  const nameq = document.querySelector("#name");
  const descq = document.querySelector(".description");
  let name = nameq.value;
  let description = descq.value;

  if (checkProject(name, description)) {
    newProjectArr(name, description);
    nameq.value = "";
    descq.value = "";
  }
};

function newProjectArr(name, description) {
  const newP = projects(name, description);
  renderProject(newP);
  pushToPrAr(newP);
}

function renderProject(project) {
  const pDiv = document.createElement("div");
  const pText = document.createElement("p");
  const pDel = document.createElement("div");
  pText.innerHTML = project.name;
  pText.onclick = function () {
    if (maintask.getAttribute("current") == project.name) {
      //do nothing
    } else {
      let cur = document.querySelector(".current-project");
      if (cur) cur.classList.remove("current-project");
      maintask.innerHTML = "";
      pText.classList.add("current-project");
      maintask.setAttribute("current", project.name);
      renderProjectHeader(
        project.name.toUpperCase(),
        project.description.toUpperCase()
      );
      renderNewTask(project);
      project.taskArr.forEach((task) => renderTasks(project, task));
    }
  };

  pDel.innerHTML = "X";
  pDel.onclick = () => {
    if (confirm("Are you sure about deleting this project?")) {
      prodel(project);
      pDel.parentNode.remove();
      if (maintask.getAttribute("current") == project.name) {
        mainname.innerHTML = "";
        maindescription.innerHTML = "";
        maintask.innerHTML = "";
      }
    }
  };
  pText.classList.add("pText");
  pDel.classList.add("delete-button");
  pDiv.classList.add("pDiv");
  pDiv.appendChild(pText);
  pDiv.appendChild(pDel);
  projectlist.appendChild(pDiv);
}

function renderProjectHeader(name, description) {
  mainname.innerHTML = name;
  maindescription.innerHTML = description;
}

function renderNewTask(project) {
  const newtask = document.createElement("div");
  newtask.classList.add("newtask");

  const nameLabel = document.createElement("p");
  nameLabel.innerText = "Task Name:";
  const dateLabel = document.createElement("p");
  dateLabel.innerText = "Due Date:";

  const taskNameInput = document.createElement("Input");
  taskNameInput.classList.add("task-name-input");

  const taskDateInput = document.createElement("input");
  taskDateInput.type = "date";
  taskDateInput.classList.add("task-date-input");
  taskDateInput.valueAsDate = new Date();

  const addButton = document.createElement("button");
  addButton.classList.add("TaskButton");
  addButton.type = "button";
  addButton.innerText = "Add";
  addButton.onclick = () => {
    var dateArr = taskDateInput.value.split("");
    var arrangedDate = [
      //date rearrangement
      dateArr[8],
      dateArr[9],
      "-",
      dateArr[5],
      dateArr[6],
      "-",
      dateArr[0],
      dateArr[1],
      dateArr[2],
      dateArr[3],
    ].join("");

    if (checkTask(project, taskNameInput.value, taskDateInput.value)) {
      var newtask = project.tasks(false, taskNameInput.value, arrangedDate);
      project.taskAppend(newtask);
      renderTasks(project, newtask);
      taskNameInput.value = "";
    }
  };

  newtask.appendChild(nameLabel);
  newtask.appendChild(taskNameInput);
  newtask.appendChild(dateLabel);
  newtask.appendChild(taskDateInput);
  newtask.appendChild(addButton);
  maintask.appendChild(newtask);
}

function renderTasks(project, task) {
  const taskInfo = document.createElement("div");
  taskInfo.classList.add("task");

  const taskCheck = document.createElement("input");
  taskCheck.classList.add("checkbox");
  taskCheck.type = "checkbox";
  taskCheck.checked = task.check;
  taskCheck.onchange = () => {
    savecheck(task, taskCheck.checked);
  };

  const taskName = document.createElement("div");
  taskName.classList.add("task-name");
  taskName.innerText = task.taskDescription;

  const taskDate = document.createElement("div");
  taskDate.classList.add("task-date");
  taskDate.innerText = task.date;

  const taskDelete = document.createElement("div");
  taskDelete.classList.add("delete-button");
  taskDelete.innerText = "X";
  taskDelete.onclick = () => {
    taskDelete.parentNode.remove();
    project.taskRemove(task);
  };

  taskInfo.appendChild(taskCheck);
  taskInfo.appendChild(taskName);
  taskInfo.appendChild(taskDate);
  taskInfo.appendChild(taskDelete);
  maintask.appendChild(taskInfo);
}

export { renderProject };
