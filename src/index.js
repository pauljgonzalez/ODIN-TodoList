import "./styles.css";
import {toggleMode} from "./toggleMode.js";
import {newTask} from "./tasks.js";
import {projectManager} from "./projects.js";
import {newModal} from "./modal.js";
import {updateProjectsDOM, updateTaskModal} from "./addProjectsToDOM.js";
import {updateTasksDOM} from "./addTasksToDOM.js";

document.querySelector(".tog").addEventListener("click",() =>{
    toggleMode();
});
document.querySelector("#newTask").addEventListener("click",() => {
    //newModal("Task");
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
    projectManager.newProject(title.value,description.value);  
    updateProjectsDOM()
    updateTaskModal()
    document.querySelector("#newProjectModal").close();
})
document.getElementById('newProjectModal').addEventListener("close", () =>{
    document.querySelector("#projectForm").reset() 
});
document.querySelector("#addTaskButton").addEventListener("click",() =>{
    let title = document.querySelector("#taskTitle")
    let description = document.querySelector("#taskDescription")
    let id = document.querySelector("#taskProject")
   if(title.value == "" || description.value == ""){
       return false
    }
    const projects = projectManager.getProjects()
    projects.forEach((project) =>{
        if(project.id === id.value){
            newTask(project.id,title.value,description.value)
            updateTasksDOM(project.id)
            document.querySelector("#updateProjectTitle").innerHTML = project.name
            document.querySelector("#updateProjectDescription").innerHTML = project.description
        }
    })
})
document.getElementById('newTaskModal').addEventListener("close", () =>{
    document.querySelector("#taskForm").reset() 
});


projectManager.newProject("General","General Tasks Go Here"); 
document.querySelector("#updateProjectTitle").innerHTML = projectManager.getProjects()[0].name
document.querySelector("#updateProjectDescription").innerHTML = projectManager.getProjects()[0].description
newTask(projectManager.getProjects()[0].id, "This is where Titles Go", "This is where descriptions go")
newTask(projectManager.getProjects()[0].id, "This is where Titles Go", "This is where descriptions go")
//console.log(projectManager.getProjects()[0].tasks[0])
updateProjectsDOM()
updateTaskModal()
updateTasksDOM(projectManager.getProjects()[0].id)

