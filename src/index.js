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
document.querySelector("#newTaskModal>.modal-container>.close-button").addEventListener("click",() =>{
    document.querySelector("#newTaskModal").close();
})
document.querySelector("#newProject").addEventListener("click",() =>{
    document.querySelector("#newProjectModal").showModal();
})
document.querySelector("#newProjectModal>.modal-container>.close-button").addEventListener("click",() =>{
   document.querySelector("#newProjectModal").close();
})
document.querySelector("#addProjectButton").addEventListener("click",() =>{
    let title = document.querySelector("#projectTitle")
    let description = document.querySelector("#projectDescription")
    if(title.value == "" || description.value == ""){
        return false
    }
    projectManager.newProject(title.value); 
    updateProjectsDOM()
    updateTaskModal()
    document.querySelector("#newProjectModal").close();
})


projectManager.newProject("General","General Tasks Go Here"); 
document.querySelector("#updateProjectTitle").innerHTML = projectManager.getProjects()[0].name
document.querySelector("#updateProjectDescription").innerHTML = projectManager.getProjects()[0].description
newTask(projectManager.getProjects()[0].id, "Test")
//console.log(projectManager.getProjects()[0].tasks)
updateProjectsDOM()
updateTaskModal()

