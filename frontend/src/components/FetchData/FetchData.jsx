import React, { useState, useEffect } from 'react'
import axios from 'axios'
function FetchData() {
    const [article, setArticle] = useState([])
    const [id, setId] = useState(1)
    
    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res.data)
            setArticle(res.data)
        })
        .catch(e => console.log(e))
    }, [id])
    
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
        </div>
    )
}

export default FetchData
