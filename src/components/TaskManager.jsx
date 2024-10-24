import { useContext, useState } from "react"
import { TaskContext } from "../contexts/TaskContext"
import { MdDeleteForever } from "react-icons/md";
export const TaskManager = () => {
    const { tasks, addTask, deleteTask } = useContext(TaskContext);
    const [planedTime, setPlanedTime] = useState(0);
    const [text, setText] = useState('')
    const addTime = () => {
        setPlanedTime((prevTime) => prevTime + 30)
    }
    const decreaseTime = () => {
        setPlanedTime((prevTime) =>
            prevTime - 30 > 0 ? prevTime - 30 : 0)
    }
    const handleChange = (evt) => {
        setText(evt.target.value)
        console.log(text)
    }

    const handleAddTask = (e) => {
        e.preventDefault()
        if (!text || !planedTime) {
            alert('add a task and a time')
            return
        }
        const id = Date.now().toString();
        const newTask = {
            id,
            text,
            planedTime,
            timeSpent: 0,
            done: false


        };
        // console.log(id)
        addTask(newTask);
        setText(''),
            setPlanedTime(0)


    }
    return (<>
        <div className="add-task">
            <form action="" onSubmit={handleAddTask}>
                <label htmlFor="text-input">Set your Goals for the day</label>
                <input type="text"
                    value={text}
                    onChange={handleChange}
                    id="text-input"
                />
                <input type="text" readOnly
                    placeholder={`${planedTime} minutes`}
                    style={{
                        color: 'white',
                        background: `linear-gradient(to right,
                        #6E415C ${planedTime / 2}%,
                 white 5%)`
                    }} />
                <div className="edit-time-buttons">
                    <button type='button' onClick={decreaseTime}>-30 min</button>

                    <button type='button' onClick={addTime}> +30 min</button>
                </div>
                <button type="submit">ADD Task</button>
            </form>
        </div>
        <div className="added-tasks-home">
            {tasks.map(task => (
                <div key={task.id} className="single-added-task-home">
                    <h1>{task.text} </h1>
                    <h4>{task.planedTime} min</h4>
                    <button type="button" onClick={() => deleteTask(task.id)}><MdDeleteForever /></button>

                </div>
            ))}
        </div>

    </>)




}