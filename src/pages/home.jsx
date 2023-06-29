import Card from "../components/card";
import { TaskForm } from "../components/task-form";
// import { useState } from "react";

export default function Home() {

  // const [tasks, setTasks] = useState([]);
  
    return (
    <div>
        <main>
          <div className="form-container">
             <TaskForm />
          </div>
            <Card />
        </main>
    </div>
    );
}