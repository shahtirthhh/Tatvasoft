import React, { useState, useEffect } from 'react'
import axios from 'axios';
function PostDetail() {
    const [id, setId] = useState(1);
    const [post, changePost] = useState({})
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                changePost(res.data);
            })
    }, [])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                changePost(res.data);
            })
    }, [id])
    return (
        <div>
            <h1>Post Details</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <input type="text" placeholder="id" onChange={e => setId(e.target.value)}></input>
        </div>
    )
}

export default PostDetail