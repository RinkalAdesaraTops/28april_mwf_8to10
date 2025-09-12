import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCrudComponent from './UserCrudComponent'
import UsememoExample from './UsememoExample'
import ContextExample from './ContextExample'
import UsecontextExample from './UsecontextExample'

function App() {
  let [count,setCount] = useState(0)
  // useREf hooks
  let a=10
  let addCounter = ()=>{
    a=a+1
    console.log(a);
    setCount(count+1)
  }
  
  return (
    <>
    <UsecontextExample />
    {/* <ContextExample /> */}
    {/* <UsememoExample /> */}
    {/* <UserCrudComponent /> */}
      {/* <h3>Hooks Example</h3>
      <h4>Counter is -- {count}</h4>
      <h5>A is -- {a}</h5>
      <button onClick={addCounter}>Add Counter</button> */}
      {/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(json => console.log(json.data))
      */}
    </>
  )
}

export default App
