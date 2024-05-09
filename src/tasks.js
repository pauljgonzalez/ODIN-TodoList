import { v4 as uuidv4 } from 'uuid';
import {projectManager} from "./projects.js";

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

