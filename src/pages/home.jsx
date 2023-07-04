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

   //Makes sure tasks are done loading before render?
  const getTasks = async () => {
    return await new Promise((resolve) => resolve(data))
  }
  useEffect(() => {
    getTasks().then(dispatch({type: "SET_TASKS", payload: data}))
  }, [data])
  //Re-render for every dispatch?
  useEffect(() => {
    dispatch({type: "SET_TASKS", payload: data})
  }, [dispatch]);
  // console.log(tasks)
  try {

    if(loading) {
      return(
        <p>loading</p>
      )
    }
    if(error) {
      return(
        <p>error</p>
      )
    }
    if(data) {
      return (
        <main>
          <NewTaskBtn />
          <div className="form-container">
            <TaskForm />
          </div>
          <div>
            {tasks && tasks.map(task => (
              <TasksList task={task} key={task._id.$oid} />
            ))}
          </div>
      </main>
      );
    }
  } catch (error) {
    console.log(error)
  }
}