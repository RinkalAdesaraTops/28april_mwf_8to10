import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Rtk/CounterReducer'

const RtkCounterComponent = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
      <h3>Redux Toolkit Example</h3>
      <h3>Count is --- {count}</h3>
      <button onClick={()=>dispatch(increment())} >Add</button>
      <button onClick={()=>dispatch(decrement())}>Minus</button>
    </div>
  )
}

export default RtkCounterComponent
