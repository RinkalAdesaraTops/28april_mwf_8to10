import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

const StateExample = () => {
  const blk = {
    backgroundColor:'black'
  }
  const wht = {
    backgroundColor:'yellow'
  }
    // hooks
    // var a=10
    const [count,setCount] = useState(0)
    const [status,setStatus] = useState(false)
    const [clsName,setClsName] = useState({
      backgroundColor:'yellow'
    })
    const changeData = ()=>{
        // setCount(15)
        setCount(count+1)
    }
    const changeBkg = ()=>{
      console.log("status old value "+status);
      setStatus(!status)
      console.log("status new value "+status);
      (status)?setClsName(blk):setClsName(wht)
      
    }
  return (
    <div style={clsName}>
        <h3>Count is -- {count}</h3>
        <button onClick={changeData}>Add</button>
        <button onClick={()=>setCount(count-1)}>Minus</button>

    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label={status == 0 ?"Light OFF":"Light ON"}
        onClick={changeBkg}
      />      
    </Form>
    </div>
  )
}
export default StateExample
