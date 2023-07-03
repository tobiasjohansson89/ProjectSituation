import { NavLink } from "react-router-dom";

function login() {
    console.log("work in progress")
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
            <button onClick={login}>Login</button> 
        </nav>
    </>
    );
    }