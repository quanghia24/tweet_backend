// import React, { Component } from 'react'

// export class Counter extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0,
//       }
//     }

//     handleClick = () => {
//         this.setState({
//             count:this.state.count+1
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 <h2>{this.state.count}</h2>
//                 <button onClick={this.handleClick} className='btn btn-success'>Clickme</button>
//             </div>
//         )
//     }
// }

// export default Counter

import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         likes:0,
      }
    }
    handleLike = () => {
        this.setState({
            likes:this.state.likes+1
        });
    }
  render() {
    return (
      <div>
        <button className='btn btn-success' onClick={this.handleLike}>likes {this.state.likes}</button>
      </div>
    )
  }
}

export default Counter
