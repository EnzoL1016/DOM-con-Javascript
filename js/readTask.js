import { createTask } from "./addTask.js";
<<<<<<< HEAD
import { uniqueDate,orderDates} from "../services/date.js";
import dateElement from "./dateElement.js";

export const displayTasks = () =>{
    const list = document.querySelector('[data-list]');
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || []; 
    const dates = uniqueDate(tasksList);
    orderDates(dates);

    dates.forEach((date)=>{
        list.appendChild(dateElement(date));
        const dateMoment = moment(date,'DD/MM/YYYY');
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat,'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);
            if(diff == 0){
                list.appendChild(createTask(task));
            };
        });
    });

}

=======
import dateElement from "./dateElement.js";

export const readTasks = () =>{
    const list = document.querySelector('[data-list]');
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || []; 
    tasksList.forEach((task) => {
        list.appendChild(dateElement(task.dateFormat))
        list.appendChild(createTask(task));
    });
}
>>>>>>> ef5839d93ee8f91cc98f3d8e35a36fc55846cfa7
