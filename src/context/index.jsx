import { createContext, useReducer } from "react";

//https://www.youtube.com/watch?v=NKsVV7wJcDM 
export const TasksContext = createContext();

export const taskReduser = (state, action) => {
    switch (action.type) {
        case "SET_TASKS":
            return {
                tasks: action.payload,
            }
        case "CREATE_TASK":
            return {
                tasks: [action.payload, ...state.tasks]
            }
        default: 
            return state
    }
}

export const TasksContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReduser, {
        tasks: null
    });

    return (
        <TasksContext.Provider value ={{...state, dispatch}}>
            { children }
        </TasksContext.Provider>
    )
}