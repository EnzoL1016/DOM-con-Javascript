import { addTask } from "./js/addTask.js";
import { readTasks } from "./js/readTask.js";

const btn = document.querySelector("[data-form-btn]");
btn.addEventListener('click', (addTask));
    
readTasks();
