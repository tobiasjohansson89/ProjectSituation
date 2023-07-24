function openTaskForm() {
    const formContainer = document.querySelector(".form-container");
    const taskForm = document.getElementById("task-form");
    formContainer.style.display = "block";
    taskForm.style.display = "block";
}

export function NewTaskBtn() {
    
    return(
        <button onClick={openTaskForm}>New task <i className="fa-regular fa-pen-to-square"></i></button>
    )
}