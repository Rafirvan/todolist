import { projects } from "./object";
import { renderProject } from "./ui";

let projectArr = [];

function load() {
  if (localStorage.getItem("projectArr") == null)
    localStorage.setItem("projectArr", "[]");
  let projectArrSaved = JSON.parse(localStorage.getItem("projectArr"));
  console.log(projectArrSaved);
  projectArrSaved.forEach((e) => {
    console.log(e);
    var parsed = projects(e.name, e.description);

    e.taskArr.forEach((task) => {
      var parsetask = parsed.tasks(task.check, task.taskDescription, task.date);
      parsed.taskAppend(parsetask);
    });
    projectArr.push(parsed);
  });
  projectArr.forEach((e) => {
    renderProject(e);
  });

  return { projectArr };
}

function save() {
  localStorage.setItem("projectArr", JSON.stringify(projectArr));
}

function checkProject(name, description) {
  let projectArrClone = [...projectArr];
  let projectNames = [];
  projectArrClone.forEach((e) => {
    projectNames.push(e.name);
  });

  if (name == "" || description == "") {
    alert("Input required");
    return false;
  } else if (projectNames.includes(name)) {
    alert("Duplicate project name is not allowed");
    return false;
  } else return true;
}

function checkTask(project, name, date) {
  let taskArrClone = [...project.taskArr];
  console.log(taskArrClone);
  let taskNames = [];
  taskArrClone.forEach((e) => {
    taskNames.push(e.taskDescription);
  });

  if (name == "" || date == "") {
    alert("Empty input field");
    return false;
  } else if (taskNames.includes(name)) {
    alert("Duplicate task names are not allowed");
    return false;
  } else return true;
}

function pushToPrAr(newP) {
  projectArr.push(newP);
  save();
}

function prodel(project) {
  for (var i = 0; i < projectArr.length; i++) {
    if (projectArr[i].name === project.name) {
      projectArr.splice(i, 1);
      save();
    }
  }
}

function savecheck(task, check) {
  task.check = check;
  save();
}

export {
  projectArr,
  load,
  save,
  checkProject,
  pushToPrAr,
  prodel,
  checkTask,
  savecheck,
};
