import { NavLink } from "react-router-dom";

function login() {
    console.log("work in progress")
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