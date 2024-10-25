import React, { useState, useEffect } from 'react'

function Counter2() {
    const [count, setCount] = useState(0)
    const [info, setInfo] = useState({name:'', email:''})
    const [articles, setArticles] = useState(['articles1', 'articles2', 'articles3'])

    const handleClick = () => {
        setCount(count+1)
    }
    const handleLike = () => {
        setCount(count => count + 1)
    }

    const addArticle = () => {
        setArticles([...articles, 'New Article'])
    }

    useEffect(() => {
        document.title = `You have clicked ${count} times`
    }, [count])
    return ( 
        <div>
            <button onClick={() => setCount(count+1)} className='btn btn-primary'>Change title</button>
            <h2>Stakehook counter: {count}</h2>
            <button onClick={handleClick} className='btn btn-success'>increase</button>
            <button onClick={handleLike} className='btn btn-success'>likes {count}</button>

            
            <input type='text' className='form-control' value={info.name} onChange={e => setInfo({...info, name:e.target.value})}/>
            <input type='text' className='form-control' value={info.email} onChange={e => setInfo({...info, email:e.target.value})}/> 
            
            <h2>Name is: {info.name}</h2> 
            <h2>Email is: {info.email}</h2>


            <br />

            {articles.map(article => {
                return (
                    <div key={article}>
                        <h3>{article}</h3>
                    </div>
                )
            })}

            <button className='btn btn-primary' onClick={addArticle}>Add article</button>

            
        </div>
    )
}

export default Counter2

