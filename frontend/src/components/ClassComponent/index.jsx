import React, {Component} from "react";



class MyClass extends Component {
    
    render(){
        return (
            <>
            {/* props is immutable */}
                <h2 className="bg-black text-white text-center">We are inside a class component </h2>
                <button className="btn btn-primary" onClick={this.props.myClick}>show email</button>
            </>
        );
    }
}

export default MyClass;