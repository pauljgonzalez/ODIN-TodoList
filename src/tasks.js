import { v4 as uuidv4 } from 'uuid';
import {projectManager} from "./projects.js";

export class Task{
    constructor(name){
        this.name = name;
        this.id = uuidv4();
    }
}

//loop through each project and check for id. if id matches add task
export function newTask(projectID,taskName){
    const projects = projectManager.getProjects();
    projects.forEach((project) => {
        if(project.id === projectID){
           //console.log(project.tasks)
            const addTask = new Task(taskName)
            project.tasks.push(addTask)
        }
    });

}

