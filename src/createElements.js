export function createProjectDIV(name,id){
    const newDIV = document.createElement("div");
    newDIV.className = "project";
    newDIV.id = id;
    newDIV.innerHTML = name;
    return newDIV;
}

export function createProjectButton(name,id){
    const newButton = document.createElement("button");
    newButton.className = "project";
    newButton.id = id;
    newButton.innerHTML = name;
    return newButton;
}

