import Card from "../components/card";
import { TaskForm } from "../components/task-form";

export default function Home() {
  
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