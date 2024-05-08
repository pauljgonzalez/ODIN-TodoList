import {projectManager} from "./projects.js";
import {createProjectDIV} from "./createElements.js";


export function updateProjectsDOM(){
    const projects = projectManager.getProjects()
    const frag = new DocumentFragment();
    
    projects.forEach((project) => {
        const div = createProjectDIV(project.name,project.id);
        frag.append(div)
    });
    document.querySelector('#projects').append(frag)
}


// createProjectDIV(project,project.id)