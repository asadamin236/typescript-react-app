
import React, { useState } from 'react'
import {Button} from "@mui/material"

const CounterButton = () => {
  const [toggleInp, setToggle] = useState(false)
  
  let handleReset = ()=> {
    setToggle(prev => !prev)
  }
  return (
    <div>
      <div className='flex justify-center'>
        {`Toggle Input Number ${toggleInp}`}
      </div>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  )
}

export default CounterButton