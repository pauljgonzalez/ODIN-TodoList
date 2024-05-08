import "./styles.css";
import {toggleMode} from "./toggleMode.js";
import {newTask} from "./tasks.js";
import {projectManager} from "./projects.js";
import {newModal} from "./modal.js";
import {updateProjectsDOM, updateTaskModal} from "./addProjectsToDOM.js";

document.querySelector(".tog").addEventListener("click",() =>{
    toggleMode();
});
document.querySelector("#newTask").addEventListener("click",() => {
    newModal("Task");
})
document.querySelector("#newTask").addEventListener("click",() =>{
    document.querySelector("#newTaskModal").showModal();
})
document.querySelector(".close-button").addEventListener("click",() =>{
    document.querySelector("#newTaskModal").close();
})
document.querySelector("#newProject").addEventListener("click",() =>{
    document.querySelector("#newProjectModal").showModal();
})
document.querySelector(".close-button").addEventListener("click",() =>{
    document.querySelector("#newProjectModal").close();
})

projectManager.newProject("General"); 

newTask(projectManager.getProjects()[0].id, "Test")

console.log(projectManager.getProjects()[0].tasks)

projectManager.newProject("Test1");
projectManager.newProject("Test2");

updateProjectsDOM()
updateTaskModal()