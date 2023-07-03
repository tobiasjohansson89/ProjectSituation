function openTaskForm() {

    const form = document.querySelector("form");
    form.style.display = "block";
}

export function NewTaskBtn() {
    
    return(
        <button onClick={openTaskForm}>Add New Task</button>
    )
}