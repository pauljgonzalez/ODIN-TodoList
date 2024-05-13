import "./styles.css";
import {toggleMode} from "./toggleMode.js";
import {newTask,editTask} from "./tasks.js";
import {projectManager} from "./projects.js";
import {updateProjectsDOM, updateTaskModal} from "./addProjectsToDOM.js";
import {updateTasksDOM} from "./addTasksToDOM.js";
import {getParentID} from "./getDOM.js";
import {getProjID, getTaskID, setProjID, setTaskID} from "./checkIDs.js";
let parentElementId;
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
            document.querySelector("#updateProjectTitle").className = id.value
            document.querySelector("#updateProjectTitle").innerHTML = project.name
            document.querySelector("#updateProjectDescription").innerHTML = project.description
        }
    })
})
document.getElementById('newTaskModal').addEventListener("close", () =>{
    document.querySelector("#taskForm").reset() 
});


projectManager.newProject("General","This is where the description goes"); 
document.querySelector("#updateProjectTitle").innerHTML = projectManager.getProjects()[0].name
document.querySelector("#updateProjectDescription").innerHTML = projectManager.getProjects()[0].description
document.querySelector("#updateProjectTitle").className = projectManager.getProjects()[0].id
setProjID(projectManager.getProjects()[0].id)
newTask(projectManager.getProjects()[0].id, "This is where Task Titles Go", "This is where Task descriptions go")
updateProjectsDOM()
updateTaskModal()
updateTasksDOM(projectManager.getProjects()[0].id)

// document.querySelectorAll(".editTaskButton").addEventListener("click",(event) =>{
//     console.log(event.target.parentNode.id)
//     d
    
// })
document.getElementById('editTaskModal').addEventListener("close", () =>{
    document.querySelector("#editTaskForm").reset() 
});
document.querySelector("#editTaskModal>.modal-container>.close-button").addEventListener("click",() =>{
    document.querySelector("#editTaskModal").close();
 })
document.getElementById("editTaskButtonForm").addEventListener("click", () =>{
    //submit change
    let title = document.querySelector("#editTaskTitle").value
    let description = document.querySelector("#editTaskDescription").value
    let priority 
    if(title == "" || description == ""){
        return false
    }
    editTask(title,description,priority,document.querySelector("#updateProjectTitle").className,getTaskID());
    const container = document.getElementById(getTaskID());
    const projects = projectManager.getProjects();
    projects.forEach((project) =>{
        if(project.id === document.querySelector("#updateProjectTitle".className)){
            const tasks = project.tasks;
            tasks.forEach((task)=>{
                if (task.id === getTaskID()){
                    container.querySelector('.taskTitle').innerHTML  = task.title
                    container.querySelector('.taskDescription').innerHTML = task.descriptio
                }
            })
        }
    })
    updateTasksDOM(document.querySelector("#updateProjectTitle").className)
})

