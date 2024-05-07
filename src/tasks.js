import { v4 as uuidv4 } from 'uuid';


export function newTask(){
    
}

export class Task{
    constructor(name){
        this.name = name;
        this.id = uuidv4();
    }
}
