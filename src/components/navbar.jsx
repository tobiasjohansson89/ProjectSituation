import { NavLink } from "react-router-dom";

function login() {
    const formContainer = document.querySelector(".form-container");
    const loginForm = document.getElementById("login-form");
    formContainer.style.display = "block";
    loginForm.style.display = "block";
  }

export default function Navbar() {
    return (
        <>
            <div className="flex-wrap">
                <p>Project situation</p>
                <nav className="navbar">
                    <ul className="navlist">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><a href="http://10.0.0.68:5000/">API-docs</a></li>
                        <li><button onClick={login}>Login <i className="fa-solid fa-lock-open"></i></button></li>
                    </ul> 
                </nav>
            </div>
        </>
    );
    }