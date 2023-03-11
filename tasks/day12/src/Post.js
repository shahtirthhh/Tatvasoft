import React, { useState } from 'react'
import axios from 'axios';
function Post() {
    const [id, setId] = useState(0)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [sent, setSent] = useState(0)
    const submit = (e) => {
        e.preventDefault();
        let post = {
            id: id,
            title: title,
            body: body
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', post)
            .then((res) => {
                if (res.status === 201) {
                    setSent(1)
                    console.log(sent)
                }
            })
            .catch(err => {
                console.log(err)
                setSent(0);
            })
    }
    return (
        <div>
            <form>
                <input onChange={(e) => setId(e.target.value)} type="number" min='0' placeholder='User Id'></input>
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title'></input>
                <input onChange={(e) => setBody(e.target.value)} type="text" placeholder='Body'></input>
                <input type="submit" onClick={submit} />
            </form>
        </div>
    )
}

export default Post