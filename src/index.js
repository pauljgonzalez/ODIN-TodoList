import "./styles.css";
import {toggleMode} from "./toggleMode.js";
import {newTask} from "./tasks.js";
import {projectManager} from "./projects.js";
import {newModal} from "./modal.js";
import {updateProjectsDOM} from "./addProjectsToDOM.js";

document.querySelector(".tog").addEventListener("click",() =>{
    toggleMode();
});

document.querySelector("#newTask").addEventListener("click",() => {
    newModal("Task");
})

projectManager.newProject("General"); 

newTask(projectManager.getProjects()[0].id, "Test")

console.log(projectManager.getProjects()[0].tasks)

projectManager.newProject("Test1");

updateProjectsDOM()