import Header from "../components/header";
import Card from "../components/card";
import { TaskForm } from "../components/task-form";
import { Link } from "react-router-dom";

export default function Home() {
    return (
    <div>
        <Header />
        <main>
          <div className="form-container">
             <TaskForm></TaskForm>
          </div>
          <div className="cards-container">
            <Link to="DetailsPage"><Card></Card></Link>
          </div>
        </main>
    </div>
    );
    }