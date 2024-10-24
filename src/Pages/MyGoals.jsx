import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

export const MyGoals = () => {
    const { tasks, updateTask } = useContext(TaskContext);
    const [wellDoneMessage, setWellDoneMessage] = useState(false);

    const increaseSpentTime = (id) => {
        const task = tasks.find(task => task.id === id);
        if (task) {
            const newTimeSpent = task.timeSpent + 30;


            if (newTimeSpent >= task.planedTime && !task.done) {
                setWellDoneMessage(true);
                updateTask(id, { ...task, timeSpent: newTimeSpent, done: true });
            } else {
                updateTask(id, { ...task, timeSpent: newTimeSpent });
            }
        }
    };

    const decreaseTimeSpent = (id) => {
        const task = tasks.find(task => task.id === id);
        if (task) {
            const newTimeSpent = task.timeSpent > 30 ? task.timeSpent - 30 : 0;
            updateTask(id, { ...task, timeSpent: newTimeSpent });
        }
    };

    useEffect(() => {
        if (wellDoneMessage) {
            const timer = setTimeout(() => {
                setWellDoneMessage(false);
            }, 1300);
            return () => clearTimeout(timer);
        }
    }, [wellDoneMessage]);

    return (
        <>
            {wellDoneMessage && (
                <div className="well-done-message">
                    <h1 className="congrats-message">Well Done!</h1>
                </div>

            )}


            <h2 className="my-goals-title">My Goals</h2>


            <div className="my-goals-page">

                {tasks.map(task => (
                    <div key={task.id} className="tasks-container">

                        <h2>
                            {task.text}
                        </h2>
                        <h4>time planned: {task.planedTime}min</h4>
                        <input type="text"
                            readOnly
                            placeholder={`${task.timeSpent} mins`}
                            style={{
                                color: 'white',
                                background: `linear-gradient(to right,#6E415C ${task.timeSpent / 2}%,white 5%)`
                            }} />
                        <div className="spent-time-buttons">
                            <button type="button" onClick={() => decreaseTimeSpent(task.id)}>
                                -30min
                            </button>
                            <button type="button" onClick={() => increaseSpentTime(task.id)}>
                                +30min
                            </button>
                        </div>
                    </div>

                ))}
            </div>










        </>
    );
};