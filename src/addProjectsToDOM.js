import {projectManager} from "./projects.js";
import {createProjectDIV,createProjectButton} from "./createElements.js";
import {updateTasksDOM} from "./addTasksToDOM.js";
import {getProjID, getTaskID, setProjID, setTaskID} from "./checkIDs.js";


function createProjectFrag(){
    const projects = projectManager.getProjects()
    const frag = new DocumentFragment();
    projects.forEach((project) => {
        const button = createProjectButton(project.name,project.id);
        button.addEventListener("click",() =>{
            //console.log(project.id)
            document.querySelector("#updateProjectTitle").innerHTML = project.name
            document.querySelector("#updateProjectTitle").className = project.id
            document.querySelector("#updateProjectDescription").innerHTML = project.description 
            setProjID(project.id)
            updateTasksDOM(project.id)
        });
        frag.append(button)
    });
    return frag;
}

export function updateTaskModal(){
    const element = document.querySelector('#taskProject');
    element.innerHTML = "";
    const projects = projectManager.getProjects();

    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.id; // Set the value to project ID (or another identifier)
        option.textContent = project.name; // Set the visible text to project name
        element.appendChild(option); // Append the option to the select element
    });
}

export function updateProjectsDOM(){
    const frag = createProjectFrag();
    document.querySelector('#projects').innerHTML = "";
    document.querySelector('#projects').append(frag)
}


