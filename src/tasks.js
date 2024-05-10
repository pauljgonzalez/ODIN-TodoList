import { v4 as uuidv4 } from 'uuid';
import {projectManager} from "./projects.js";
import {getProject,getTask} from "./checkIDs.js"

export class Task{
    constructor(title,description){
        this.title = title;
        this.id = uuidv4();
        this.description = description;
    }
}
//loop through each project and check for id. if id matches add task
export function newTask(projectID,taskName,description){
    const projects = projectManager.getProjects();
    projects.forEach((project) => {
        if(project.id === projectID){
           //console.log(project.tasks)
            const addTask = new Task(taskName,description)
            project.tasks.push(addTask)
        }
    });
}
export function removeTask(taskID){
    //console.log(taskID)
    const projects = projectManager.getProjects()
    projects.forEach((project) =>{
        if(project.id === document.querySelector("#updateProjectTitle").className){
            const tasks = project.tasks;
            tasks.forEach((task,index) =>{
                if(task.id === taskID){
                    project.tasks.splice(index,1)
                    document.getElementById(taskID).remove()
                }
            })
        }
    })
}
export function editTask(updTitle,updDescription,priority,projectID,taskID){
    const projects = projectManager.getProjects()
    projects.forEach((project) =>{
        if(project.id === projectID){
            const tasks = project.tasks;
            tasks.forEach((task)=>{
                if (task.id === taskID){
                    task.title = updTitle;
                    task.description = updDescription;
                }
            })
        }
    })
}