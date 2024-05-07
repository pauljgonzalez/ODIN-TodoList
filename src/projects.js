import { v4 as uuidv4 } from 'uuid';
import {Task} from "./tasks.js"

export function newProject(){
    
}
class Project{
    constructor(name){
        this.name = name;
        this.id = uuidv4()
        this.tasks = []
    }
}
const projects = []

projects[0] = new Project("General")
// console.log(projects[0])

projects[0].tasks.push(new Task("test"))
console.log(projects[0].tasks[0].name)
