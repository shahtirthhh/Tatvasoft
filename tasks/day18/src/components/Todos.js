import React, { useReducer } from 'react'
import Task from './Task';

function Todos() {
    const initialTodos = [
        {
            task: "Complete React Course",
            done: false
        },
        {
            task: "Complete React Native Course",
            done: true
        },
        {
            task: "Complete Machine Learning",
            done: false
        },
    ]
    const [todos, dispatch] = useReducer((state, action) => {
        console.log(state)
        console.log(action)
        return state.map((todo) => {
            if (todo.task === action) {
                return { ...todo, done: !todo.done }
            } else {
                return todo;
            }
        });
    }, initialTodos)
    return (
        <div>
            {todos.map((todo) => <Task key={todo.task} task={todo} change={dispatch} />)}
        </div>
    )
}

export default Todos