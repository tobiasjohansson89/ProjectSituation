import Header from "./header";
import Card from "./card";
import CardDetails from "./card-details";
import { TaskForm } from "./task-form";
import { BrowserRouter, Routes, Route, Navigate, NavLink} from 'react-router-dom'

export default function Home() {
    return (
    <div>
        <Header />
        <main>
            <TaskForm />
            <BrowserRouter>
            <div className="pages">
                <Routes>
                    <Route 
                      path="/frontend/"
                      element={<NavLink to="CardDetails"><Card></Card></NavLink>}
                    />
                    <Route 
                      path={"CardDetails"}
                      element={<CardDetails></CardDetails>}
                    />
                </Routes>
            </div>
            </BrowserRouter>
        </main>
    </div>
    );
    }