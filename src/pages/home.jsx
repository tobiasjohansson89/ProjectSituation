import Card from "../components/card";
import { NewTaskBtn } from "../components/newtast-btn";
import { TaskForm } from "../components/task-form";
import { useTasksContext } from "../hooks/usecontext";
import useFetch from "../hooks/apicall";
import { useEffect } from "react";
import TasksList from "../components/tasks-list";

export default function Home() {

  const { tasks, dispatch } = useTasksContext();
  const {data, loading, error, responseOk} = useFetch("http://10.0.0.68:5000/tasks");

  useEffect(() => {
    const getTasks = () => {
      
      if(responseOk === true) {
        dispatch({type: "SET_TASKS", payload: data})
      }
    }
    getTasks();
  }, [dispatch]);
  // console.log(tasks)
    return (
    <div>
        <main>
          <NewTaskBtn />
          <div className="form-container">
             <TaskForm />
          </div>
          {tasks && tasks.map(task => (
            <TasksList task={task} key={task._id.$oid} />
          ))}
        </main>
    </div>
    );
}