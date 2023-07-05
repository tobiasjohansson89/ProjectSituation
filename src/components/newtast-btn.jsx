function openTaskForm() {
    const formContainer = document.querySelector(".form-container");
    const form = document.querySelector("form");
    formContainer.style.display = "block";
    form.style.display = "block";
}

export function NewTaskBtn() {
    
    return(
        <button onClick={openTaskForm}>New task <i className="fa-regular fa-pen-to-square"></i></button>
    )
}