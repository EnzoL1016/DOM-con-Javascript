<<<<<<< HEAD
import { uniqueDate } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTask.js";
=======
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

>>>>>>> ef5839d93ee8f91cc98f3d8e35a36fc55846cfa7

export const addTask = (evento) =>{
    evento.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;
    const date = calendar.value;
<<<<<<< HEAD
    const dateFormat = moment(date).format('DD/MM/YYYY HH:mm:ss');
=======
    const dateFormat = moment(date).format('DD/MM/YYYY');
>>>>>>> ef5839d93ee8f91cc98f3d8e35a36fc55846cfa7
    
    if(value == "" || date == ""){
        return;
    }


    calendar.value = "";
    input.value = "";
<<<<<<< HEAD

    const complete = false;

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4(),
    };
    list.innerHTML ='';
=======
    const taskObj = {
        value,
        dateFormat,
    };
>>>>>>> ef5839d93ee8f91cc98f3d8e35a36fc55846cfa7

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push(taskObj);
    localStorage.setItem('tasks',JSON.stringify(taskList));

<<<<<<< HEAD
    displayTasks();
}


export const createTask = ({value,dateFormat, complete,id}) => {  
    const task = document.createElement('li');
        task.classList.add('card');

        const check = checkComplete(id);
        if(complete){
            check.classList.toggle('fas');
            check.classList.toggle('completeIcon');
            check.classList.toggle('far');
        }

=======
    const task = createTask(taskObj);
    list.appendChild(task);
}


export const createTask = ({value,dateFormat}) => {  
    const task = document.createElement('li');
        task.classList.add('card');

>>>>>>> ef5839d93ee8f91cc98f3d8e35a36fc55846cfa7
    const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;

    const taskContent = document.createElement('div');
<<<<<<< HEAD
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);

    const dateElement = document.createElement('span');
        dateElement.innerHTML = moment(dateFormat,'DD/MM/YYYY HH:mm:ss').format('HH:mm');
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon(id));
=======
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);

    const dateElement = document.createElement('span');
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon());
>>>>>>> ef5839d93ee8f91cc98f3d8e35a36fc55846cfa7
    return task;
};