import React, { Component } from 'react';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: "Quanghia"
        }
    }

    handleChange = () => {
        this.setState({
            name:this.state.name === "Quanghia"? "Brian": "Quanghia"
        })
    }
    render() {
        return (
            <div>
                <h1 className='bg-primary text-white text-center'>{this.state.name}</h1>
                <button className='btn btn-success' onClick={this.handleChange}>Change text</button>
            </div>
        );
    }
}

export default Profile;