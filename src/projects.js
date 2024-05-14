import { v4 as uuidv4 } from 'uuid';
import {newTask} from "./tasks.js"
import {updateProjectsDOM, updateTaskModal} from "./addProjectsToDOM.js";
import {updateTasksDOM} from "./addTasksToDOM.js";

export const projectManager = (function() {
    // Private variables
    const projects = [];
    

    // Public functions exposed via returned object
    function getProjects() {
        return projects.slice(); // Return a copy of projects to prevent direct modification
    }

    function newProject(name, description) {
        const project = {
            name: name,
            id: uuidv4(),
            tasks: [],
            description: description
        };
        projects.push(project);
    }
    function removeProject(ID){
        // console.log(ID)
        projects.forEach((project,index)=>{
            if(project.id === ID){
                projects.splice(index,1)
                updateProjectsDOM()
                updateTaskModal()
                document.querySelectorAll(".taskContainer").forEach(e => e.remove());
                if(projects.length === 0){
                    document.querySelector("#updateProjectTitle").innerHTML="Make a New Project"
                    document.querySelector("#updateProjectDescription").innerHTML=""
                }
                else{
                    document.querySelector("#updateProjectTitle").innerHTML=projects[0].name
                    document.querySelector("#updateProjectDescription").innerHTML=projects[0].description
                    document.querySelector(".projectTitleArea").firstChild.className = projects[0].id
                    updateTasksDOM(projects[0].id)
                }
                
                
            }
        })
    }

    // Return only necessary functions
    return {
        getProjects,newProject,removeProject
    };
    
})();


