export function createProjectDIV(name,id){
    const newDIV = document.createElement("div");
    newDIV.className = "project";
    newDIV.id = id;
    newDIV.innerHTML = name;
    return newDIV;
}

export function createProjectDIVTaskNumber(){

}