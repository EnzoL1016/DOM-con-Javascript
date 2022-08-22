const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");

const createTask = (evento) => {
    evento.preventDefault();
};

btn.addEventListener('click', (createTask));