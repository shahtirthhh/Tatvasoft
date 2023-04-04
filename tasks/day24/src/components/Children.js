import React from 'react'
import { CountContext } from './Parent'

export function ChildA() {
    console.log("Child A rendered")

    return (
        <>
            <div>Child A</div>
            <ChildB />
        </>
    )
}
export function ChildB() {
    console.log("Child B rendered")
    return (
        <>
            <div>Child B</div>
            <ChildC />
        </>
    )
}
export function ChildC() {
    console.log("Child C rendered")
    const count = React.useContext(CountContext)
    return (
        <div>Child C count = {count}</div>
    )
}
