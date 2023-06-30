import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./assets/fontawsome/css/all.css";
import { TasksContextProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </React.StrictMode>,
)
