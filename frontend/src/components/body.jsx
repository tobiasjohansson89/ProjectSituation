import Header from "./header";
import Card from "./card";
import { TaskForm } from "./task-form";

export default function Body() {
    return (
    <div>
        <Header />
        <main>
            <TaskForm />
            <Card />
        </main>
    </div>
    );
    }