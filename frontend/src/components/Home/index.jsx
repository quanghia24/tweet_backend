import React from "react";

function Home(props) {
    function handleClickMe(){
        alert("button is clicked");
    }

    return (
        <div>
            <h1>{props.name} this is the {props.version} version</h1>
            <button  className = "btn btn-success"onClick={handleClickMe}>click me</button>
        </div>
    );
}

export default Home;