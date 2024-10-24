import { useContext } from "react"

import { TaskContext } from "../contexts/TaskContext"

export const Overview = () => {
    const { tasks } = useContext(TaskContext)


    return (<>
        <div className="overview-container" style={{ display: 'flex' }}>


            <div className="overview planed" >
                <h2>Planed tasks</h2>
                {tasks.map(task => (
                    <div key={task.id} className='overview-single'
                        style={{
                            background: `linear-gradient(to right,
                            #6E415C ${task.planedTime / 2}%,
                        white 0%)`}}>
                        <p>{task.text}</p>
                        <p>{task.planedTime} min</p></div>
                ))}

            </div>





            <div className="overview done">
                <h2>Done Tasks</h2>
                {


                    tasks.
                        filter(task => task.done === true)
                        .map(task => (
                            <div key={task.id} className='overview-single' style={{
                                background: `linear-gradient(to right, green ${task.timeSpent / 2}%,white 5%)`
                            }}>
                                <p> {task.text}</p>
                                <p>{task.timeSpent} min </p>
                            </div>
                        ))

                }

            </div>
        </div>
    </>)

}