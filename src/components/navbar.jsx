import { NavLink } from "react-router-dom";

function open() {
    const form = document.querySelector("form")
    form.style.display = "block"
  }

export default function Navbar() {
    return (
    <>
        <h2 className="logo">ProjectSituation</h2>
        <nav className="navbar">
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <a href="http://10.0.0.68:5000/"><li>API-docs</li></a>
            </ul>
            <button id="new-task" onClick={open}>Add New Task</button> 
        </nav>
    </>
    );
    }