import {projectManager} from "./projects.js";
import {createProjectDIV} from "./createElements.js";

function createProjectFrag(){
    const projects = projectManager.getProjects()
    const frag = new DocumentFragment();
    projects.forEach((project) => {
        const div = createProjectDIV(project.name,project.id);
        frag.append(div)
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
    document.querySelector('#projects').append(frag)
}


