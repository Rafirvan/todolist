import { save } from "./logic";

var projects = (name, description) => {
  var tasks = (check, taskDescription, date) => {
    return { check, taskDescription, date };
  };

  let taskArr = [];
  var taskAppend = (newtask) => {
    taskArr.push(newtask);
    save();
    console.log(taskArr);
  };

  var taskRemove = (removedTask) => {
    for (var i = 0; i < taskArr.length; i++) {
      if (taskArr[i].taskDescription === removedTask.taskDescription) {
        taskArr.splice(i, 1);
        save();
      }
    }
  };

  return { name, description, taskArr, tasks, taskAppend, taskRemove };
};

export { projects };
