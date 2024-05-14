import {projectManager} from "./projects.js";
import {createProjectDIV,createProjectButton,createProjectDivNoID,createTaskstDIV,createTaskstDIVNoID,createTaskCloseButton,createTaskNoInner,createEditTaskButton} from "./createElements.js";
import {removeTask} from "./tasks.js";

function createTaskFrag(ID){
    const projects = projectManager.getProjects()
    const frag = new DocumentFragment();
    projects.forEach((project) => {
        if (project.id === ID){
            const tasks = project.tasks
            tasks.forEach((task) =>{
                const container = createTaskNoInner("taskContainer",task.id);
                const taskTitle = createTaskstDIVNoID("taskTitle",task.title);
                const taskDescription = createTaskstDIVNoID("taskDescription",task.description);
                const taskButton = createTaskCloseButton();
                const editButton = createEditTaskButton();
                let prioInner = task.priority;
                if(task.priority == "priorityNormal"){
                    prioInner = "Normal Priority";
                }
                if(task.priority == "priorityHigh"){
                    prioInner = "High Priority";
                }
                if(task.priority == "priorityLow"){
                    prioInner = "Low Priority";
                }
                const taskPrio = createTaskstDIVNoID("taskPriority",prioInner)
                container.classList.add(task.priority)
                container.append(taskTitle);
                container.append(taskDescription);
                container.append(taskButton)
                container.append(editButton)
                container.append(taskPrio)
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