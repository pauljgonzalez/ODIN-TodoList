import {projectManager} from "./projects.js";
import {createProjectDIV,createProjectButton,createProjectDivNoID,createTaskstDIV,createTaskstDIVNoID} from "./createElements.js";

function createTaskFrag(ID){
    const projects = projectManager.getProjects()
    const frag = new DocumentFragment();
    projects.forEach((project) => {
        if (project.id === ID){
            const tasks = project.tasks
            tasks.forEach((task) =>{
                const container = createProjectDivNoID("taskContainer")
                const taskTitle = createTaskstDIV("taskTitle",task.title,task.id)
                const taskDescription = createTaskstDIVNoID("taskDescription",task.description)
                container.append(taskTitle);
                container.append(taskDescription);
                frag.append(container)
            })
        }
    });
    return frag;
}

export function updateTasksDOM(ID){
    const frag = createTaskFrag(ID);
    document.querySelector('#tasksUpdate').innerHTML = "";
    document.querySelector('#tasksUpdate').append(frag)
}