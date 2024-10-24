import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks && storedTasks.length > 0) {
            setTasks(storedTasks)
        }

    }, []);
    useEffect(() => {
        if (tasks.length > 0)
            localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
    }
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    };
    const updateTask = (id, updatedTask) => {
        const newTasks = tasks.map(task => (task.id === id ? updatedTask : task));
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };
    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
            {children}

        </TaskContext.Provider>
    )
}