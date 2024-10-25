import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";

const initialState = {
    loading:true,
    article:{},
    error:'',

}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {...state, loading:true, error:''}
        case 'FETCH_SUCCESS':
            return {...state, loading:false, article:action.payload, error:''}
        case 'FETCH_FAILURE':
            return {...state, loading:false, article:{}, error:'error in data fetching'}
        default:
            return state;
    }
}


function DataFetching() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [id, setId] = useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            dispatch({type:'FETCH_SUCCESS', payload: res.data})
        })
        .catch(e => {
            dispatch({type:'FETCH_FAILURE'})
            console.log(e)
        })
    }, [id])
    return (
        <div>
            <input className="form-control" value={id} onChange={(e) => setId(e.target.value)}/>
            {state.loading && <h1>Loading...</h1>}
            {!state.loading && <h1>{state.article.title}</h1>}
            {!state.loading && <p>{state.article.body}</p>}
        </div>


    );
}

export default DataFetching;
