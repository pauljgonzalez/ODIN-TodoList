import {removeTask} from "./tasks.js";

export function createProjectDIV(name,id){
    const newDIV = document.createElement("div");
    newDIV.className = "project";
    newDIV.id = id;
    newDIV.innerHTML = name;
    return newDIV;
}
export function createProjectDivNoID(name){
    const newDIV = document.createElement("div");
    newDIV.className = name;
    return newDIV;
}

export function createProjectButton(name,id){
    const newButton = document.createElement("button");
    newButton.className = "project";
    newButton.id = id;
    newButton.innerHTML = name;
    return newButton;
}

export function createTaskstDIV(classname,name,id){
    const newDIV = document.createElement("div");
    newDIV.className = classname;
    newDIV.id = id;
    newDIV.innerHTML = name;
    return newDIV;
}
export function createTaskstDIVNoID(classname,name){
    const newDIV = document.createElement("div");
    newDIV.className = classname;
    newDIV.innerHTML = name;
    return newDIV;
}
export function createTaskNoInner(classname,ID){
    const newDIV = document.createElement("div");
    newDIV.className = classname;
    newDIV.id = ID;
    return newDIV;
}
export function createTaskCloseButton(){
    const newButton = document.createElement("button");
    newButton.className = "taskCloseButton";
    newButton.innerHTML = "X";
    newButton.addEventListener("click",() =>{
        removeTask(newButton.parentElement.id)
    });
    return newButton;
}
