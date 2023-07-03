function openTaskForm() {

    const form = document.querySelector("form");
    form.style.display = "block";
}

export function NewTaskBtn() {
    
    return(
        <button onClick={openTaskForm}>New task <i className="fa-regular fa-pen-to-square"></i></button>
    )
}