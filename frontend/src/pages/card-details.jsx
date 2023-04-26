import CardDetails from "./card-details";
import { TaskForm } from "../components/task-form";
import { BrowserRouter, Routes, Route, Navigate, NavLink} from 'react-router-dom'

export default function DetailsPage() {
    return (
    <div>
        <Header />
        <main>
            <TaskForm />
            <BrowserRouter>
            <div className="pages">
                <h1>Ello</h1>
                <Routes>
                    <Route 
                      path="/"
                      element={<NavLink><Card></Card></NavLink>}
                    />
                    <Route 
                      path="/"
                      element={<CardDetails></CardDetails>}
                    />
                </Routes>
            </div>
            </BrowserRouter>
        </main>
    </div>
    );
    }