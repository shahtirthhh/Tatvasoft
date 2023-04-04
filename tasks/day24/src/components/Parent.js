import React from 'react'
import { ChildA } from './Children'

export const CountContext = React.createContext()


function Parent() {
    const [count, setCount] = React.useState(0)
    console.log("Parent rendered")
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <CountContext.Provider value={count}>
                <ChildA />
            </CountContext.Provider>
        </div>
    )
}

export default Parent