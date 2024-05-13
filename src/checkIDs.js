export function getProject(projectID){
    const projects = projectManager.getProjects()
    projects.forEach((project,index) => {
        if(project.id === projectID){
            return index
        }
    });
}

export function getTask(projectID){
    const projects = projectManager.getProjects()
    projects.forEach((project) => {
        if(project.id === projectID){
            const tasks = project.tasks;
            tasks.forEach((task,index) =>{
                if(task.id === taskID){
                    return index
                }
            })
        }
    });
}

//can use that index to edit text and description


let projectId = "";
let taskId = "";

export const getProjID = () => {
    return projectId;
};

export const getTaskID = () => {
    return taskId;
};

export const setProjID = (projID) => {
    projectId = projID;
};

export const setTaskID = (taskID) => {
    taskId = taskID;
};