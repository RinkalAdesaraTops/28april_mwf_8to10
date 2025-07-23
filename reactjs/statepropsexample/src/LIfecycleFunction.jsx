import React, { useEffect, useState } from 'react'

const LIfecycleFunction = () => {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    setTimeout(()=>{
        setCount(count+1)
    },3000)
  })
  return (
    <div>
        <h3>Count is -- {count}</h3>
    </div>
  )
}

export default LIfecycleFunction
