import React from 'react'
import { myContext } from '../../App'

function ComponentB() {
    return (
        <div>
            <myContext.Consumer>
                {
                    data => {
                        return <h2>{data}</h2>
                    }
                }
            </myContext.Consumer>
        </div>
    )
}

export default ComponentB
