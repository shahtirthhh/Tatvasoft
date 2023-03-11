import React, { useEffect } from 'react'

function Box() {
    useEffect(() => {
        console.log("ran")
        return () => {
            console.log('Unmounted');
        }
    }, [])
    return <div>Hello</div>
}

export default Box