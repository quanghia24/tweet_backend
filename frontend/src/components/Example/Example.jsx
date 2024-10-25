import React from 'react'

function myElement(names){
    
    return (
        names.map(name => 
            <div key={name}>
                {`${name}`}
            </div>
        )
    )
    
}

function Example(props) {
  return (
    <div>
        {myElement(props.names)}
    </div>
  )
}

export default Example
