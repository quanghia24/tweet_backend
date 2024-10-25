import React, {useContext} from 'react'
import { my2ndContext } from '../../App'
function ComponentB() {
    const data = useContext(my2ndContext)
  return (
    <div>
      ComponentB
      {data}
    </div>
  )
}

export default ComponentB
