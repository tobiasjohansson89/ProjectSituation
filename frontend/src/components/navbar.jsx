import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
    <>
        <h2 className="logo">ProjectSituation</h2>
        <nav className="navbar">
            <ul>
                <NavLink to="/frontend/"><li>Home</li></NavLink>
                <NavLink to="/"><li>About</li></NavLink>
            </ul>
            <button id="new-task">Add New Task</button> 
        </nav>
    </>
    );
    }