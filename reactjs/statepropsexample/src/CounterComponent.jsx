import React from 'react'

const CounterComponent = ({myname,myage,count}) => {
  return (
    <div>
      <h3>Count is --- {count}</h3>
      <h4>My name is -- {myname}</h4>
      <h4>My age is -- {myage}</h4>
    </div>
  )
}
// const CounterComponent = (props) => {
//   return (
//     <div>
//       <h3>Count is --- {props.count}</h3>
//       <h4>My name is -- {props.myname}</h4>
//       <h4>My age is -- {props.myage}</h4>
//     </div>
//   )
// }


export default CounterComponent
