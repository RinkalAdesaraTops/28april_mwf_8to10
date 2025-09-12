import React, { useMemo, useState } from 'react'

const UsememoExample = () => {
    let [count,setCount] = useState(0)
    let [num,setNum] = useState(0)
    const addCount = ()=>{
        console.log('add count func called..');
        setCount(count+1)
    }
    const addNum = ()=>{
        console.log('num func called..');
        setNum(num+1)
    }
    const addCalc = ()=>{
        console.log('addCalc func called..');      
        for(let i=1;i<=100000;i++){
            count+=i
        }
        return count
    }
    let calcFunc = useMemo(()=>{
        return addCalc()
    },[count])
  return (
    <div>
      <h3>Use memo hooks Example</h3>
        <h4>Count is -- {count}</h4>
        <button onClick={addCount}>Add Count</button>
        <h4>Number is -- {num}</h4>
        <button onClick={addNum}>Add Number</button>
        <h4>Calc is == {calcFunc}</h4>
    </div>
  )
}

export default UsememoExample
