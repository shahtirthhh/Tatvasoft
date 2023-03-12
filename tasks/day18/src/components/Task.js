import React from 'react'

function Task(props) {
    const { task, change } = props
    return (
        <div>
            <h3 onDoubleClick={() => change(task.task)}>{task.task}  \\  Double Click to change</h3>
            {task.done ? <p>Done</p> : <p>Pending</p>}
        </div>
    )
}

export default Task