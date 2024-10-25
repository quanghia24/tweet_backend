import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            posts:[]
        }
        
    }
    usernameHandler = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    passHandler = (e) => {
        this.setState({
            password:e.target.value
        })
    }



    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({
            posts:data
        }))
    }
    
    render() {
        const {posts} = this.state
        return (
            <div className='container'>
                <input type='text' value={this.state.username} onChange={this.usernameHandler} placeholder='enter your username' className='form-control'></input>
                <input type='password' value={this.state.password} onChange={this.passHandler} placeholder='enter your password' className='form-control'></input>
                <button type='submit' className='btn btn-primary'>Submit</button>
                
                {posts.map(post => 
                    <h3 key={post.id}>{post.title}</h3>
                )}
            </div>
        )
    }
}

export default Form
