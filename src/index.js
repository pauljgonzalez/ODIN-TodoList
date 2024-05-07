import "./styles.css";
import {toggleMode} from "./toggleMode.js";
import {newTask} from "./tasks.js";
import {newProject} from "./projects.js";
import {newModal} from "./modal.js";

document.querySelector(".tog").addEventListener("click",() =>{
    toggleMode();
});

