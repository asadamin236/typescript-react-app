import React, { useState } from 'react'
import Button from '@mui/material/Button';

const Counter = () => {
  let initialVal = 0
  const [toggle, setToggle] = useState(initialVal)

  const handleIncrement = () => {
    setToggle(toggle + 1)
  }

  const handleDecrement = () => {
    setToggle(toggle - 1)
  }
  const reset = () => {
    setToggle(initialVal)
  }

  return (
    <div>
      <h1>{toggle}</h1>
      <div className='flex gap-2'>
        <Button onClick={handleIncrement} variant="contained">+ Increment</Button>
        <Button onClick={handleDecrement} variant="contained">- Decrement</Button>
        <Button onClick={reset} variant="contained"> Reset</Button>
      </div>
    </div>
  )
}

export default Counter