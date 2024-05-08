import { v4 as uuidv4 } from 'uuid';
import {newTask} from "./tasks.js"


export const projectManager = (function() {
    // Private variables
    const projects = [];
    

    // Public functions exposed via returned object
    function getProjects() {
        return projects.slice(); // Return a copy of projects to prevent direct modification
    }

    function newProject(name) {
        const project = {
            name: name,
            id: uuidv4(),
            tasks: []
        };
        projects.push(project);
    }

    // Return only necessary functions
    return {
        getProjects,
        newProject
    };
    
})();

